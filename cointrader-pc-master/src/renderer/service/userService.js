import {Http} from '../extensions/http'

export default class UserService {
  static getAssets (url, data) {
    return Http.post(url, data)
  }
}
