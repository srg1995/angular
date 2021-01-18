import { Component, OnInit } from '@angular/core';
import { LoginService } from '@services/login/login.service';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(
    public _logueado: LoginService,
    private _router: Router
  ) { }

    log: boolean;

  ngOnInit(): void {
    this._logueado.logueado;
  }

  logarse(){
    this._router.navigate(['/login']);
  }
  
  logout(){
    this._logueado.logueado = false;
  }

}
