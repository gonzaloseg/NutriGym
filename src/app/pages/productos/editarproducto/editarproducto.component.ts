import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { productoservice } from '../../../services/api_producto/api_producto.service';
import { Producto } from '../../../interfaces/producto';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-editarproducto',
  templateUrl: './editarproducto.component.html',
  styleUrl: './editarproducto.component.css'
})
export class EditarproductoComponent {
 productoForm: FormGroup;
  productoId: number | null = null; // Para usar en actualizar/eliminar

  constructor(private fb: FormBuilder, private productoservice: productoservice, private route: ActivatedRoute) {
    this.productoForm = this.fb.group({
      nombre: ['', Validators.required],
      precio: [null, [Validators.required, Validators.min(0)]],
      stock: [null, [Validators.required, Validators.min(0)]],
      categoria: ['', Validators.required],
      imagen: ['', Validators.required]
    });
  }
    ngOnInit() {
      const idParam = this.route.snapshot.paramMap.get('id');
      if (idParam) {
        const id = Number(idParam);
        this.productoservice.obtenerproductoporid(id).subscribe({
          next: res => {
            this.productoForm.patchValue(res);
          },
          error: err => {
            console.error('Error al obtener producto:', err);
          }
        });
      }
    }
  onSubmit(): void {
    if (this.productoForm.valid) {
      const producto: Producto = {
        nombre: this.productoForm.value.nombre,
        descripcion: this.productoForm.value.descripcion,
        precio: this.productoForm.value.precio,
        stock: this.productoForm.value.stock,
        categoria: this.productoForm.value.categoria,
        imagen: this.productoForm.value.imagen
      };

      this.productoservice.crearproductos(producto).subscribe({
        next: res => {
          console.log('Producto creado correctamente:', res);
          // ← guarda el ID para futuras acciones
        },
        error: err => {
          console.error('Error al crear producto:', err);
        }
      });
    }
  }
}
