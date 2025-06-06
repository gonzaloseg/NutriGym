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
  eliminarproductos(id: number): void {
    // Llama al servicio para eliminar un producto por su ID
    this.productoservice.eliminarproductos(id).subscribe({
      // Si se elimina correctamente, se vuelve a obtener la lista de productos
      next: res => {
        console.log('Producto eliminado correctamente:', res);

        // Se actualiza la lista de productos después de la eliminación
        this.productoservice.obtenerproductos().subscribe({
          next: (res: any) => {
            this.productos = res;
          },
          error: (err: any) => {
            console.error('Error al obtener productos:', err);
          }
        });
      },
      // Si ocurre un error al eliminar, se muestra en consola
      error: err => {
        console.error('Error al eliminar producto:', err);
      }
    });
  }
}
   

