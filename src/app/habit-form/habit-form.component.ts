import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-habit-form',
  template: `
    
<form [formGroup]="habitForm" (ngSubmit)="onSubmit(habitForm.value)">
<input type="text" placeholder="Title" formControlName="title"/>
<button type="submit">Add</button>
</form>
  `,
  styles: [
  ]
})
export class HabitFormComponent implements OnInit {
  habitForm: any; 
  
  @Output() addHabit = new EventEmitter();

  onSubmit(newHabit){
    this.addHabit.emit(newHabit);
    this.habitForm.reset();
}

  constructor(private formBuilder: FormBuilder
    ) { 
      this.habitForm = this.formBuilder.group({
        title: ''
      })
    }

  ngOnInit(): void {
  }

}
