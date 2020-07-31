import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-form',
  template: `
    <div>
      <input type="text"/>
      <button (click)="onClick()" (mouseover)="onHover()" (mouseout)="onHoverout()">Click me!</button>
    </div>
  `,
  styles: [
  ]
})
export class SimpleFormComponent implements OnInit {

  onClick() {
    console.log('ggg clicked')
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
