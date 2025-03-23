import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuplementosComponent } from './suplementos/suplementos.component';
import { RutinasComponent } from './rutinas/rutinas.component';
import { InicioComponent } from './inicio/inicio.component';
import { CestaComponent } from './cesta/cesta.component';
import { LoginComponent } from './login/login.component';
import { PerfilComponent } from './perfil/perfil.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    SuplementosComponent,
    RutinasComponent,
    InicioComponent,
    CestaComponent,
    LoginComponent,
    PerfilComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    SuplementosComponent,
    RutinasComponent,
    InicioComponent,
    CestaComponent,
    LoginComponent,
    PerfilComponent
  ]
})
export class PagesModule { }
