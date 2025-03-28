import { Component } from '@angular/core';

@Component({
  selector: 'app-contacta',
  templateUrl: './contacta.component.html',
  styleUrl: './contacta.component.css'
})
export class ContactaComponent {
  form = {
    nombre: '',
    email: '',
    descripcion: ''
  };

  enviado = false;

  enviarFormulario() {
    console.log('Formulario enviado:', this.form);
    this.enviado = true;

    // Reiniciar el formulario después de enviar
    setTimeout(() => {
      this.enviado = false;
      this.form = { nombre: '', email: '', descripcion: '' };
    }, 1000);
  }
}

