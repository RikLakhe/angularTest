import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <app-simple-form 
      *ngFor='let message of mail.messages'
      [message] = "message"
      ></app-simple-form>
  </div>
  `
})
export class AppComponent {
  title = 'app testing';

  constructor(
    @Inject('mail') private mail,
    @Inject('api') private api
  ) { }
}
