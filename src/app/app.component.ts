import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div>
    <!-- <ul>
    <li *ngFor='let message of mail.messages'>{{message.text}}</li>
    </ul>
      <app-simple-form *ngFor='let message of mail.messages'
      [message] = "message.text"
      (update)="onUpdate(message.id,$event.text)"
      ></app-simple-form> -->
<ul>
<app-habit-list *ngFor="let habit of habits" [habit]="habit"></app-habit-list>
</ul>
      <app-habit-form (addHabit)="onAddHabit($event)"></app-habit-form>
  </div>
  `, styles: [
    `app-simple-form{
      margin-bottom:10px;
    }`
  ]
})

export class AppComponent {

  habits=[
    {id:1,title:'check in with parenst once a week'},
    {id:2,title:'check in with parenst once  2 week'},
    {id:3,title:'check in with parenst once  3 week'},
    {id:4,title:'check in with parenst once  4 week'},
  ]

  onAddHabit(newHabit){
    const id = this.habits.length +1;
    newHabit.id = id;
    this.habits.push(newHabit)
  }

  onUpdate(id,text) {
    console.log(id, text)
    this.mail.update(id,text)
  }

  constructor(
    @Inject('mail') private mail,
    @Inject('api') private api){}
}
