import { Component, OnInit } from '@angular/core';
import { Banda } from './banda';
import { BandaService } from './banda.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[BandaService]
})
export class AppComponent implements OnInit{
  titulo = 'Mis Canciones Favoritas';
  bandas : Banda[];
  band : Banda;
  constructor(private bandaService: BandaService) { }

  getBandas() : void{
    this.bandas = this.bandaService.getBandas();
  }

  ngOnInit(): void {
    this.getBandas();
  }

  seleccionar(item: Banda): void{
    this.band = item;
  }
}


