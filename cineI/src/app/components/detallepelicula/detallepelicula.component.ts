import { Component, OnInit } from '@angular/core';
import { PeliculaService } from '../../services/pelicula.service';
import { Global } from '../../services/global';
import { Pelicula } from '../../models/pelicula';
import { ActivatedRoute, Router, Params  } from '@angular/router'; /* Cuando le doy clic por la url se me va a enviar un id, y para esto necesito el params */
@Component({
  selector: 'app-detallepelicula',
  templateUrl: './detallepelicula.component.html',
  styleUrl: './detallepelicula.component.css',
  providers: [PeliculaService]
})
export class DetallepeliculaComponent implements OnInit {
  public url:string;
  public pelicula:Pelicula;
  public confirm:boolean;
  
  constructor(
    private _peliculaService:PeliculaService,
    private _router:Router, //para mandar a otra ruta
    private _route:ActivatedRoute
  ){
    this.url=Global.url;
    this.pelicula =  new Pelicula('','','',2020,10,'');  
    this.confirm = false;
  }
  ngOnInit(): void {
    //Para ir a detalle pelicula se va a una url+id, entonces vamos a obtener ese id de la url
    this._route.params.subscribe(params=>{ 
      let id = params['id'];
      this.getPeliucla(id);

    })
  } 

  getPeliucla(id:string){
    this._peliculaService.getPelicula(id).subscribe(
      response=>{
        this.pelicula=response.pelicula
      },
      error=>{
        console.log(error);
      }
    )
  }

  setConfirm(confirm:boolean){
    this.confirm = confirm;
  }

  borrarPelicula(id:string){
    this._peliculaService.deletePelicula(id).subscribe(
      response=>{
        if(response.pelicula){
          this._router.navigate(['/peliculas'])
        }
      },
      error=>{
        console.log(error);
      }
    )
  }
}
