import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { productoservice } from '../../../services/api_producto/api_producto.service';
import { Producto } from '../../../interfaces/producto';

@Component({
  selector: 'app-crearproductos',
  templateUrl: './crearproductos.component.html',
  styleUrl: './crearproductos.component.css'
})
export class CrearproductosComponent {
  productoForm: FormGroup;

  constructor(private fb: FormBuilder, private productoservice: productoservice) {
    this.productoForm = this.fb.group({
      nombre: ['', Validators.required],
      precio: [null, [Validators.required, Validators.min(0)]],
      stock: [null, [Validators.required, Validators.min(0)]],
      categoria: ['', Validators.required],
      imagen: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.productoForm.valid ) {
      const producto: Producto = {
        nombre: this.productoForm.value.nombre,
        precio: this.productoForm.value.precio,
        stock: this.productoForm.value.stock,
        categoria: this.productoForm.value.categoria,
        imagen: this.productoForm.value.imagen
      };
      this.productoservice.crearproductos(producto).subscribe({
        next: res => {
          console.log('Producto creado correctamente:', res);
        },
        error: err => {
          console.error('Error al crear producto:', err);
        }
      });
    }
  }

  
}