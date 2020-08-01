import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-form',
  template: `
    <div>
    {{message}}
      <input #myInput type="text" [(ngModel)]="message"/>
      <button (click)="onClick($event,myInput.value)">Click me!</button>
    </div>
  `,
  styles: [
  ]
})
export class SimpleFormComponent implements OnInit {

  @Input() message;

  onClick($event,value) {
    console.log('ggg clicked',$event, value)
  }

  onHover() {
    console.log('gggg hover')
  }

  onHoverout() {
    console.log('gggg hove out')
  }
  constructor() {
    setInterval(()=> this.message = Math.random().toString(),10000)
   }

  ngOnInit(): void {
  }

}
