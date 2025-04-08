import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WgerService {

 
    private apiUrl = 'https://wger.de/api/v2'; // Definimos la URL de la API
  private headers = new HttpHeaders({
    Authorization: '7dbd85e6752d8f98b025003e23fb6f49efc1202d' // Reemplaza con tu API key
  });

  constructor(private http: HttpClient) {}

  // Método para obtener ejercicios (públicos, no requiere token)
  getExercises(): Observable<any> {
    return this.http.get(`${this.apiUrl}/exercise/?language=2&limit=12`); // 12 ejercicios como límite
  }
}