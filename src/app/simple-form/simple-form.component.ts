import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-simple-form',
  template: `
      <input #myInput type="text" [(ngModel)]="message"/>
      <button (click)="update.emit({text:message})">Click me!</button>
  `,
  styles: [`
  :host{
    display: flex;
    flex-direction:column;
  }

  *{
    font-family:monospace;
  }

  input:focus{
    font-weight:bold;
    color: blue
  }

  button{
    border : none;
    padding: 5px;
  }
  `]
})
export class SimpleFormComponent implements OnInit {

  @Input() message;

  @Output() update = new EventEmitter();

  onClick($event, value) {
    console.log('ggg clicked', $event, value)
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
