import { Component, Host, Input } from '@angular/core';
import { AppComponent } from 'app/app.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  @Input("data") user: any

  constructor(
    @Host() private _padre: AppComponent
  ) {  }

  borrarUsuario(id:number){
    this._padre.usuarios = this._padre.usuarios.filter(usuario => usuario.id != id)
  }
}
