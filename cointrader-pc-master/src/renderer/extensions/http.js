/**
 * http: axios
 */
import axios from 'axios'
import config from '../../../config/config'
import { AuthToken } from '../service/auth-token'
import { convertToFormData, getUrl } from '../utils/request-deal'

function setAuth (url) {
  axios.defaults.headers.Authorization = `Bearer ${AuthToken.getToken()}`
  return url
}

function initialAxios () {
  axios.defaults.baseURL = config.backendUrl
  axios.defaults.headers['Content-Type'] = 'application/json;charset=UTF-8'
  axios.defaults.validateStatus = status => (status >= 200 && status < 300) || (status >= 400)
}

initialAxios()

export class Http {
  static get (url, data) {
    const uri = getUrl(url, data)
    return Http.responseDeal(axios.get(setAuth(uri)))
  }
  static getFile (url) {
    // 适用于需要登录的情况
    return axios.get(setAuth(url), { responseType: 'blob' }).then(res => res.data)
  }
  static post (url, data) {
    return Http.responseDeal(axios.post(setAuth(url), data))
  }
  static postForm (url, data) {
    const formData = convertToFormData(data)
    return Http.responseDeal(axios.post(setAuth(url), formData, { headers: { 'Content-Type': 'multipart/form-data' } }))
  }
  static del (url) {
    return Http.responseDeal(axios.delete(setAuth(url)))
  }
  static put (url, data) {
    return Http.responseDeal(axios.put(setAuth(url), data))
  }
  static putForm (url, data) {
    const formData = convertToFormData(data)
    return Http.responseDeal(axios.put(setAuth(url), formData, { headers: { 'Content-Type': 'multipart/form-data' } }))
  }
  static all (callback, ...reqs) {
    const queue = reqs.map((req) => {
      if (req.method === 'GET') {
        return Http.get(req.url, req.data)
      }
      return axios({
        method: req.method,
        url: setAuth(req.url),
        data: req.data
      })
    })
    return axios.all(queue).then(axios.spread((acct, perms) => {
      callback(acct, perms)
    }))
  }
  static responseDeal (promise) {
    return promise.then((res) => {
      // 去除 config, request, status, statusText...等一些其他字段，关注 data
      const { data, status } = res
      const { message, msg, code, result } = data || {}
      if (data) {
        if (Http.errorValidate(data)) {
          const error = new Error(message || msg)
          error.statusCode = status
          error.resCode = code
        } else {
          return result
        }
      }
      return res
    }, (e) => {
      throw e
    })
  }
  static errorValidate (data = {}) {
    // 与后台约定的错误验证方式
    // 现约定， 对于返回的数据的字段 code，0 表示成功，!0 表示出错
    return data.code !== 0
  }
}

const HttpPlugin = {}

HttpPlugin.install = (Vue) => {
  Vue.prototype.$http = Http
}

export default HttpPlugin
