import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiKey = '8e9ba524827343a0829d9b5e67aa27fd'; // Clave de la API
  private apiUrl = 'https://spoonacular.com/food-api'; // URL de la API

  constructor(private http: HttpClient) {}

  getRecipes(query: string) {
    return this.http.get(`${this.apiUrl}?query=${query}&apiKey=${this.apiKey}`);
  }
}
