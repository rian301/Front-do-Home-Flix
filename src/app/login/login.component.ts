import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Usuario } from '../models/usuario.model';
import { NotificationService } from '../services/notification.service';
import { NotificationColorEnum } from '../enums/notification-color.enum';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

	private usuario: Usuario = new Usuario();

	constructor(private authService: AuthService, private notificationService: NotificationService) { }

	ngOnInit() {
	}

	fazerLogin() {
		this.authService.fazerLogin(this.usuario);
	}

}
