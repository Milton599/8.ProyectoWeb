//ENCARGADO DE HACER LOS METODOS GET, PUT, POST

import { Injectable } from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http"
import { Pelicula } from "../models/pelicula";
import { Global } from "./global";
import { Observable } from "rxjs";

@Injectable()
export class PeliculaService{
    public url:string;
    constructor(
        private _http:HttpClient
    ){
        this.url = Global.url;
    }

    //Ver todas las peliculas   https://localhost:3600/peliculas
    getPeliculas():Observable<any>{
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.get(this.url+'peliculas',{headers:headers});
    } 

    //Guardar pelicula  https://localhost:3600/guardar-pelicula
    guardarPelicula(pelicula:Pelicula):Observable<any>{
        let params=JSON.stringify(pelicula);  //Los datos deben ser convertidos a json

        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.post(this.url+'guardar-pelicula',params,{headers:headers});
    } 

    //Ver pelicula     https://localhost:3600/pelicula/:id 
    getPelicula(id:string):Observable<any>{
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.get(this.url+'pelicula/'+id,{headers:headers});
    } 

    //Editar pelicula  https://localhost:3600/pelicula/:id
    updatePelicula(pelicula:Pelicula):Observable<any>{
        let params=JSON.stringify(pelicula); 

        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.put(this.url+'pelicula/'+pelicula._id,params,{headers:headers});        
    }

    //Eliminar pelicula  https://localhost:3600/peliculas/:id
    deletePelicula(id:string):Observable<any>{
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.delete(this.url+'pelicula/'+id,{headers:headers});       
    }
    

}