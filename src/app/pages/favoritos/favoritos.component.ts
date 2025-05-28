import { Component } from '@angular/core';
import { FavoritoDTO } from '../../interfaces/favoritodto';
import { FavoritoService } from '../../services/favoritoservice/favorito.service';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrl: './favoritos.component.css'
})
export class FavoritosComponent {

  favoritos: FavoritoDTO[] = [];

  constructor(private favoritoService: FavoritoService) { }

  ngOnInit(): void {
    this.favoritoService.obtenerFavoritos().subscribe({
      next: (data) => this.favoritos = data,
      error: (err) => console.error('Error al cargar favoritos', err)
    });
  }

  eliminarDeFavoritos(productoId: number): void {
    this.favoritoService.eliminarDeFavoritos(productoId).subscribe({
      next: () => this.favoritos = this.favoritos.filter(f => f.productoId !== productoId),
      error: (err) => console.error('Error al eliminar favorito', err)
    });
  }
}
