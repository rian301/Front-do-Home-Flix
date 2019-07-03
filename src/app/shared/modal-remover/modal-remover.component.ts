import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'mp-modal-remover',
  templateUrl: './modal-remover.component.html',
  styleUrls: ['./modal-remover.component.scss']
})
export class ModalRemoverComponent implements OnInit {

  public mensagem: string;

  constructor(private modalRef: NgbActiveModal) { }

  ngOnInit() {
  }
  remover() {
    this.modalRef.close(true);
  }

  cancelar() {
    this.modalRef.dismiss();
  }
}