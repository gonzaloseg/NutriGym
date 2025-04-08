import { Component, OnInit } from '@angular/core';
import { WgerService } from '../../services/api_wger_rutinas/api_wger_rutinas.service';

@Component({
  selector: 'app-rutinas',
  templateUrl: './rutinas.component.html',
  styleUrl: './rutinas.component.css'
})
export class RutinasComponent implements OnInit {

  ejercicios: any[] = [];  // Creamos una variable para almacenar los ejercicios

  constructor(private wgerService: WgerService) {}

  ngOnInit(): void {
    this.getEjercicios();  // Llamamos al método para obtener ejercicios
  }

  // Método para obtener los ejercicios del servicio
  getEjercicios(): void {
    this.wgerService.getExercises().subscribe(
      (data: any) => {
        this.ejercicios = data.results;  // Asignamos los resultados a la variable ejercicios
        console.log('Ejercicios: ', this.ejercicios);  // Mostramos los datos en consola
      },
      (error) => {
        console.error('Error al obtener ejercicios', error);  // Mostramos errores si ocurren
      }
    );
  }
}