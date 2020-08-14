import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

const apiURL = 'https://lakhexpress.herokuapp.com/api/v1';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  courses = [];

  constructor(private http: HttpClient) {
  }

  fetchAll(){
    return this.http.get(apiURL + '/course');
  }

  add(courseForm) {
    return this.http.post(apiURL + `/course`, courseForm);
  }

  update(courseForm) {
    return this.http.put(apiURL + '/course', courseForm);
  }

  delete(courseId) {
    return this.http.delete(apiURL + '/course/' + courseId);
  }
}
