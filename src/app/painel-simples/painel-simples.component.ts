import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-painel-simples',
  templateUrl: './painel-simples.component.html',
  styleUrls: ['./painel-simples.component.scss']
})
export class PainelSimplesComponent implements OnInit {

  @Input() titulo = "Testando";
  @Input() tipo = "info";
  @Input() infoFilme = "Teste Teste Teste Teste Teste";
  @Input() imagem = "../../assets/hymin.jpg"

  cards: string[] = ["ep1", "ep2", "ep3", "ep4", "ep5",
                    "ep6", "ep7", "ep8", "ep9", "ep10"];

  constructor() { }

  ngOnInit() {
    for (let i = 0; i < this.cards.length; i++) {
      let card = this.cards[i];
    }

  }

}
