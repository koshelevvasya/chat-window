import Moment from 'moment'

export default class MessageModel {
  private type: string
  private message: string
  private senderName: string
  private created: Moment.Moment

  constructor (params: {
    type?: string;
    message: string;
    name: string;
    created?: string;
  }) {
    try {
      this.type = params.type || 'outgoing'
      this.message = params.message
      this.senderName = params.name
      this.created = params.created ? Moment(params.created) : Moment()
    } catch (e) {
      throw new Error('Error while create UserModel')
    }
  }

  public getType (): string {
    return this.type
  }

  public getMessage (): string {
    return this.message
  }

  public getSenderName (): string {
    return this.senderName
  }

  public getCreated (): string {
    return this.created.format('HH:mm')
  }
}
