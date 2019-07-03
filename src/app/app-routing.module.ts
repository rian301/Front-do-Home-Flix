import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './paginas/home/home.component';
import { PainelSimplesComponent } from './painel-simples/painel-simples.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './services/AuthGuard';
import { VideoReprodutorComponent } from './video/video-reprodutor/video-reprodutor.component';
import { HimymComponent } from './paginas/series/himym/himym.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'himym', component: HimymComponent, canActivate: [AuthGuard] },
  { path: 'reprodutor/:linkFilme', component: VideoReprodutorComponent, canActivate: [AuthGuard] },
  { path: 'reprodutor', component: VideoReprodutorComponent, canActivate: [AuthGuard] },
  { path: 'painel-simples', component: PainelSimplesComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
