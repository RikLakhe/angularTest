import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  courseForm: any;
  selectedCourse = undefined;
  courses = [
    {
      id: 0,
      title: 'Fundamental',
      description: 'learn fundamental',
      percentageComplete: 29,
      favourite: false
    },
    {
      id: 1,
      title: 'core',
      description: 'core',
      percentageComplete: 11,
      favourite: false
    },
    {
      id: 2,
      title: 'javascript',
      description: 'learn js',
      percentageComplete: 44,
      favourite: true
    },
    {
      id: 3,
      title: 'typescript',
      description: 'learn ts',
      percentageComplete: 55,
      favourite: true
    }
  ];

  constructor(private formBuilder: FormBuilder) {
    this.courseForm = this.formBuilder.group({
      id: '',
      title: '',
      description: '',
    });
  }

  ngOnInit(): void {
    this.onCourseRestart();
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
    this.courseForm = this.formBuilder.group({
      id: data.id,
      title: data.title,
      description: data.description
    });
  };

  onCourseDelete = (data) => {
    this.courses = this.courses.filter(item => item.id !== data.id);
  };

  onCourseAddUpdate = (data) => {
    if (data.id) {
      let temp = this.courses.map(course=>{
        if(course.id === data.id){
          return data
        }else{ return course}
      })

      this.courses = temp;
    } else {
      let formData = {...data};
      formData.id = this.courses[this.courses.length-1].id + 1;

      this.courses.push(formData)
    }
  };
}
