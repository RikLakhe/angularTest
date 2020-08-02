import { Injectable } from '@angular/core';

@Injectable()

export class MailService {

  messages = [
    { id: 0, text: 'this is second' },
    { id: 1, text: 'this is first' },
    { id: 2, text: 'this is thirdd' },
    { id: 3, text: 'this is fourth' },
  ]

  update(id, text) {
    this.messages= this.messages.map(m=>m.id===id?{id,text}:m)
  }

  constructor() { }
}
