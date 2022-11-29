import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TextDataService {

  api = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getCodeData(): Observable<any> {
    return this.http.get(`${this.api}/profile`).pipe(map( item => item))
  }

}
