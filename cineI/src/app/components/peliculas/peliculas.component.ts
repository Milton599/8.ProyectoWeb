import { Component, OnInit } from '@angular/core';
import { Pelicula } from '../../models/pelicula';
import { PeliculaService } from '../../services/pelicula.service';
import { Global } from '../../services/global';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrl: './peliculas.component.css',
  providers: [PeliculaService]
})
export class PeliculasComponent implements OnInit{

  public peliculas:Pelicula[];
  public url:string; //Son las direcciones de las rutas del BACKEND
  
  constructor(
    private _peliculaService:PeliculaService
  ){
    this.peliculas = [];
    this.url = Global.url;
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
