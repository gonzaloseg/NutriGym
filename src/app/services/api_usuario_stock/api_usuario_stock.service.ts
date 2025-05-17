import { HttpClient } from '@angular/common/http';
import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Observable, tap } from 'rxjs';
import { signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private apiUrl = 'http://localhost:8080/api/usuarios';
  currentUser = signal<any | null>(null);

  constructor(
    private http: HttpClient,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.getUser();
  }

  getUser() {
    if (isPlatformBrowser(this.platformId)) {
      const data = sessionStorage.getItem('usuario');
      if (data) {
        this.currentUser.set(JSON.parse(data));
      }
    }
  }

  registrar(usuario: any): Observable<any> {
    return this.http.post(`${this.apiUrl}`, usuario);
  }

  iniciarSesion(credentials: { correoElectronico: string, contrasena: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, credentials).pipe(
      tap(response => {
        this.currentUser.set(response);
        if (isPlatformBrowser(this.platformId)) {
          sessionStorage.setItem('usuario', JSON.stringify(response));
        }
      })
    );
  }

  actualizarPerfil(id: string, perfil: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, perfil);
  }

  obtenerPerfil(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  cerrarSesion() {
    if (isPlatformBrowser(this.platformId)) {
      sessionStorage.removeItem('usuario');
    }
    this.currentUser.set(null);
  }
}
