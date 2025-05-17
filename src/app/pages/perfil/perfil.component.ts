import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../../services/api_usuario_stock/api_usuario_stock.service';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css'
})
export class PerfilComponent implements OnInit {
  usuario: any = {};

  
  constructor(private router: Router, private api_usuario_stock: UsuarioService) { }

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
    this.api_usuario_stock.cerrarSesion();
    this.router.navigate(['/login']);
    
  }
  actualizarPerfil() {
    this.router.navigate(['/perfil']);
  }
}