import { Component, OnInit } from '@angular/core';
import { WgerService } from '../../services/api_wger_rutinas/api_wger_rutinas.service';
import { Category, Ejercicio } from '../../interfaces/rutinas';

@Component({
  selector: 'app-rutinas',
  templateUrl: './rutinas.component.html',
  styleUrl: './rutinas.component.css'
})
export class RutinasComponent implements OnInit {

  ejercicios: Ejercicio[] = [];
  ejerciciosFiltrados: Ejercicio[] = [];
  categorias: Category[] = [];
  categoriaSeleccionada: number = 0; // 0 significa 'todas'

  constructor(private wgerService: WgerService) { }

  ngOnInit(): void {
    this.getEjercicios();
    this.getCategorias();
  }

  getEjercicios(): void {
    this.wgerService.getExercises().subscribe({
      next: (data) => {
        this.ejercicios = data;
        this.ejerciciosFiltrados = data;
        console.log(this.ejercicios); // <-- VERIFICAMOS AQUÍ
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  getCategorias(): void {
    this.wgerService.getcategory().subscribe({
      next: (datos) => {
        this.categorias = datos; // Ya es un array
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  filtrarPorCategoria(): void {
    if (this.categoriaSeleccionada === 0) {
      this.ejerciciosFiltrados = this.ejercicios;
    } else {
      this.ejerciciosFiltrados = this.ejercicios.filter(
        (ej) => ej.category.id === this.categoriaSeleccionada
      );
    }
  }
}
