import { Component } from '@angular/core';
import { Producto } from '../../interfaces/producto';
import { productoservice } from '../../services/api_producto/api_producto.service';
@Component({
  selector: 'app-ropa-mujer',
  templateUrl: './ropa-mujer.component.html',
  styleUrl: './ropa-mujer.component.css'
})
export class RopaMujerComponent {
productos: Producto[]=[];

  constructor(private productoservice: productoservice) {
    this.productoservice.obtenerproductoscategoria('ropa_mujer').subscribe({
      next: res => {
        this.productos = res;
      },
      error: err => {
        console.error('Error al obtener productos:', err);
      }
    });
  }
}
