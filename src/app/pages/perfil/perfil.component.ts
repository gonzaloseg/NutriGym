import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css'
})
export class PerfilComponent implements OnInit {
  usuario: any = {};

  constructor(private router: Router) {}

  ngOnInit() {
    const datos = sessionStorage.getItem('usuario');
    if (datos) {
      this.usuario = JSON.parse(datos);
    } else {
      // Si no hay datos, redirigir al login
      this.router.navigate(['/login']);
    }
  }

  cerrarSesion() {
    sessionStorage.removeItem('usuario');
    this.router.navigate(['/login']);
  }
}