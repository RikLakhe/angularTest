import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-form',
  template: `
    <div>
      <input #myInput type="text"/>
      <button (click)="onClick(myInput.value)" (mouseover)="myInput.value=(null)" (mouseout)="onHoverout()">Click me!</button>
    </div>
  `,
  styles: [
  ]
})
export class SimpleFormComponent implements OnInit {

  onClick(value) {
    console.log('ggg clicked',value)
  }

  onHover() {
    console.log('gggg hover')
  }

  onHoverout() {
    console.log('gggg hove out')
  }
  constructor() { }

  ngOnInit(): void {
  }

}
