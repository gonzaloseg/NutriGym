import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api_recetas/api_recetas.service';
@Component({
  selector: 'app-recetas',
  templateUrl: './recetas.component.html',
  styleUrl: './recetas.component.css'
})
export class RecetasComponent implements OnInit {
 
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