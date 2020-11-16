import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MailService } from 'src/app/services/mail.service';

@Component({
  selector: 'app-formularios',
  templateUrl: './formularios.component.html',
  styleUrls: ['./formularios.component.css']
})
export class FormulariosComponent implements OnInit {

  signupForm: FormGroup
  constructor(
    private _builder: FormBuilder,
    private _smail: MailService
  ) {
    this.signupForm = this._builder.group({
      emisor: ['', Validators.compose([Validators.email, Validators.required])],
      asunto: ['', Validators.required],
      mensaje: ['', Validators.required],
    })
  }

  ngOnInit(): void {
  }


  enviar(values){
    this._smail.envio(values.emisor, values.asunto, values.mensaje).subscribe(response =>{
      console.log(response);
    })
  }
}
