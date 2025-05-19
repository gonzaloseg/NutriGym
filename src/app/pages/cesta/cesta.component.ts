import { Component } from '@angular/core';
import { CartService } from '../../services/cartservice/cartservice.service';
import { Producto } from '../../interfaces/producto';

@Component({
  selector: 'app-cesta',
  templateUrl: './cesta.component.html',
  styleUrl: './cesta.component.css'
})
export class CestaComponent {
  cartProductos: Producto[] = [];
constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartProductos = this.cartService.getCartCourses();
  }
  eliminar(Productoid: number): void {

    this.cartProductos = this.cartService.removeFromCart(Productoid);
    
  }
  comprar(): void {
    this.cartService.buyCart();
  }

get totalCarrito(): number {
  return this.cartProductos.reduce((total, prod) => total + (prod.precio || 0), 0);
}
}
