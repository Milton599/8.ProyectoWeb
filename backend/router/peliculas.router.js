'use strict'
let express=require('express');
let router=express.Router();
let peliculasRouter=require('../controllers/peliculas.controller');

//Para subir imagenes
let multiparty=require('connect-multiparty');
let muyltipartyMiddleWare=multiparty({uploadDir:'./uploads'})



//SERVICIOS PARA CONSUMIR EN ANGULAR
//Pagina de inicio
router.get('/', peliculasRouter.getInicio); //cuando haga un get en incio vaya a buscaer un elemento que permita cargar el inicio (getInicio)

//Guardar pelicula
router.post('/guardar-pelicula', peliculasRouter.savePelicula);

//Ver peliculas
router.get('/peliculas', peliculasRouter.getPeliculas);

//Ver pelicula segun id
router.get('/pelicula/:id', peliculasRouter.getPelicula);

//Editar pelicula
router.put('/pelicula/:id', peliculasRouter.updatePelicula);

//Borrar pelicula
router.delete('/pelicula/:id', peliculasRouter.deletePelicula);

//Agregar una imagen
router.post('/subir-imagen/:id', muyltipartyMiddleWare,peliculasRouter.uploadImagen); //para agregar :id

//Recuperar una imagen
router.get('/imagen/:imagen', peliculasRouter.getImagen); //para recuperar :imagen

module.exports=router;