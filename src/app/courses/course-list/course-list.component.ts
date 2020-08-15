import {Component, Input, OnInit, Output} from '@angular/core';
import {EventEmitter} from '@angular/core';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent{
  @Input() courses;
  @Output() selected = new EventEmitter();
  @Output() delete = new EventEmitter();
}
