import { Component } from '@angular/core';
import { productoservice } from '../../../services/api_producto/api_producto.service';
import { Producto } from '../../../interfaces/producto';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../../../services/cartservice/cartservice.service';
import { FavoritoService } from '../../../services/favoritoservice/favorito.service';
@Component({
  selector: 'app-detalleproducto',
  templateUrl: './detalleproducto.component.html',
  styleUrl: './detalleproducto.component.css'
})
export class DetalleproductoComponent {
  producto?: Producto;
  esFavorito: boolean = false;

  constructor(private route: ActivatedRoute, private productoService: productoservice, private cartService: CartService, private favoritoService: FavoritoService) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.productoService.obtenerproductoporid(id).subscribe({
        next: (data) => {
          this.producto = data;
          this.comprobarSiEsFavorito();
        },
        error: (err) => console.error('Error al cargar el producto', err)
      });
    }
  }

  comprobarSiEsFavorito(): void {
    if (!this.producto) return;
    this.favoritoService.obtenerFavoritos().subscribe(favoritos => {
      this.esFavorito = favoritos.some(fav => fav.productoId === this.producto!.id);
    });
  }

 toggleFavorito(): void {
  // Si no hay producto o no tiene ID, salir
  if (!this.producto || this.producto.id === undefined) return;

  const productoId = this.producto.id;

  // Si ya es favorito, lo elimina
  if (this.esFavorito) {
    this.favoritoService.eliminarDeFavoritos(productoId).subscribe(() => {
      this.esFavorito = false; // Actualiza el estado local
    });
  } else {
    // Si no es favorito, lo agrega
    this.favoritoService.agregarAFavoritos(productoId).subscribe(() => {
      this.esFavorito = true; // Actualiza el estado local
    });
  }
}

 addToCart(Producto: Producto): void {
  // Llama al servicio de carrito para agregar el producto por su ID
  this.cartService.agregarProducto(Producto.id!).subscribe({
    next: (data) => {
      console.log(data); // Muestra la respuesta exitosa en consola
    },
    error: (error) => {
      console.error(error); // Muestra errores en consola si ocurren
    }
  });
}

}