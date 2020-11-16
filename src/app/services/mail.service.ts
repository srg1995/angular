import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/internal/Observable';

import { HttpClient } from '@angular/common/http';
import { MailResponse } from '../interfaces/mailInterface';

@Injectable({
  	providedIn: 'root'
})

export class MailService {
	
	constructor(
		private _http: HttpClient
	) { }

  	mail_url: string = "https://ssacrisss.herokuapp.com/mail";
  
  	public envio(emisor: string, asunto: string, mensaje: string): Observable<MailResponse>{
		return this._http.post<MailResponse>(`${this.mail_url}`, {
			emisor: emisor,
			asunto: asunto,
			mensaje: mensaje
		})

	}
}
