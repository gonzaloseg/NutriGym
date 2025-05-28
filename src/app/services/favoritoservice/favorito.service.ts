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
    const params = new HttpParams()
      .set('usuarioId', this.getUsuarioId().toString())
      .set('productoId', productoId.toString());

    return this.http.post(this.API_URL, null, { params });
  }

  eliminarDeFavoritos(productoId: number): Observable<any> {
    const params = new HttpParams()
      .set('usuarioId', this.getUsuarioId().toString())
      .set('productoId', productoId.toString());

    return this.http.delete(this.API_URL, { params });
  }

  obtenerFavoritos(): Observable<FavoritoDTO[]> {
    const params = new HttpParams().set('usuarioId', this.getUsuarioId().toString());
    return this.http.get<FavoritoDTO[]>(this.API_URL, { params });
  }
}
