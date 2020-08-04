import {Component, Inject, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {switchMap} from 'rxjs/operators';

import {HabitService} from '../services/habit.service';
import {Habit} from '../habit';

@Component({
  selector: 'app-habit-dashboard',
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


export class HabitDashboardComponent implements OnInit {
  habits: Observable<Habit[]>;

  onAddHabit(newHabit) {
    this.habitService.addHabit(newHabit).subscribe();
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
    this.habits = this.habitService.refetch.pipe(
      switchMap(()=>this.habitService.getHabits())
    )
    // this.habits = this.habitService.getHabits().pipe(map(habits => {
    //   return habits.map(habit => {
    //     habit.steak = habit.count > 5;
    //     return habit;
    //   });
    // }));

    // this.habitService.getHabits().subscribe((data) => {
    //   this.habits = data.data.pipe
    // });
  }
}
