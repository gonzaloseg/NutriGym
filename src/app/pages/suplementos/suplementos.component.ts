import { Component } from '@angular/core';
import { ApiService } from '../../services/api_rutina/api_rutina.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-suplementos',
  templateUrl: './suplementos.component.html',
  styleUrl: './suplementos.component.css'
})
export class SuplementosComponent  implements OnInit {
  recipes: any;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getRecipes('pasta').subscribe(response => {
      this.recipes = response;
      console.log(this.recipes);
    });
  }
}