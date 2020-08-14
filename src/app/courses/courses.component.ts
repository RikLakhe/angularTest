import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {CoursesService} from '../services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  selectedCourse = undefined;
  courses;

  constructor(private courseService: CoursesService) {
  }

  ngOnInit(): void {
    this.onCourseRestart();
    this.loadCourse()
  }

  onCourseRestart = () => {
    const empty = {
      id: null,
      title: '',
      description: '',
      percentageComplete: 0,
      favourite: false
    };

    this.selectedCourse = empty;
  };

  loadCourse = ()=>{
    this.courseService.fetchAll().subscribe(data=>this.courses = data)
  }

  onCourseSelect = (data) => {
    this.selectedCourse = data;
  };

  onCourseDelete = (data) => {
    return this.courseService.delete(data.id).subscribe(data=>this.loadCourse())
  };

  onCourseAddUpdate = (data) => {
    if (data.id || data.id===0) {
      this.courseService.update(data).subscribe(data=>this.loadCourse())
    } else {
      let formData = {...data};
      formData.id = this.courses[this.courses.length-1].id + 1;
      this.courseService.add(formData).subscribe(data=>this.loadCourse())
    }
  };
}
