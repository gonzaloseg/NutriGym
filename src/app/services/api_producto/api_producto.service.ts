import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../../interfaces/producto';

@Injectable({
  providedIn: 'root'
})
export class productoservice {

  private apiUrl = 'http://localhost:8080/api/productos';

  constructor(private http: HttpClient) { }

 // Método para crear un nuevo producto
crearproductos(producto: Producto): Observable<Producto> {
  // Envía una petición POST al backend con los datos del producto
  return this.http.post(`${this.apiUrl}`, producto) as Observable<Producto>;
}

// Método para actualizar un producto existente
actualizarproductos(producto: Producto): Observable<Producto> {
  // Envía una petición PUT al backend usando el ID del producto
  return this.http.put(`${this.apiUrl}/${producto.id}`, producto) as Observable<Producto>;
}

// Método para eliminar un producto por ID
eliminarproductos(id: number): Observable<Producto> {
  // Envía una petición DELETE al backend para eliminar el producto
  return this.http.delete(`${this.apiUrl}/${id}`) as Observable<Producto>;
}

// Método para obtener todos los productos
obtenerproductos(): Observable<Producto[]> {
  // Realiza una petición GET al backend para obtener la lista completa
  return this.http.get(`${this.apiUrl}`) as Observable<Producto[]>;
}

// Método para obtener productos filtrados por categoría (opcional)
obtenerproductoscategoria(categoria?: string): Observable<Producto[]> {
  // Realiza una petición GET agregando el parámetro de categoría a la URL
  return this.http.get(`${this.apiUrl}?categoria=${categoria}`) as Observable<Producto[]>;
}

// Método para obtener un producto específico por su ID
obtenerproductoporid(id: number): Observable<Producto> {
  // Realiza una petición GET para un producto en específico
  return this.http.get(`${this.apiUrl}/${id}`) as Observable<Producto>;
}
}