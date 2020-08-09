import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Camp} from '../camp';

@Injectable({
  providedIn: 'root'
})

export class CampingService {

  constructor(private http: HttpClient) { }

  getCampingDetails(): Observable<Camp[]> {
    return this.http.get<Camp[]>('https://lakhexpress.herokuapp.com/api/v1/camping');
  }

  getCampingInfo(id:number): Observable<string>{
    return this.http.get<string>('https://lakhexpress.herokuapp.com/api/v1/camping/info/'+id);
  }

  getCampingItem(id:number): Observable<any>{
    return this.http.get<any>('https://lakhexpress.herokuapp.com/api/v1/camping/item/'+id);
  }
}
