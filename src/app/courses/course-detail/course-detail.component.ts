import {Component, Input, OnInit, Output} from '@angular/core';
import {EventEmitter} from '@angular/core';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {
  @Input() selectedCourse;
  @Output() update = new EventEmitter()
  @Output() reset = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

}
