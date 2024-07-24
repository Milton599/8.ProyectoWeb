import { Injectable } from "@angular/core";
import { Global } from "./global";

@Injectable()
export class CargarServe{
    public url:string;
    constructor(){
        this.url = Global.url;
    }

    peticionRequest(url:string, params:Array<string>,files:Array<File>, name:string){
        return new Promise(function(resolve, reject){
            let formData:any=new FormData(); //Simulacion de un formulario de un objeto
            let xhr=new XMLHttpRequest(); 
           
            //Recorrer todos los archivos que lleguen
            //adjuntar el formulario con el nombre que llega
            //añadir ese archivo con su nombre
            for(const element of files){
                formData.append(name, element, element.name);
            }
            
            xhr.onreadystatechange = function(){
                if(xhr.readyState == 4){
                    if(xhr.status == 200){ //exitoso vamos a pasar la respuesta
                        resolve(JSON.parse(xhr.response)); 
                    }else{
                        reject(new Error(`Error ${xhr.status}: ${xhr.statusText || xhr.response}`));
                    }
                }
            }

            xhr.open('POST',url,true); //solicitar esta peticion mediante el true
            xhr.send(formData);
        })
    }
}