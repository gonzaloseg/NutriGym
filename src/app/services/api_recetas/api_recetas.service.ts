import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

    private apiUrl = 'https://api.edamam.com/api/recipes/v2';
  private appId = 'f4d91107'; // Reemplaza con tu App ID
  private appKey = 'c492e9c58faf44f8cb4e5bfb81507bf5'; // Reemplaza con tu App Key
  private userId = 'f4d91107'; // Reemplaza con tu User ID real

  constructor(private http: HttpClient) {}

  getRecipes(query: string): Observable<any> {
    const headers = new HttpHeaders({
      'Edamam-Account-User': this.userId // Agregar el userID en los headers
    });

    const url = `${this.apiUrl}?type=public&q=${query}&app_id=${this.appId}&app_key=${this.appKey}`;
    
    return this.http.get(url, { headers });
  }
}