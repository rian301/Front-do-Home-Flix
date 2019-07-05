import { OnInit, Component } from '@angular/core';
import { Menu } from 'src/app/models/menu.model';

@Component({
  selector: 'app-menu-lateral',
  templateUrl: './menu-lateral.component.html',
  styleUrls: ['./menu-lateral.component.scss']
})
export class MenuLateralComponent implements OnInit {

  menus: Menu[];
	currentPage: string;
	id: any;
  menuAberto = false;

  constructor() { }

  ngOnInit() {
		// Array que serão recebido os itens do menu lateral
		this.menus = [];
		// Inclusão do Item de menu Lateral(rota, Titulo que será exibido, Icone)
    this.menus.push(new Menu('/home', 'Home', 'fa fa-home'));
    this.menus.push(new Menu('/', 'Filmes', 'fa fa-film'));
    this.menus.push(new Menu('/himym', 'Séries', 'fa fa-film'));
    this.menus.push(new Menu('/', 'Animes', 'fa fa-film'));
    this.menus.push(new Menu('/painel-simples', 'Painel', 'fa fa-lock'));
    this.menus.push(new Menu('/adm', 'ADM', 'fa fa-lock'));
    

	}

  toggle() {
    this.menuAberto = !this.menuAberto;
  }

  isPageActive(url: string): boolean {
		if (!this.currentPage || !url)
			return false;

		return this.currentPage.indexOf(url) > -1;
	}

}


