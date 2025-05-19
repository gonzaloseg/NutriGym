import { Component } from '@angular/core';
import { Producto } from '../../interfaces/producto';
import { productoservice } from '../../services/api_producto/api_producto.service';
import { CartService } from '../../services/cartservice/cartservice.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
 productos: Producto[] = [];

  constructor(private productoService: productoservice, private cartService: CartService) {}

  ngOnInit(): void {
    this.productoService.obtenerproductos().subscribe({
      next: (data) => this.productos = data,
      error: (err) => console.error('Error al cargar productos:', err)
    });
  }

  addToCart(Producto: Producto): void {
    this.cartService.addToCart(Producto);
  }
}