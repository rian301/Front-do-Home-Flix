import { Component, ViewChild, OnInit } from '@angular/core';
import { CardService } from 'src/app/services/card.service';
import { ErrorMsgComponent } from 'src/app/compartilhado/error-msg/error-msg.component';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
	selector: 'app-adm',
	templateUrl: './adm.component.html',
	styleUrls: ['./adm.component.scss']
})
export class ADMComponent implements OnInit {
	@ViewChild(ErrorMsgComponent) errorMsgComponent: ErrorMsgComponent;
	mostrarCard: boolean = false;
	salvos: Array<any>;
	salvo: any;
	filmeForm: FormGroup;

	constructor(
		private _cardService: CardService,
		private _formbuilder: FormBuilder,
	) { }

	ngOnInit() {
		this.filmeForm = this._formbuilder.group({
			id: [0],
			titulo: [null],
			descricao: [null],
			link: [null],
			imagem: [null]
		});

		this.salvo = {};
	}

	mostrarForm() {
		this.mostrarCard = !this.mostrarCard;
	}

	criar() {
		this._cardService
			.salvar(this.filmeForm.value)
			.toPromise()
			.then(ret => {
			})
	}
}