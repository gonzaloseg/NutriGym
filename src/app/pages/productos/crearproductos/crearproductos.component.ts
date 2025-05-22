import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { productoservice } from '../../../services/api_producto/api_producto.service';
import { Producto } from '../../../interfaces/producto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crearproductos',
  templateUrl: './crearproductos.component.html',
  styleUrls: ['./crearproductos.component.css'] // ← corregido aquí
})
export class CrearproductosComponent {
  productoForm: FormGroup;
  productoId: number | null = null; // Para usar en actualizar/eliminar

  constructor(private fb: FormBuilder, private productoservice: productoservice, private router: Router) {
    this.productoForm = this.fb.group({
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      precio: [null, [Validators.required, Validators.min(0)]],
      stock: [null, [Validators.required, Validators.min(0)]],
      categoria: ['', Validators.required],
      imagen: ['', Validators.required],
      imagen2: ['', Validators.required],
      imagen3: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.productoForm.valid) {
      const producto: Producto = {
        nombre: this.productoForm.value.nombre,
        descripcion: this.productoForm.value.descripcion,
        precio: this.productoForm.value.precio,
        stock: this.productoForm.value.stock,
        categoria: this.productoForm.value.categoria,
        imagen: this.productoForm.value.imagen,
        imagen2: this.productoForm.value.imagen2,
        imagen3: this.productoForm.value.imagen3
      };

      this.productoservice.crearproductos(producto).subscribe({
        next: res => {
          console.log('Producto creado correctamente:', res);
           this.router.navigate(['/productos/listadoproductos']);
          // ← guarda el ID para futuras acciones
        },
        error: err => {
          console.error('Error al crear producto:', err);
        }
      });
    }
  }
}
