import { Router } from '@angular/router';
import { Injectable, EventEmitter } from '@angular/core';

import { Usuario } from '../models/usuario.model';
import { NotificationColorEnum } from '../enums/notification-color.enum';
import { NotificationService } from '../services/notification.service';


@Injectable()
export class AuthService {

	usuarioAutenticado: boolean = false;

	mostrarMenuEmitter = new EventEmitter<boolean>();

	constructor(private router: Router,
		private notificationService: NotificationService) { }

	fazerLogin(usuario: Usuario) : boolean {

		if (usuario.nome === 'rian' &&
			usuario.senha === '123456') {

			this.usuarioAutenticado = true;
			this.mostrarMenuEmitter.emit(true);
			this.notificationService.notify("Logado com sucesso", NotificationColorEnum.normal);
			this.router.navigate(['home']);
			return true;

		} else {
			this.usuarioAutenticado = false;
			this.mostrarMenuEmitter.emit(false);
			this.notificationService.notify("Usuário ou senha inválido", NotificationColorEnum.danger);
			return false;
		}
	}

	usuarioEstaAutenticado() {
		return this.usuarioAutenticado;
	}

}
