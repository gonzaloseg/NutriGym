import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cartservice/cartservice.service';
import { Producto } from '../../interfaces/producto';
import { CarritoItemDTO } from '../../interfaces/carritoitemdto';
declare var bootstrap: any;
@Component({
  selector: 'app-cesta',
  templateUrl: './cesta.component.html',
  styleUrl: './cesta.component.css'
})
export class CestaComponent implements OnInit {
  cartProductos: CarritoItemDTO[] = [];

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.actualizarCarrito();
  }

  eliminar(Productoid: number): void {
    // De momento no tenemos un endpoint para eliminar directamente
    // Aquí podrías simularlo con cantidad - producto.numero (pendiente implementar)
    this.cartService.eliminar(Productoid).subscribe({
      next: (data) => {
        console.log("Producto eliminado correctamente", data);
        this.actualizarCarrito();
      },
      error: (error) => {
        console.error("Error al eliminar producto", error);
      }
    });
  }

  comprar(): void {
    this.cartService.comprar().subscribe({
      next: () => {
        this.cartProductos = [];
        alert('Compra realizada con éxito.');
        const modalElement = document.getElementById('modalCompra');
        if (modalElement) {
          const modalInstance = bootstrap.Modal.getInstance(modalElement);
          modalInstance?.hide();
        }
      },
      error: (err) => {
        console.error(err);
        alert('Error al realizar la compra.');
      }
    });
  }

  get totalCarrito(): number {
    return this.cartProductos.reduce(
      (total, prod) => total + ((prod.precio || 0) * (prod.cantidad || 1)),
      0
    );
  }

  //Métodos desactivados temporalmente
  decrementarCantidad(productoId: number): void {
    this.cartService.agregarProducto(productoId, -1).subscribe({
      next: (data) => {
        this.actualizarCarrito();
      },
      error: (error) => {
        console.error(error)
      }
    });
  }

  incrementarCantidad(productoId: number): void {
    this.cartService.agregarProducto(productoId, 1).subscribe({
      next: (data) => {
        this.actualizarCarrito();
      },
      error: (error) => {
        console.error(error)
      }
    });
  }

  private actualizarCarrito(): void {
    this.cartService.obtenerCarrito().subscribe({
      next: (productos: CarritoItemDTO[]) => {
        this.cartProductos = productos;
      },
      error: () => {
        this.cartProductos = [];
        alert('No se pudo obtener el carrito.');
      }
    });
  }

  abrirModal() {
    const modalElement = document.getElementById('modalCompra');
    if (modalElement) {
      const modal = new bootstrap.Modal(modalElement);
      modal.show();
    }
  }

  
}
