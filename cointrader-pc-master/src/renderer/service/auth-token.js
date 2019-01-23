/**
 * auth_token
 */
class AuthTokenClass {
  key = 'AUTH_TOKEN'
  expireKey = 'EXPIRE'
  setToken (val, expired) {
    const oldToken = this.getT()
    localStorage.setItem(this.key, val.token)
    localStorage.setItem(this.expireKey, val.token_expire)
    console.info(oldToken)
    // if (this.next && token !== oldToken) this.next(token, expired)
  }
  getToken () {
    const token = this.getT()
    if (!token) return token
    const now = Date.now()
    const expireTime = localStorage.getItem(this.expireKey) * 1000
    if (now > expireTime) {
      this.setToken('', true)
      return ''
    }
    return token
  }
  getT () {
    return localStorage.getItem(this.key)
  }
}

export const AuthToken = new AuthTokenClass()
