import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { Producto } from '../../interfaces/producto';
import { UsuarioService } from '../usuarioservice/usuario.service';
import { AgregarProductoDTO } from '../../interfaces/agregarproductodto';
import { CarritoItemDTO } from '../../interfaces/carritoitemdto';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  private readonly API_URL = 'http://localhost:8080/api/carrito';
  private cartTotalCount = signal<number>(0); // 👈 NUEVO

  constructor(
    private http: HttpClient,
    private usuarioService: UsuarioService
  ) { }

  // 👇 Método para exponer el contador como signal reactivo
  getCartCountSignal() {
    return this.cartTotalCount;
  }

  // Método para actualizar el contador
  updateCartCount(): void {
    this.obtenerCarrito().subscribe({
      next: (productos: CarritoItemDTO[]) => {
        const total = productos.reduce((sum, item) => sum + item.cantidad, 0);
        this.cartTotalCount.set(total);
      },
      error: () => this.cartTotalCount.set(0)
    });
  }

  private getUsuarioId(): number {
    const id = this.usuarioService.getUsuarioId();
    if (id === null) {
      throw new Error('Usuario no autenticado');
    }
    return id;
  }

  agregarProducto(productoId: number, cantidad: number = 1): Observable<any> {
    const dto: AgregarProductoDTO = {
      usuarioId: this.getUsuarioId(),
      productoId,
      cantidad
    };
    return this.http.post(`${this.API_URL}/agregar`, dto).pipe(
      tap(() => this.updateCartCount()) // actualizar contador al agregar
    );;
  }

  obtenerCarrito(): Observable<CarritoItemDTO[]> {
    return this.http.get<CarritoItemDTO[]>(`${this.API_URL}?usuarioId=${this.getUsuarioId()}`);
  }

  comprar(): Observable<any> {
    return this.http.post(`${this.API_URL}/comprar?usuarioId=${this.getUsuarioId()}`, {}).pipe(
      tap(() => this.cartTotalCount.set(0)) //  reset después de compra
    );
  }

  eliminar(productoId: number): Observable<any> {
    const usuarioId = this.getUsuarioId(); // Implementa cómo recuperas esto
    return this.http.delete(`${this.API_URL}/eliminar`, {
      params: {
        usuarioId: usuarioId.toString(),
        productoId: productoId.toString()
      }
    }).pipe(
      tap(() => this.updateCartCount()) //  reset después de compra
    );
  }
}