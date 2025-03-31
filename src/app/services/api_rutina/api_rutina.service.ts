import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
 /* private apiKey = '8e9ba524827343a0829d9b5e67aa27fd'; // Clave de la API
  private apiUrl = 'https://api.spoonacular.com/recipes/complexSearch'; // URL de la API

  constructor(private http: HttpClient) {}

  getRecipes(query: string) {
    return this.http.get(`${this.apiUrl}?query=${query}&apiKey=${this.apiKey}`);
  }*/
    private apiUrl = 'https://api.edamam.com/api/recipes/v2';
  private appId = 'f4d91107'; // Reemplaza con tu App ID
  private appKey = 'c492e9c58faf44f8cb4e5bfb81507bf5'; // Reemplaza con tu App Key
  private userId = 'f4d91107'; // Reemplaza con tu User ID real

  constructor(private http: HttpClient) {}

  getRecipes(query: string): Observable<any> {
    const headers = new HttpHeaders({
      'f4d91107': this.userId // Agregar el userID en los headers
    });

    const url = `${this.apiUrl}?type=public&q=${query}&app_id=${this.appId}&app_key=${this.appKey}`;
    
    return this.http.get(url, { headers });
  }
}