import IWebSocketsProvider from './iWebSoketsProvider'
import MessageModel from '@/application/models/MessageModel'

class WebSockets implements IWebSocketsProvider {
  protected connection: WebSocket | null = null

  public connect (url: string) {
    this.connection = new WebSocket(url)
  }

  public handle (eventType: string, callback: () => void) {
    if (this.connection === null) {
      return
    }

    switch (eventType) {
      case 'open':
        return this.handleOnOpen(callback)
    }
  }

  public sendMessage (message: string) {
    if (this.connection === null) {
      return
    }

    this.connection.send(JSON.stringify({
      text: message
    }))
  }

  public handleMessage (callback: (message: MessageModel) => void) {
    if (this.connection === null) {
      return
    }

    this.connection.onmessage = (event: any) => {
      try {
        const messageData: any = JSON.parse(event.data)

        if (messageData.typing === true) {
          return
        }

        const message = new MessageModel({
          type: messageData.name === undefined ? 'service' : 'incoming',
          name: messageData.name || '',
          message: messageData.text,
          created: messageData.created
        })

        callback(message)
      } catch (e) {
        throw new Error('Error while parse incoming message')
      }
    }
  }

  private handleOnOpen (callback: () => void) {
    if (this.connection !== null) {
      this.connection.onopen = callback
    }
  }
}

const webSockets = new WebSockets()

export default webSockets
