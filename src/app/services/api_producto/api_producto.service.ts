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

  crearproductos(producto: Producto): Observable<Producto> {
    return this.http.post(`${this.apiUrl}`, producto) as Observable<Producto>;
  }
  actualizarproductos(producto: Producto): Observable<Producto> {
    return this.http.put(`${this.apiUrl}`, producto) as Observable<Producto>;
  }
  eliminarproductos(id: number): Observable<Producto> {
    return this.http.delete(`${this.apiUrl}/${id}`) as Observable<Producto>;
  }
  obtenerproductos(): Observable<Producto[]> {
    return this.http.get(`${this.apiUrl}`) as Observable<Producto[]>;
  }
  obtenerproductoscategoria(categoria?: string): Observable<Producto[]> {
    return this.http.get(`${this.apiUrl}?categoria=${categoria}`) as Observable<Producto[]>;
  }
  obtenerproductoporid(id: number): Observable<Producto> {
    return this.http.get(`${this.apiUrl}/${id}`) as Observable<Producto>;
  }
   
}