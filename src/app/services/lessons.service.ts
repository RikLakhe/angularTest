import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LessonsService {

  lessons = [
    {id: 1, title: 'testing1'},
    {id: 2, title: 'testing2'},
    {id: 3, title: 'testing3'},
    {id: 4, title: 'testing4'},
    {id: 5, title: 'testing5'},
    {id: 6, title: 'testing6'},
    {id: 7, title: 'testing7'},
    {id: 8, title: 'testing8'},
    {id: 9, title: 'testing9'},
    {id: 10, title: 'testing10'},
  ];

  constructor() {
  }

  all() {
    return this.lessons;
  }

  findOne(lessonId) {
    return this.lessons.find(item => item.id === lessonId);
  }

  add(lessonForm) {
    this.lessons.push(lessonForm);
    return true;
  }

  update(lessonForm) {
    this.lessons = this.lessons.map(item => {
      if (item.id === lessonForm.id) {
        return lessonForm;
      } else {
        return item;
      }
    });
    return true;
  }

  delete(lessonId) {
    this.lessons = this.lessons.filter(item => item.id !== lessonId);
    return true;
  }
}
