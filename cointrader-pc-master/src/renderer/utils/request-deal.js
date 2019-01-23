export function queryString (params, encode) {
  let str = ''
  Object.keys(params).forEach((i) => {
    str += `&${i}=${encode ? encodeURIComponent(params[i]) : params[i]}`
  })
  return str.slice(1)
}

/**
 * request转 get 请求
 * */
export function getUrl (url, params) {
  if (!params || Object.keys(params).length <= 0) return url
  let key = url + (url.indexOf('?') >= 0 ? '&' : '?')
  if (params) key += queryString(params, true)
  return key
}
