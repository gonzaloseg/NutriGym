import { Component } from '@angular/core';
import { UsuarioService } from '../../services/api_usuario_stock/api_usuario_stock.service';
import { Router } from '@angular/router'; 

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

  constructor(private api_usuario_stock: UsuarioService,
     private router: Router
  ) { }

  iniciarSesion() {
    this.api_usuario_stock.iniciarSesion(this.usuario).subscribe({
      next: res => {
        console.log('login correcto:', res);
        sessionStorage.setItem('usuario', JSON.stringify(res));
        this.router.navigate(['/inicio']); // Redirección aquí
      },
      error: err => {
        console.error('Error al login:', err);
      }
    });
  }
}

