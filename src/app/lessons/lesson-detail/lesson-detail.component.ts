import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-lesson-detail',
  templateUrl: './lesson-detail.component.html',
  styleUrls: ['./lesson-detail.component.css']
})
export class LessonDetailComponent {
  @Input() themeColor;
  @Input() selectedLesson;
  @Output() updateColor = new EventEmitter();
}
