import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MailService } from '@services/mail.service';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

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


  send(values){
    this._smail.envio(values.emisor, values.asunto, values.mensaje).subscribe(response =>{
      console.log(response);
    })
  }
}
