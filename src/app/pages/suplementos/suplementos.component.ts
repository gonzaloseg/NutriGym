import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api_rutina/api_rutina.service';

@Component({
  selector: 'app-suplementos',
  templateUrl: './suplementos.component.html',
  styleUrls: ['./suplementos.component.css']
})
export class SuplementosComponent implements OnInit {
 
    searchQuery: string = '';
    recipes: any[] = [];  
  
    constructor(private apiService: ApiService) {}
  
    ngOnInit() {
      this.buscarRecetas('chicken'); // Carga inicial
    }
  
    buscarRecetas(query: string) {
      if (!query.trim()) return;
    
      this.apiService.getRecipes(query).subscribe(response => {
        this.recipes = response.hits; // Extraemos solo el array de recetas
        console.log(this.recipes);
      });
    }
  }

