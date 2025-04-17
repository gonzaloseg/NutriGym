import { Component } from '@angular/core';
import{UsuarioService} from '../../services/api_usuario_stock/api_usuario_stock.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
usuario = {
    nombre: '',
    correoElectronico: '',
    contrasena: '',
    altura: null,
    peso: null
  };

  constructor(private api_usuario_stock: UsuarioService) { }

  registrar() {
    this.api_usuario_stock.registrar(this.usuario).subscribe({
      next: res => {
        console.log('Registrado correctamente:', res);
      },
      error: err => {
        console.error('Error al registrar:', err);
      }
    });
  }
}