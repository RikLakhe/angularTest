import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

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

  constructor(private http: HttpClient) {
  }

  add(courseForm) {
    return this.http.post('https://lakhexpress.herokuapp.com/api/v1/course',courseForm)
  }

  findAll() {
    return this.http.get('https://lakhexpress.herokuapp.com/api/v1/course')
  }

  findOne(courseId) {
    return this.courses.find(item => item.id === courseId);
  }

  update(courseForm) {
    this.courses = this.courses.map(item => {
      if (item.id === courseForm.id) {
        return courseForm;
      } else {
        return item;
      }
    });
  }

  delete(courseId) {
    return this.http.delete('https://lakhexpress.herokuapp.com/api/v1/course',courseId)
    // this.courses = this.courses.filter(item=>item.id!==courseId)
  }
}
