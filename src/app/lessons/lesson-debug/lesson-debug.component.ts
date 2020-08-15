import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-lesson-debug',
  templateUrl: './lesson-debug.component.html',
  styleUrls: ['./lesson-debug.component.css']
})
export class LessonDebugComponent{
  @Input() selectedLesson;
}
