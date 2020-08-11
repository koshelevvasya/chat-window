import IWebSocketsProvider from './../providers/WebSockets/iWebSoketsProvider'
import { configService } from './../index'
import MessageModel from './../models/MessageModel'

export default class ChatService {
  protected provider: IWebSocketsProvider

  constructor (provider: IWebSocketsProvider) {
    this.provider = provider
  }

  public connectByName (name: string, onOpenCallback: () => any): void {
    const webSocketUrl = configService.getWebSocketUrl()
    const urlWithName = this._getUrlWithName(webSocketUrl, name)

    this._connect(urlWithName, onOpenCallback)
  }

  public sendMessage (message: MessageModel): void {
    this.provider.sendMessage(message.getMessage())
  }

  public handleMessage (callback: (message: MessageModel) => any): void {
    this.provider.handleMessage(callback)
  }

  public getWebSocketConnectionUrl (): string {
    return configService.getWebSocketUrl()
  }

  private _getUrlWithName (url: string, name: string) {
    return url.replace('{NAME}', encodeURI(name))
  }

  private _connect (url: string, onOpenCallback: () => any): void {
    this.provider.connect(url)
    this.provider.handle('open', onOpenCallback)
  }
}
