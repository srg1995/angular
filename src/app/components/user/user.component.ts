import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent  {

  @Input("data") user: any 

  @Output() borrar = new EventEmitter<number>();

  constructor() { }

  borrarUsuario(id:number){
    this.borrar.emit(id)
  }
}
