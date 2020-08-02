import {Component, Inject, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {HabitService} from './services/habit.service';

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
        <app-habit-list *ngFor="let habit of habits | async" [habit]="habit"></app-habit-list>
      </ul>
      <app-habit-form (addHabit)="onAddHabit($event)"></app-habit-form>
    </div>
  `, styles: [
      `app-simple-form {
      margin-bottom: 10px;
    }`
  ]
})

export class AppComponent implements OnInit {

  habits: Observable<any>;

  onAddHabit(newHabit) {
    this.habitService.addHabit(newHabit)
  }

  onUpdate(id, text) {
    console.log(id, text);
    this.mail.update(id, text);
  }

  constructor(
    @Inject('mail') private mail,
    @Inject('api') private api,
    private habitService: HabitService
  ) {
  }

  ngOnInit(): void {
    this.habits = this.habitService.getHabits()
  }
}
