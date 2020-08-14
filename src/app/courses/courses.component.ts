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
    this.courseService.findAll().subscribe(data=>this.courses = data)
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

  onCourseSelect = (data) => {
    this.selectedCourse = data;
  };

  onCourseDelete = (data) => {
    return this.courseService.delete(data.id).subscribe(data=>console.log(data))
    // this.courseService.findAll().subscribe(data=> consol)
  };

  onCourseAddUpdate = (data) => {
    if (data.id || data.id===0) {
      this.courseService.update(data)
    } else {
      let formData = {...data};
      formData.id = this.courses[this.courses.length-1].id + 1;
      this.courseService.add(formData)
    }
  };
}
