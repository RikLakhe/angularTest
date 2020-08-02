import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class HabitService {

  habits = [
    {id: 0, title: 'check in with parenst once a week'},
    {id: 1, title: 'check in with parenst once  2 week'},
    {id: 2, title: 'check in with parenst once  3 week'},
    {id: 3, title: 'check in with parenst once  4 week'},
  ];

  addHabit(newHabit) {
    const id = this.habits.length + 1;
    newHabit.id = id;
    this.habits.push(newHabit);
  }

  getHabits(): Observable<any> {
    return of(this.habits);
  }

  constructor() {
  }
}
