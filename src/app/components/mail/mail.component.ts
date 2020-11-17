import { Component, OnInit } from '@angular/core';
import { MailService } from '@services/mail.service';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css']
})
export class MailComponent implements OnInit {

  
  constructor(
    private _mail:MailService
    ) { 

  }

  ngOnInit(): void {

  }


  enviarMail(){
    const emisor = (document.querySelector("#emisor") as HTMLInputElement).value;
    const asunto = (document.querySelector("#asunto") as HTMLInputElement).value;
    const mensaje = (document.querySelector("#mensaje") as HTMLInputElement).value;
    this._mail.envio(emisor,asunto,mensaje).subscribe(response =>{
      console.log(response);
    })
  }
}
