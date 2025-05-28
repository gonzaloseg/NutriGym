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

  ropaHombre: Producto[] = [];
  ropaMujer: Producto[] = [];
  suplementos: Producto[] = [];

  constructor(private productoService: productoservice, private cartService: CartService) { }

  ngOnInit(): void {
    this.productoService.obtenerproductos().subscribe({
      next: (data) => {
        this.productos = data;
        this.ropaHombre = data.filter(p => p.categoria === 'ropa_hombre').slice(0, 4);
        this.ropaMujer = data.filter(p => p.categoria === 'ropa_mujer').slice(0, 4);
        this.suplementos = data.filter(p => p.categoria === 'suplementacion').slice(0, 4);
      },
      error: (err) => console.error('Error al cargar productos:', err)
    });
  }

  addToCart(producto: Producto): void {
    console.log("Ha entrado en addToCart")
    this.cartService.agregarProducto(producto.id!).subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (error) => {
        console.log(error);
      }
    });
  }
}