import {Component, OnInit, Input} from '@angular/core';
import {Habit} from '../habit';

@Component({
  selector: 'app-habit-list',
  template: `
    <li
        [ngClass]="{red : habit.steak}"
    >{{habit.title}} (Count : {{habit.count}})</li>
  `,
  styles: [`
  .red{
    color: red;
    font-weight: bold;
  }
  `]
})
export class HabitListComponent {

  @Input() habit: Habit;

  constructor() {
  }

  ngOnInit(): void {
  }

}
