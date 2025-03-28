import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacta',
  templateUrl: './contacta.component.html',
  styleUrls: ['./contacta.component.css']
})
export class ContactaComponent implements OnInit {
  contactForm: FormGroup;  // Definimos el formulario reactivo
  enviado = false;
  submitted = false;

  // Constructor donde se inyecta FormBuilder
  constructor(private fb: FormBuilder) {}

  // Método que se ejecuta al inicializar el componente
  ngOnInit(): void {
    // Inicializamos el formulario con las validaciones después de la inyección del FormBuilder
    this.contactForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]],  // Solo letras y espacios
      email: ['', [Validators.required, Validators.email]],  // Validación de correo
      descripcion: ['', Validators.required]  // Campo obligatorio
    });
  }

  // Getter para acceder a los controles del formulario
  get f() {
    return this.contactForm.controls;
  }

  // Método para enviar el formulario
  enviarFormulario() {
    this.submitted = true;

    // Si el formulario no es válido, no hace nada
    if (this.contactForm.invalid) {
      return;
    }

    // Lógica para enviar el formulario
    console.log('Formulario enviado:', this.contactForm.value);
    this.enviado = true;

    // Limpiar el formulario después de un tiempo (2 segundos)
    setTimeout(() => {
      this.contactForm.reset();
      this.submitted = false;
      this.enviado = false;
    }, 2000);
  }
}


