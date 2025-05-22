import { Component } from '@angular/core';
import { Producto } from '../../../interfaces/producto';
import { productoservice } from '../../../services/api_producto/api_producto.service';
@Component({
  selector: 'app-ropa',
  templateUrl: './ropa.component.html',
  styleUrl: './ropa.component.css'
})
export class RopaComponent {
  productos: Producto[]=[];

  constructor(private productoservice: productoservice) {
    this.productoservice.obtenerproductoscategoria('ropa_hombre').subscribe({
      next: res => {
        this.productos = res;
      },
      error: err => {
        console.error('Error al obtener productos:', err);
      }
    });
  }
}
