import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {

  public title: string;
  public author: string;
  public genre: string;
  public launch: number;
  public visits: number;

  constructor() { 
    this.title = "titulo pelicula";
    this.author = "autor";
    this.genre = "genero";
    this.launch = 2018;
    this.visits = 0;
  }

  ngOnInit(): void {
  }

  public getVisits(){
    this.visits++;
  }

}
