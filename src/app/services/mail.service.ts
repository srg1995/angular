import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/internal/Observable';

import { HttpClient } from '@angular/common/http';

@Injectable({
  	providedIn: 'root'
})

export class MailService {
	
	constructor(
		private _http: HttpClient
	) { }

  	mail_url: string = "https://ssacrisss.herokuapp.com/mail";
  
  	respuesta(emisor: string, asunto: string, mensaje: string): Observable<any>{
		return this._http.post<string>(`${this.mail_url}`, {
			emisor: emisor,
			ausnto: asunto,
			mensaje: mensaje
		})

	}
}
