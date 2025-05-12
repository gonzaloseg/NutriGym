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
  id: '', // Asegúrate de tener el ID
  nombre: '',
  contrasena: '',
  altura: null,
  peso: null,
  foto: ''
};

modoEdicion = false;

constructor(
  private api_usuario_stock: UsuarioService,
  private router: Router
) {}

ngOnInit() {
  const idUsuario = sessionStorage.getItem('usuarioId'); // o desde tu AuthService
  if (idUsuario) {
    this.modoEdicion = true;
    this.api_usuario_stock.obtenerPerfil(idUsuario).subscribe({
      next: (data) => {
        this.usuario = data;
      },
      error: (err) => {
        console.error('Error al cargar datos del usuario:', err);
      }
    });
  }
}

actualizar() {
  this.api_usuario_stock.actualizarPerfil(this.usuario.id, this.usuario).subscribe({
    next: res => {
      console.log('Perfil actualizado correctamente:', res);
      // Redireccionar si deseas:
      // this.router.navigate(['/dashboard']);
    },
    error: err => {
      console.error('Error al actualizar perfil:', err);
    }
  });
}
}