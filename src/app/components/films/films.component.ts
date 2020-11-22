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
    this.title = "Viuda Negra";
    this.author = "Marvel";
    this.genre = "Accion";
    this.launch = 2020;
    this.visits = 0;
  }

  ngOnInit(): void {
  }

  public getVisits(){
    this.visits++;
  }

}
