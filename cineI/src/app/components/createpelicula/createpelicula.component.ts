import { Component, OnInit, ViewChild } from '@angular/core';
import { PeliculaService } from '../../services/pelicula.service';
import { Pelicula } from '../../models/pelicula';
import { CargarServe } from '../../services/cargar.service';
import { Global } from '../../services/global';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-createpelicula',
  templateUrl: './createpelicula.component.html',
  styleUrl: './createpelicula.component.css',
  providers: [PeliculaService, CargarServe]
})
export class CreatepeliculaComponent implements OnInit{
  public titulo:string;
  public pelicula:Pelicula;
  public peliculaGuardad:Pelicula;
  public url:string;
  public status:string;
  public idGuardado:string;
  @ViewChild('arhcivo') fileInput:any; //elemento cuyo nombre es archivo
  public archivosParaCargar:Array<File>;

  constructor(
    private _peliculaService:PeliculaService,
    private _cargarService:CargarServe
  ){
    this.titulo = "Guardar Pelicula";
    this.pelicula = new Pelicula("","","",2020,20,"");
    this.peliculaGuardad = new Pelicula("","","",2020,20,"");
    this.url = "";
    this.status = "";
    this.idGuardado = "";
    this.archivosParaCargar = [];
  }

  ngOnInit(): void {
    console.log('');
  }

  guardarPelicula(form:NgForm){
    this._peliculaService.guardarPelicula(this.pelicula).subscribe(
      response=>{
        if(response.pelicula){  //si existe la pelicula
          if(this.archivosParaCargar){
            this._cargarService.peticionRequest(Global.url+"subir-imagen/"+response.pelicula._id,[],this.archivosParaCargar, 'imagen')  //lo pasamos al parametro imagen
            .then((result:any)=>{//esto puede resolverse 
              this.peliculaGuardad=result.response;
              this.status='success';
              this.idGuardado=result.pelicula.id;
              form.reset(); //solicito que ese formulario sea borrado todos los campo
              this.fileInput.nativeElement.value = '';
            });
          }else{
            this.status='failed';
          }
        }else{
          this.status = 'failed'
        }
      },
      error=>{
        console.log(error);
      }

    )
  }

  imagenChangeEvent(archivoSeleccionado:any){ //cambio de evento cuando se genere un archivo
    this.archivosParaCargar=<Array<File>>archivoSeleccionado.target.files;
  }
}


