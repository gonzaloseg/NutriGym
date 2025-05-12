import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private apiUrl = 'http://localhost:8080/api/usuarios';

  constructor(private http: HttpClient) { }

  registrar(usuario: any): Observable<any> {
    return this.http.post(`${this.apiUrl}`, usuario);
  }

  iniciarSesion(credentials: { correoElectronico: string, contrasena: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`,credentials);
  }
 
  actualizarPerfil(id: string, perfil: any): Observable<any> {
  return this.http.put(`${this.apiUrl}/usuarios/${id}`, perfil);
}
}