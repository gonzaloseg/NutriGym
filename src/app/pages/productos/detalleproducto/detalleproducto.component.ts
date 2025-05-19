import { Component } from '@angular/core';
import{productoservice} from '../../../services/api_producto/api_producto.service';
import { Producto } from '../../../interfaces/producto';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../../../services/cartservice/cartservice.service';
@Component({
  selector: 'app-detalleproducto',
  templateUrl: './detalleproducto.component.html',
  styleUrl: './detalleproducto.component.css'
})
export class DetalleproductoComponent {
 producto?: Producto;

  constructor( private route: ActivatedRoute, private productoService: productoservice, private cartService: CartService) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.productoService.obtenerproductoporid(id).subscribe({
        next: (data) => this.producto = data,
        error: (err) => console.error('Error al cargar el producto', err)
      });
    }
  }
 
  addToCart(Producto: Producto): void {
    this.cartService.addToCart(Producto);
  }

}