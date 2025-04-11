import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Category, Ejercicio } from '../../interfaces/rutinas';

@Injectable({
  providedIn: 'root'
})
export class WgerService {


  private apiUrl = 'https://wger.de/api/v2'; // Definimos la URL de la API


  constructor(private http: HttpClient) { }

  // Método para obtener ejercicios (públicos, no requiere token)
  getExercises(): Observable<Ejercicio[]> {
    return this.http.get(`${this.apiUrl}/exerciseinfo/?language=2&limit=12`).pipe(map((data: any) => data.results)); // 12 ejercicios como límite
  }
  getcategory(): Observable<Category[]> {
    return this.http.get(`${this.apiUrl}/exercisecategory/`).pipe(map((data: any) => data.results)); // 12 ejercicios como límite
  }
}