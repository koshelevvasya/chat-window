/*
import ConfigService from './services/ConfigService'
import ConfigProvider from './providers/WebSockets'

import WSService from './services/WSService'
import WebSocketsProvider from './providers/WebSockets'

const configService = new ConfigService(ConfigProvider())

const wsService = new WSService(WebSocketsProvider())

export {
  wsService
}
*/
import ConfigService from './services/ConfigService'
import ConfigModel from './models/ConfigModel'
import ConfigProvider from './providers/Config'

import ChatService from './services/ChatService'
import WebSocketsProvider from './providers/WebSockets'

const configService: ConfigService = new ConfigService(new ConfigModel(ConfigProvider.get()))
const chatService: ChatService = new ChatService(WebSocketsProvider)

export {
  configService,
  chatService
}
