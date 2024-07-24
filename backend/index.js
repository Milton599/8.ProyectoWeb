
//CONECTAR A UNA BASE DE DATOS

'use strict'
var mongoose=require('mongoose');
var port='3600';
mongoose.promise=global.Promise;
mongoose.set("strictQuery",false);
var app=require('./app');

mongoose.connect('mongodb://localhost:27017/peliculas')
.then(()=>{
    console.log("Conexión exitosa a la BDD");
    app.listen(port,()=>{
        console.log("Servidor corriendo en localhost:3600")
    })
})
.catch(err=>console.log(err))

module.exports=app;

