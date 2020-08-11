import ConfigModel from './../models/ConfigModel'

export default class ConfigService {
  protected config: ConfigModel

  constructor (config: ConfigModel) {
    this.config = config
  }

  public get (): ConfigModel {
    return this.config
  }

  public getWebSocketUrl (): string {
    const url = this.config.getWebSocketsUrl()
    const preparedUrl = this._getPreparedUrl(url)

    return preparedUrl
  }

  private _getPreparedUrl (url: string): string {
    const variables: {[key: string]: string} = {
      THIS_LOCATION: window.location.protocol + '//' + window.location.host,
      THIS_HOST: window.location.hostname,
      THIS_PORT: window.location.port,
      THIS_PROTOCOL: window.location.protocol,
      THIS_WS_PROTOCOL: window.location.protocol === 'http:' ? 'ws:' : 'wss:'
    }

    for (const key of Object.keys(variables)) {
      url = url.replace('{' + key + '}', variables[key])
    }

    return url
  }
}
