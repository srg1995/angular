import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '@services/login/login.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    private _builder: FormBuilder,
    private _logueo: LoginService,
    private _router: Router
  ) {
    this.loginForm = this._builder.group({
			name: ['', Validators.compose(
				[
					Validators.required
				]
			)],
			passwd: ['',
				Validators.required
			]
		})
   }

  ngOnInit(): void {
  }

  login({name,passwd}): void{
    console.log(name, passwd);
    if(name == 'sergio' && passwd == 'sergio'){
      this._logueo.logueado = true;

      this._router.navigate(['/admin']);
    }else{
      alert("Credenciales incorrectas")
      this._logueo.logueado = true;
    }
  }

  

}
