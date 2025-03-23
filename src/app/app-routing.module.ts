import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { CestaComponent } from './pages/cesta/cesta.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { RutinasComponent } from './pages/rutinas/rutinas.component'; 
import { SuplementosComponent } from './pages/suplementos/suplementos.component'; 


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'perfil', component: PerfilComponent },
  { path: 'cesta', component: CestaComponent },
  { path: 'inicio', component: InicioComponent },
  { path: 'rutinas', component: RutinasComponent },
  { path: 'suplementos', component: SuplementosComponent },
  { path: '', redirectTo: '/inicio', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
