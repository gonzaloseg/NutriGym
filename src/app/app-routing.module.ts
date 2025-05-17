import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { CestaComponent } from './pages/cesta/cesta.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { RutinasComponent } from './pages/rutinas/rutinas.component'; 
import { SuplementosComponent } from './pages/suplementos/suplementos.component'; 
import { TerminosComponent } from './pages/terminos/terminos.component';
import { ContactaComponent } from './pages/contacta/contacta.component';
import { FavoritosComponent } from './pages/favoritos/favoritos.component';
import { PoliticaprivaComponent } from './pages/politicapriva/politicapriva.component';
import{RecetasComponent} from './pages/recetas/recetas.component';
import { RopaComponent } from './pages/ropa/ropa.component';
import{sesionGuard} from './guards/sesion.guard';
import { RegisterComponent } from './pages/register/register.component';
import{EndomorfoComponent} from './pages/endomorfo/endomorfo.component';
import{MesomorfoComponent} from './pages/mesomorfo/mesomorfo.component';
import{EctomorfoComponent} from './pages/ectomorfo/ectomorfo.component';  
import { CrearproductosComponent } from './pages/productos/crearproductos/crearproductos.component';
import { EditarperfilComponent } from './pages/editarperfil/editarperfil.component';
import{DetalleproductoComponent} from './pages/productos/detalleproducto/detalleproducto.component';
import { ListadoproductosComponent } from './pages/productos/listadoproductos/listadoproductos.component';
import { EditarproductoComponent } from './pages/productos/editarproducto/editarproducto.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'perfil', component: PerfilComponent, canActivate: [sesionGuard] },
  { path: 'cesta', component: CestaComponent, canActivate: [sesionGuard] },
  { path: 'inicio', component: InicioComponent },
  { path: 'rutinas', component: RutinasComponent },
  { path: 'suplementos', component: SuplementosComponent },
  { path: 'terminos', component: TerminosComponent },
  { path: 'contacta', component: ContactaComponent },
  { path: 'favoritos', component: FavoritosComponent, canActivate: [sesionGuard] },
  { path: 'politicapriva', component: PoliticaprivaComponent },
  { path: 'recetas', component: RecetasComponent },
  { path: 'ropa', component: RopaComponent },
  {path: 'register', component: RegisterComponent},
  {path: 'endomorfo', component: EndomorfoComponent},
  {path: 'mesomorfo', component: MesomorfoComponent},
  {path: 'ectomorfo', component: EctomorfoComponent},
  {path: 'editarperfil', component: EditarperfilComponent},
  {path: 'productos/crearproductos', component: CrearproductosComponent},
  {path: 'detalleproducto/:id', component: DetalleproductoComponent},
  {path: 'productos/listadoproductos', component: ListadoproductosComponent},
  {path: 'productos/editarproducto/:id', component: EditarproductoComponent},

  { path: '', redirectTo: '/inicio', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
