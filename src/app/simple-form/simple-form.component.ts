import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-simple-form',
  template: `
    <div>
      <input #myInput type="text" [(ngModel)]="message"/>
      <button (click)="update.emit({text:message})">Click me!</button>
    </div>
  `,
  styles: [
  ]
})
export class SimpleFormComponent implements OnInit {

  @Input() message;

  @Output() update = new EventEmitter();

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
    // setInterval(()=> this.message = Math.random().toString(),10000)
   }

  ngOnInit(): void {
  }

}
