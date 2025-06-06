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
import { TerminosComponent } from './footerpages/terminos/terminos.component';
import { ContactaComponent } from './footerpages/contacta/contacta.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FavoritosComponent } from './favoritos/favoritos.component';
import { PoliticaprivaComponent } from './footerpages/politicapriva/politicapriva.component';
import { RecetasComponent } from './recetas/recetas.component';
import { RopaComponent } from './ropas/ropa/ropa.component';
import { RegisterComponent } from './register/register.component';
import { EndomorfoComponent } from './endomorfo/endomorfo.component';
import { MesomorfoComponent } from './mesomorfo/mesomorfo.component';
import { EctomorfoComponent } from './ectomorfo/ectomorfo.component';
import { CrearproductosComponent } from './productos/crearproductos/crearproductos.component';
import { EditarperfilComponent } from './editarperfil/editarperfil.component';
import { DetalleproductoComponent } from './productos/detalleproducto/detalleproducto.component';
import { ListadoproductosComponent } from './productos/listadoproductos/listadoproductos.component';
import { EditarproductoComponent } from './productos/editarproducto/editarproducto.component';
import { RopaMujerComponent } from './ropas/ropa-mujer/ropa-mujer.component';  

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
    PoliticaprivaComponent,
    RecetasComponent,
    RopaComponent,
    RegisterComponent,
    EndomorfoComponent,
    MesomorfoComponent,
    EctomorfoComponent,
    CrearproductosComponent,
    EditarperfilComponent,
    DetalleproductoComponent,
    ListadoproductosComponent,
    EditarproductoComponent,
    RopaMujerComponent,
    
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
    PoliticaprivaComponent,
    RecetasComponent,
    RopaComponent,
    RegisterComponent,
    EndomorfoComponent,
    MesomorfoComponent,
    EctomorfoComponent,
    CrearproductosComponent,
    EditarperfilComponent,
    DetalleproductoComponent,
    ListadoproductosComponent,
    EditarproductoComponent,
    RopaMujerComponent

  ],
  providers: [
    provideHttpClient(withInterceptorsFromDi())
  ]
})
export class PagesModule { }