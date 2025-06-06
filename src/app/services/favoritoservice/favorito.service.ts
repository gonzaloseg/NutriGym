import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsuarioService } from '../usuarioservice/usuario.service';
import { Observable } from 'rxjs';
import { FavoritoDTO } from '../../interfaces/favoritodto';

@Injectable({
  providedIn: 'root'
})
export class FavoritoService {

  private readonly API_URL = 'http://localhost:8080/api/favoritos';

  constructor(
    private http: HttpClient,
    private usuarioService: UsuarioService
  ) { }

  private getUsuarioId(): number {
    const id = this.usuarioService.getUsuarioId();
    if (id === null) {
      throw new Error('Usuario no autenticado');
    }
    return id;
  }

  agregarAFavoritos(productoId: number): Observable<any> {
  // Construye los parámetros con el ID del usuario y el ID del producto
  const params = new HttpParams()
    .set('usuarioId', this.getUsuarioId().toString()) // ID del usuario autenticado
    .set('productoId', productoId.toString());        // ID del producto a agregar

  // Envía una solicitud POST sin cuerpo, pasando los parámetros por URL
  return this.http.post(this.API_URL, null, { params });
}

  eliminarDeFavoritos(productoId: number): Observable<any> {
  // Construye los mismos parámetros que en el método anterior
  const params = new HttpParams()
    .set('usuarioId', this.getUsuarioId().toString()) // ID del usuario autenticado
    .set('productoId', productoId.toString());        // ID del producto a eliminar

  // Envía una solicitud DELETE con los parámetros
  return this.http.delete(this.API_URL, { params });
}
obtenerFavoritos(): Observable<FavoritoDTO[]> {
  // Construye los parámetros usando el ID del usuario actual
  const params = new HttpParams()
    .set('usuarioId', this.getUsuarioId().toString()); // ID del usuario

  // Envía una solicitud GET y espera una lista de objetos FavoritoDTO
  return this.http.get<FavoritoDTO[]>(this.API_URL, { params });
}
}
