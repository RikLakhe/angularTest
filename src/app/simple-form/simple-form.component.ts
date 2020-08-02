import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-simple-form',
  template: `
      <input 
      #myInput 
      type="text" 
      [(ngModel)]="message" 
      [ngClass]="{mousedown: isMousedown}"
      (mousedown)="isMousedown = true"
      (mouseup)="isMousedown = false"
      (mouseleave)="isMousedown = false"      
      />
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

  button:hover{
    border-bottom: 2px solid black;
  }

  .mousedown{
    border: 2px solid green;
    background-color: pink;
  }
  `]
})
export class SimpleFormComponent implements OnInit {

  isMousedown;

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
