//Modelo es el elemento que me permita mapearle a la base de datos


'use strict'

let mongoose=require('mongoose');

let peliculaSchema= new mongoose.Schema({ //Aqui se va a guardar la informacion que venga de la BDD
    nombre:String,
    tipo:String,
    anio:Number,
    precio:Number,
    imagen:String
});


//Cuando esto se va a la BDD toma el primer parametro lo pone en minusculas y lo hace plural
module.exports=mongoose.model('Pelicula',peliculaSchema); 

//Se va a generar una coleccion en la BDD peliculas la cual va contener nombre, tipo,..
