import LocalScheme from '@nuxtjs/auth/lib/schemes/local'

const DEFAULTS = {
  tokenRequired: true,
  tokenType: 'Bearer',
  globalToken: true,
  refreshToken: true,
  refreshTokenKey: 'refresh_token',
  accessTokenKey: 'access_token',
  tokenName: 'Authorization',
  client_id: process.env.OAUTH_CLIENT_ID,
  client_secret: process.env.OAUTH_CLIENT_SECRET,
  scope: '*',
  grant_type: 'password'
}

export default class GrantPasswordScheme extends LocalScheme {
  constructor(auth, options) {
    super(auth, Object.assign({}, DEFAULTS, options))
  }

  async login(endpoint) {
    if (!this.options.endpoints.login) {
      return
    }

    const accessTokenKey = this.options.accessTokenKey
      ? this.options.accessTokenKey
      : 'access_token'

    const refreshTokenKey = this.options.refreshTokenKey
      ? this.options.refreshTokenKey
      : 'refresh_token'

    // Ditch any leftover local tokens before attempting to log in
    await this._logoutLocally()

    const opts = Object.assign({}, endpoint, {
      data: {
        client_id: this.options.client_id,
        client_secret: this.options.client_secret,
        scope: this.options.scope,
        grant_type: this.options.grant_type,
        ...endpoint.data
      }
    })

    const result = await this.$auth.request(opts, this.options.endpoints.login)

    if (this.options.tokenRequired) {
      const token = this.options.tokenType
        ? this.options.tokenType + ' ' + result[accessTokenKey]
        : result[accessTokenKey]

      this.$auth.setToken(this.name, token)
      this._setToken(token)

      if (this.options.refreshToken) {
        const refreshToken = this.options.tokenType
          ? this.options.tokenType + ' ' + result[refreshTokenKey]
          : result[refreshTokenKey]

        this.$auth.setRefreshToken(this.name, refreshToken)
      }
    }

    return this.fetchUser()
  }
}
