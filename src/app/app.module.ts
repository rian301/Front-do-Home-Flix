import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuTopComponent } from './menu/menu-top/menu-top.component';
import { MenuLateralComponent } from './menu/menu-lateral/menu-lateral.component';
import { PainelSimplesComponent } from './painel-simples/painel-simples.component';
import { HomeComponent } from './paginas/home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './login/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { NotificationService } from './services/notification.service';
import { AuthGuard } from './services/AuthGuard';
import { HimymComponent } from './paginas/series/himym/himym.component';
import { VideoAberturaComponent } from './video/video-abertura/video-abertura.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VideoReprodutorComponent } from './video/video-reprodutor/video-reprodutor.component';
import { ModalComponent } from './shared/modal/modal.component';
import { ModalAcaoComponent } from './shared/modal-acao/modal-acao.component';
import { ModalRemoverComponent } from './shared/modal-remover/modal-remover.component';
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ErrorMsgComponent } from './compartilhado/error-msg/error-msg.component';
import { ADMComponent } from './paginas/adm/adm.component';
import { CardService } from './services/card.service';


@NgModule({
  declarations: [
    AppComponent,
    MenuTopComponent,
    MenuLateralComponent,
    PainelSimplesComponent,
    HomeComponent,
    LoginComponent,
    SnackbarComponent,
    HimymComponent,
    VideoAberturaComponent,
    VideoReprodutorComponent,
    ModalComponent,
    ModalAcaoComponent,
    ModalRemoverComponent,
    ErrorMsgComponent,
    ADMComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [AuthService, NotificationService, AuthGuard, NgbActiveModal, CardService],
  entryComponents: [
    ModalRemoverComponent,
    ModalAcaoComponent,
    VideoReprodutorComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
