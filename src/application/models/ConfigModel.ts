export default class ConfigModel {
  private webSocketsUrl: string

  constructor (data: {
    webSocketsUrl: string;
  }) {
    try {
      this.webSocketsUrl = data.webSocketsUrl
    } catch (e) {
      throw new Error('Error while parse config.json')
    }
  }

  public getWebSocketsUrl (): string {
    return this.webSocketsUrl
  }
}
