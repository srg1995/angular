import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class PaginationService {

  constructor(
    private _http: HttpClient
    
  ) { }

  getComments(): Observable<Comment[]>{
    return this._http.get<Comment[]>('https://jsonplaceholder.typicode.com/todos')
  }
}
