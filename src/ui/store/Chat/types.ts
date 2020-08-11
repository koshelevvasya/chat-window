import MessageModel from '../../../application/models/MessageModel'

type RootState = {
  version: string;
}

type ChatState = {
  connectingInProcess: boolean,
  tooLongConnection: boolean,
  connected: boolean,
  messages: MessageModel[]
}

export { RootState, ChatState }
