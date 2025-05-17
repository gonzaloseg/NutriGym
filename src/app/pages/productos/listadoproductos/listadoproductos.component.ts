import { Component } from '@angular/core';
import { Producto } from '../../../interfaces/producto';
import { productoservice } from '../../../services/api_producto/api_producto.service';

@Component({
  selector: 'app-listadoproductos',
  templateUrl: './listadoproductos.component.html',
  styleUrl: './listadoproductos.component.css'
})
export class ListadoproductosComponent {
productos: Producto[]=[];

  constructor(private productoservice: productoservice) {
    productoservice.obtenerproductos().subscribe({
      next: res => {
        this.productos= res;
      },
      error: err => {
        console.error('Error al obtener productos:', err);
      }
    });
  }
}
