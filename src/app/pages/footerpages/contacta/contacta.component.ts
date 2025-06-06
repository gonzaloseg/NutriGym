import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacta',
  templateUrl: './contacta.component.html',
  styleUrls: ['./contacta.component.css']
})
export class ContactaComponent implements OnInit {
  contactForm: FormGroup; // Definir explícitamente el tipo
  enviado = false;
  submitted = false;

  constructor(private fb: FormBuilder) {
    // Inicializar el formulario dentro del constructor
    this.contactForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]],  
      email: ['', [Validators.required, Validators.email]],  
      descripcion: ['', Validators.required]  
    });
  }

  ngOnInit(): void {}

  get f() {
    return this.contactForm.controls;
  }

  enviarFormulario() {
    this.submitted = true;

    if (this.contactForm.invalid) {
      return;
    }

    console.log('Formulario enviado:', this.contactForm.value);
    this.enviado = true;

    setTimeout(() => {
      this.contactForm.reset();
      this.submitted = false;
      this.enviado = false;
    }, 2000);
  }
}
