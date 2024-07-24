//CONTENEDOR PARA RECIBIR LOS DATOS DE LA BDD (DEBE SER IGUAL)

export class Pelicula{
    constructor(
        public   _id:string,
        public  nombre:string,
        public  tipo:string,    
        public  anio:number,
        public  precio:number,
        public  imagen:string
    ){}
}

