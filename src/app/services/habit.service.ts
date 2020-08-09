import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, throwError, Subject, BehaviorSubject} from 'rxjs';
import {tap} from 'rxjs/operators';
import {Habit} from '../habit';

@Injectable({
  providedIn: 'root'
})

export class HabitService {
  private refetchSubject = new BehaviorSubject(null);

  constructor(private http: HttpClient) {
  }

  get refetch() {
    return this.refetchSubject.asObservable();
  }

  getHabits(): Observable<Habit[]> {
    return this.http.get<Habit[]>('https://lakhexpress.herokuapp.com/api/v1/habit');
  }

  addHabit(newHabit) {
    return this.http
      .post<Habit[]>('https://lakhexpress.herokuapp.com/api/v1/habit', newHabit)
      .pipe(tap(() => this.refetchSubject.next(null)));
  }
}
