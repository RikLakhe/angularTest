import {Component, Input, OnInit, Output} from '@angular/core';
import {EventEmitter} from '@angular/core';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent{
  selectedCourse;
  originalTitle;

  @Output() update = new EventEmitter()
  @Output() reset = new EventEmitter()

  @Input() set course(value){
    if(value){
      this.selectedCourse = Object.assign({},value);
      this.originalTitle = value.title
    }
  }
}
