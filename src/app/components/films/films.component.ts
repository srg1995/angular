import { Component } from '@angular/core';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent {

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

  public getVisits(){
    this.visits++;
  }

}
