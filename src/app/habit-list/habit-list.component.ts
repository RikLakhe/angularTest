import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-habit-list',
  template: `
  <li>{{habit.title}}</li>
  `,
  styles: [
  ]
})
export class HabitListComponent {

  @Input() habit;

  constructor() { }

  ngOnInit(): void {
  }

}
