import { Component, OnInit } from '@angular/core';
import { ArticleService } from '@services/article/article.service';
import { Article } from 'app/interfaces/articleInferface';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  constructor(
    private _articleService: ArticleService
  ) { }

  articles: Article[] = [];

  ngOnInit(): void {
    this._articleService.getArticles().subscribe(articles => this.articles = articles)
  }

}
