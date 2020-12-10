import { Component, ElementRef, AfterViewInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MailService } from '@services/mail/mail.service';

@Component({
	selector: 'app-forms',
	templateUrl: './forms.component.html',
	styleUrls: ['./forms.component.css']
})
export class FormsComponent implements AfterViewInit {

	mailForm: FormGroup
	constructor(
		private _builder: FormBuilder,
		private _smail: MailService
	) {
		this.mailForm = this._builder.group({
			emisor: ['', Validators.compose(
				[
					Validators.email,
					Validators.required
				]
			)],
			asunto: ['',
				Validators.required
			],
			mensaje: ['',
				Validators.required
			],
		})
	}

	@ViewChild('emisor', {static:true}) button:ElementRef;

	ngAfterViewInit(): void {
		this.button.nativeElement.innerHTML = "Emisor"
	}


	send(values) {
		this._smail.envio(values.emisor, values.asunto, values.mensaje).subscribe(response => {
			console.log(response);
		})
	}
}
