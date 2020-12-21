import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from 'app/interfaces/articleInferface';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(
    private _http: HttpClient
  ) { }

  articles: Article[] = [];

  public getArticles(): Observable<Article[]>{
    return this._http
    .get<Article[]>('https://jsonplaceholder.typicode.com/posts')
    .pipe(
      map((data: Article[]) => data.slice(0,10))
    )
  }
}
