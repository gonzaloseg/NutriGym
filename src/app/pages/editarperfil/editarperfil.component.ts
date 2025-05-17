import { Component } from '@angular/core';
import {UsuarioService} from '../../services/api_usuario_stock/api_usuario_stock.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-editarperfil',
  templateUrl: './editarperfil.component.html',
  styleUrl: './editarperfil.component.css'
})
export class EditarperfilComponent{
usuario = {
  id: '', 
  nombre: '',
  correoElectronico: '',
  contrasena: '',
  altura: null,
  peso: null,
  foto: '',
  rol_usuario: ''

};

modoEdicion = false;

constructor(
  private api_usuario_stock: UsuarioService,
  private router: Router
) {}

ngOnInit() {
  const usuarioString = sessionStorage.getItem('usuario');
  
  if (usuarioString) {
    const usuarioObj = JSON.parse(usuarioString); 
    const idUsuario = usuarioObj.id;

    console.log('ID del usuario:', idUsuario);

    if (idUsuario) {
      this.modoEdicion = true;

      this.api_usuario_stock.obtenerPerfil(idUsuario).subscribe({
        next: (data) => {
          this.usuario = data;
          console.log('Datos obtenidos:', data);
        },
        error: (err) => {
          console.error('Error al cargar datos del usuario:', err);
        }
      });
    }
  } else {
    console.warn('No se encontró el usuario en sessionStorage');
  }
}

actualizar() {
  this.api_usuario_stock.actualizarPerfil(this.usuario.id, this.usuario).subscribe({
    next: res => {
      console.log('Perfil actualizado correctamente:', res);
      sessionStorage.setItem('usuario', JSON.stringify(this.usuario));
      this.router.navigate(['/perfil']);
    },
    error: err => {
      console.error('Error al actualizar perfil:', err);

    }
  });
}
}