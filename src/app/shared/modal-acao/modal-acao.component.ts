import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'mp-modal-acao',
  templateUrl: './modal-acao.component.html',
  styleUrls: ['./modal-acao.component.scss']
})
export class ModalAcaoComponent implements OnInit {

  public mensagem: string;

  constructor(private modalRef: NgbActiveModal) { }

  ngOnInit() {
  }

  confirmar() {
    this.modalRef.close(true);
  }

  sair() {
    this.modalRef.dismiss();
  }
}