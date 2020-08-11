import MessageModel from './../../models/MessageModel'

export default interface IWebSocketsProvider {
  connect: (url: string) => void
  handle: (eventType: string, callback: () => any) => void
  sendMessage: (message: string) => void
  handleMessage: (callback: (message: MessageModel) => any) => void
}