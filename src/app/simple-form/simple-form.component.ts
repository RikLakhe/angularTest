import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-form',
  template: `
    <div>
      <input #myInput type="text"/>
      <button (click)="onClick($event,myInput.value)">Click me!</button>
    </div>
  `,
  styles: [
  ]
})
export class SimpleFormComponent implements OnInit {

  onClick($event,value) {
    console.log('ggg clicked',$event, value)
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
