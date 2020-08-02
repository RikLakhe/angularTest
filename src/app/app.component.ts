import { Component, Inject } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

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
<form [formGroup]="habitForm" (ngSubmit)="onSubmit(habitForm.value)">
<input type="text" placeholder="Title" formControlName="title"/>
<button type="submit">Add</button>
</form>
</ul>
      
  </div>
  `, styles: [
    `app-simple-form{
      margin-bottom:10px;
    }`
  ]
})

export class AppComponent {

  habitForm; 

  habits=[
    {id:1,title:'check in with parenst once a week'},
    {id:2,title:'check in with parenst once  2 week'},
    {id:3,title:'check in with parenst once  3 week'},
    {id:4,title:'check in with parenst once  4 week'},
  ]
  
  onSubmit(newHabit){
      const id = this.habits.length +1;
      newHabit.id = id;

      this.habits.push(newHabit)

      this.habitForm.reset();
  }

  onUpdate(id,text) {
    console.log(id, text)
    this.mail.update(id,text)
  }

  constructor(
    @Inject('mail') private mail,
    @Inject('api') private api,
    private formBuilder: FormBuilder
  ) { 
    this.habitForm = this.formBuilder.group({
      title: ''
    })
  }
}
