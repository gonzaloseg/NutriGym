import { Component, OnInit } from '@angular/core';
import { Producto } from '../../interfaces/producto';
import { productoservice } from '../../services/api_producto/api_producto.service';


@Component({
  selector: 'app-suplementos',
  templateUrl: './suplementos.component.html',
  styleUrls: ['./suplementos.component.css']
})
export class SuplementosComponent {
 productos: Producto[]=[];
 
   constructor(private productoservice: productoservice) {
     this.productoservice.obtenerproductoscategoria('suplementacion').subscribe({
       next: res => {
         this.productos = res;
       },
       error: err => {
         console.error('Error al obtener productos:', err);
       }
     });
   }
 }
 