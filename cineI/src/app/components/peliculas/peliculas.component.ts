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
    this.getPeliculasCine();
  }

  getPeliculasCine(){
    this._peliculaService.getPeliculas().subscribe( //subscribe para verificar si que existen
      response =>{ //cuando el observable remite un valor cuando la solicitud http es exitosa 
        if(response.peliculas){
          this.peliculas=response.peliculas;
        }
      },
      error =>{
        console.log(error);
        
      }
    )
  }
}
