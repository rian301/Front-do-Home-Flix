import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router/src/utils/preactivation';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Route, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../login/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
    path: ActivatedRouteSnapshot[];
    route: ActivatedRouteSnapshot;
  

    constructor(
        private authService: AuthService,
        private router: Router
    ) { }

    canActivate(route: ActivatedRouteSnapshot,
                state: RouterStateSnapshot
                ): Observable<boolean> | boolean {
        if (this.authService.usuarioEstaAutenticado()) {
            return true;
        }
        this.router.navigate(['/login'])
        return false;
    }
}
