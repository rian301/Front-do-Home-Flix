import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { VideoModel } from 'src/app/models/video.model';
import { isObject } from 'util';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { VideoReprodutorComponent } from 'src/app/video/video-reprodutor/video-reprodutor.component';
import { CardService } from 'src/app/services/card.service';
import { Card } from 'src/app/interfaces/card';
import { ErrorMsgComponent } from 'src/app/compartilhado/error-msg/error-msg.component';

@Component({
	selector: 'app-himym',
	templateUrl: './himym.component.html',
	styleUrls: ['./himym.component.scss']
})
export class HimymComponent implements OnInit {
	public cards: Card[];
	@ViewChild(ErrorMsgComponent) errorMsgComponent: ErrorMsgComponent;

	constructor(private cardService: CardService) { }

	ngOnInit() {
		this.getListaCards();
	}

	getListaCards() {
		this.cardService.getListaCards()
			.subscribe((cards: Card[]) => {
				console.log(cards,`CHEGOU OS CARDS PORRA`);
				this.cards = cards;
			}, () => { this.errorMsgComponent.setError('Falha ao buscar card.'); });
	}

	deletaCard(id: number) {
		this.cardService.deletaCards(id)
			.subscribe(() => {
				this.getListaCards();
			}, () => { this.errorMsgComponent.setError('Falha ao deletar card.'); });
	}

	existemcards(): boolean {
		return this.cards && this.cards.length > 0;
	}


}
