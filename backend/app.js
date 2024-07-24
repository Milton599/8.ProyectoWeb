'use strict'
var express=require('express');
var bodyParser=require('body-parser');
var app=express();
var peliculasRouter = require('./router/peliculas.router')

//lo que llega y se envia sea convertido en json
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//Las cabecera para saber que esta permitido
//Para que me permita hacer GET,POST,...
app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin','*'); //CORS control de acceso HTTP
    res.header('Access-Control-Allow-Headers','Authorization, X-API-KEY, X-Request-With, Content-Type,Accept, Access-Control-Allow, Request-Method');
    res.header('Access-Control-Allow-Methods','GET,POST,OPTIONS,PUT,DELETE'); //Me metodos voy a permitir que se puedan hacer
    res.header('Allow','GET, POST, OPTIONS, PUT, DELETE');
    next();
});

//rutas
/* app.get('/',(req,res)=>{   //en la raiz va haber un response con estatus 200
    res.status(200).send("<h1>Hola</h1>") //Le asigno el estatus que quiera
}) */

//en vez de poner las rutas aqui, lo hacemos en:
app.use('/', peliculasRouter) //variable qeu apunta a peliculas.routes.js

module.exports=app;

