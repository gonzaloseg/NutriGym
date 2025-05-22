import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { productoservice } from '../../../services/api_producto/api_producto.service';
import { Producto } from '../../../interfaces/producto';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-editarproducto',
  templateUrl: './editarproducto.component.html',
  styleUrl: './editarproducto.component.css'
})
export class EditarproductoComponent {
 productoForm: FormGroup;
  productoId: number | null = null; // Para usar en actualizar/eliminar
  id: number | undefined;


  constructor(private fb: FormBuilder, private productoservice: productoservice, private route: ActivatedRoute, private router: Router) {
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
    ngOnInit() {
      const idParam = this.route.snapshot.paramMap.get('id');
      if (idParam) {
         this.id = Number(idParam);
        this.productoservice.obtenerproductoporid(this.id).subscribe({
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
    console.log(this.id);
    if (this.productoForm.valid) {
      const producto: Producto = {
        id: this.id,
        nombre: this.productoForm.value.nombre,
        descripcion: this.productoForm.value.descripcion,
        precio: this.productoForm.value.precio,
        stock: this.productoForm.value.stock,
        categoria: this.productoForm.value.categoria,
        imagen: this.productoForm.value.imagen,
        imagen2: this.productoForm.value.imagen2,
        imagen3: this.productoForm.value.imagen3
      };
      
      this.productoservice.actualizarproductos(producto).subscribe({
        
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
