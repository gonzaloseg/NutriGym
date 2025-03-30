import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuplementosComponent } from './suplementos/suplementos.component';
import { RutinasComponent } from './rutinas/rutinas.component';
import { InicioComponent } from './inicio/inicio.component';
import { CestaComponent } from './cesta/cesta.component';
import { LoginComponent } from './login/login.component';
import { PerfilComponent } from './perfil/perfil.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { TerminosComponent } from './terminos/terminos.component';
import { ContactaComponent } from './contacta/contacta.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FavoritosComponent } from './favoritos/favoritos.component';
import { PoliticaprivaComponent } from './politicapriva/politicapriva.component';  

@NgModule({
  declarations: [
    SuplementosComponent,
    RutinasComponent,
    InicioComponent,
    CestaComponent,
    LoginComponent,
    PerfilComponent,
    TerminosComponent,
    ContactaComponent,
    FavoritosComponent,
    PoliticaprivaComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    SuplementosComponent,
    RutinasComponent,
    InicioComponent,
    CestaComponent,
    LoginComponent,
    PerfilComponent,
    TerminosComponent,
    ContactaComponent,
    FavoritosComponent,
    PoliticaprivaComponent
  ],
  providers: [
    provideHttpClient(withInterceptorsFromDi())
  ]
})
export class PagesModule { }