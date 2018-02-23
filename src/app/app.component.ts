import { Component } from '@angular/core';

export class Banda {
  id: number;
  nombre: string;
}

const BANDAS: Banda[] = [
  { id: 11, nombre: 'El Farsante'},
  { id: 12, nombre: 'Amorfada'},
  { id: 13, nombre: 'Me Niego'},
  { id: 14, nombre: 'Soy Peor'},
  { id: 15, nombre: 'Egoista'},
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Mis Canciones Favoritas';
  banda = BANDAS;

  band : Banda;

  seleccionar(item: Banda): void{
    this.band = item;
  }
}


