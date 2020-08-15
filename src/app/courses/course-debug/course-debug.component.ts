import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-course-debug',
  templateUrl: './course-debug.component.html',
  styleUrls: ['./course-debug.component.css']
})
export class CourseDebugComponent {
  @Input() courses;
}
