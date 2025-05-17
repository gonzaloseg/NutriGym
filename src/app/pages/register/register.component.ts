import { Component } from '@angular/core';
import{UsuarioService} from '../../services/api_usuario_stock/api_usuario_stock.service';
import { Router } from '@angular/router';
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
    peso: null,
    foto: '',
    rol_usuario: ''
  };

  constructor(
    private api_usuario_stock: UsuarioService,
    private router: Router
  ) {}

  registrar() {
    this.api_usuario_stock.registrar(this.usuario).subscribe({
      next: res => {
        console.log('Registrado correctamente:', res);
        this.router.navigate(['/login']); // Redirección aquí
      },
      error: err => {
        console.error('Error al registrar:', err);
      }
     
    });
   
  }
}