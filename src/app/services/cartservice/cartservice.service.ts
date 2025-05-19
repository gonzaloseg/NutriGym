import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { Producto } from '../../interfaces/producto';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  private readonly API_URL = 'http://localhost:8080/api/purchases';
  private readonly STORAGE_KEY = 'cart';

  constructor(private http: HttpClient) { }

  /**
   * Añade un curso al carrito. Evita duplicados.
   */
  addToCart(Producto: Producto): void {
    const cartCourses = this.getCartCourses();
     cartCourses.push(Producto);
      this.saveCart(cartCourses);
  }

  /**
   * Elimina un curso del carrito por UUID.
   */
  removeFromCart(Productoid: number): Producto[] {
    const cartCourses = this.getCartCourses()
      .filter(course => course.id !== Productoid);
    this.saveCart(cartCourses);
    return this.getCartCourses();
  }

  /**
   * Devuelve todos los cursos del carrito.
   */
  getCartCourses(): Producto[] {
    try {
      const data = localStorage.getItem(this.STORAGE_KEY);
      return data ? JSON.parse(data) : [];
    } catch (error) {
      console.error('Error al leer el carrito:', error);
      return [];
    }
  }

  /**
   * Limpia completamente el carrito.
   */
  clearCart(): void {
    localStorage.removeItem(this.STORAGE_KEY);
  }

  /**
   * Compra todos los cursos del carrito
   */
 buyCart(): Observable<any> {
  const token = localStorage.getItem('auth_token');

  if (!token) {
    return throwError(() => new Error('Usuario no autenticado'));
  }

  const cartCourses: Producto[] = this.getCartCourses();

  if (!cartCourses.length) {
    return throwError(() => new Error('El carrito está vacío'));
  }

  // Extraer sólo los IDs definidos
  const id: number[] = cartCourses
    .map(course => course.id)
    .filter((id): id is number => id !== undefined);

  return this.http.post(`${this.API_URL}`, { id }).pipe(
    tap(() => this.clearCart()),
    catchError(error => {
      console.error('Error al comprar los cursos:', error);
      return throwError(() => new Error('Error al comprar los cursos'));
    })
  );
}


  /**
   * Guarda el carrito en localStorage.
   */
  private saveCart(courses: Producto[]): void {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(courses));
  }
}