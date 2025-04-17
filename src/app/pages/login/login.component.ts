import { Component } from '@angular/core';
import { UsuarioService } from '../../services/api_usuario_stock/api_usuario_stock.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  usuario = {
    
    correoElectronico: '',
    contrasena: '',
  };

  constructor(private api_usuario_stock: UsuarioService) { }

  iniciarSesion() {
    this.api_usuario_stock.iniciarSesion(this.usuario).subscribe({
      next: res => {
        console.log('login correcto:', res);
        sessionStorage.setItem('usuario', JSON.stringify(res));
      },
      error: err => {
        console.error('Error al login:', err);
      }
    });
  }
}

