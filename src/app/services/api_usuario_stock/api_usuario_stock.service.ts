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
  // Signal reactivo para guardar el usuario actual
  currentUser = signal<any | null>(null);

  // Constructor con inyección de dependencias
  constructor(
    private http: HttpClient, // Cliente HTTP para llamadas al backend
    @Inject(PLATFORM_ID) private platformId: Object // Para detectar si se está ejecutando en el navegador o servidor
  ) {
    this.getUser(); // Intenta obtener el usuario desde sessionStorage al iniciar el servicio
  }

  // Método para obtener el usuario desde sessionStorage si se está en el navegador
  getUser() {
    if (isPlatformBrowser(this.platformId)) {
      const data = sessionStorage.getItem('usuario');
      if (data) {
        this.currentUser.set(JSON.parse(data)); // Actualiza el estado del usuario si existe
      }
    }
  }

  // Método para registrar un nuevo usuario (POST)
  registrar(usuario: any): Observable<any> {
    return this.http.post(`${this.apiUrl}`, usuario);
  }

  // Método para iniciar sesión
  iniciarSesion(credentials: { correoElectronico: string, contrasena: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, credentials).pipe(
      tap(response => { // Al recibir respuesta, guarda el usuario en el signal y en sessionStorage
        this.currentUser.set(response);
        if (isPlatformBrowser(this.platformId)) {
          sessionStorage.setItem('usuario', JSON.stringify(response));
        }
      })
    );
  }

  // Método para actualizar el perfil del usuario (PUT)
  actualizarPerfil(id: string, perfil: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, perfil);
  }

  // Método para obtener el perfil de un usuario (GET)
  obtenerPerfil(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  // Método para cerrar sesión
  cerrarSesion() {
    if (isPlatformBrowser(this.platformId)) {
      sessionStorage.removeItem('usuario'); // Elimina el usuario del sessionStorage
    }
    this.currentUser.set(null); // Resetea el estado del usuario
  }
}