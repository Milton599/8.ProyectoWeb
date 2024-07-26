'use controler'
let Pelicula=require('../models/pelicula');
//para obtener el sistema de archivos y el path
let fs=require('fs');
let path=require('path')

let controller={ 
    getInicio:function(req,res){  //IMPORTANTE EL ORDEN REQ,RES
        return res.status(201).send(
            "<h1>Hola 2</h1>"
        );
    },
    
    savePelicula: async function(req, res) {
        try {
            let pelicula = new Pelicula();
            let params = req.body; //desde el body

            //Para obtener los datos
            pelicula.nombre = params.nombre;
            pelicula.tipo = params.tipo;
            pelicula.anio = params.anio;
            pelicula.precio = params.precio;
            pelicula.imagen = null;
        
            let peliculaStored = await pelicula.save();
            if (!peliculaStored) {
                return res.status(404).send({ message: 'No se guardó la pelicula' });
            }
            return res.status(201).send({ pelicula:peliculaStored });
        } catch (error) {
            return res.status(500).send({ message: 'Error al guardar' });
        }
    },

    getPeliculas: async function(req,res){
        try {
            //Una promesa es un objeto en JavaScript que representa la eventual conclusión o falla de una operación asíncrona y su valor resultante.
            const peliculas = await Pelicula.find({}).sort().exec() //exec para ejecutar la consulta y retorna una promes
            if(peliculas.length === 0){
                return res.status(404).send({message:"No existen peliculas"})
            }
            return res.status(200).send({peliculas})
        } catch (error) {
            return res.status(199).send({message:"Error al recuperar los datos"})
        }
    },

    getPelicula: async function(req, res){
        try {
            let peliculaId=req.params.id; //voy a pedir el id
            if (peliculaId == null) return res.status(404).send({message:"La pelicula no existe"});

            let pelicula = await Pelicula.findById(peliculaId);
            if (!pelicula) return res.status(404).send({message:"La pelicula no existe"});
            return res.status(200).send({pelicula});
            
        } catch (error) {
            return res.status(199).send({message:"Error al recuperar los datos"})
          
        }
    },


    deletePelicula: async function(req, res){
        try {
            let peliculaId=req.params.id; //voy a pedir el id

            let peliculaBorrada = await Pelicula.findByIdAndDelete(peliculaId);
            if (!peliculaBorrada) return res.status(404).send({message:"No se puede eliminar la pelicula"})
            return res.status(200).send({peliculaBorrada})

        } catch (error) {
            return res.status(500).send({message:"Error al eliminar los datos"})
          
        }
    },

    updatePelicula: async function (req, res) {
        try {
            let peliculaId = req.params.id;
            let peliculaUpdated = await Pelicula.findByIdAndUpdate(peliculaId, req.body, { new: true }); // se solicita nuevos datos en el body
            if (!peliculaUpdated) return res.status(404).send({ message: "La pelicula no se puede actualizar, porque no existe" });
            return res.status(200).send({ peliculaUpdated });
        } catch (error) {
            return res.status(500).send({ message: "Error al actualizar la pelicula" });
        }
    },

    uploadImagen: async function(req,res){
        try {
            let peliculaId = req.params.id;
            let fileName = "Imagen no subida"; //nombre del archivo

            if(req.files){ //si existe un archivo
                let filePath=req.files.imagen.path;
                let file_split=filePath.split('\\'); //se corte apartir del \\
                let fileName=file_split[1];
                let extSplit=fileName.split('.');
                let fileExt=extSplit[1];
                if(fileExt=='png' || fileExt=='jpg' || fileExt=='gif'){ //Si es valido la extension
                    //en imagen le pongo el filename || esto es como crear un elemento nuevo new:true
                    let peliculaActualizada = await Pelicula.findByIdAndUpdate(peliculaId,{imagen:fileName}, {new:true});
                    if(!peliculaActualizada){
                        return res.status(404).send({messge:"No se encontro la pelicula y no se subio la imagen"})
                    } 
                    return res.status(200).send({pelicula:peliculaActualizada});
                }else{
                    fs.unlink(filePath,(err)=>{
                        return res.status(200).send({message:"La extendsion no es valida"})
                    })
                }
            }else{
                return res.status(200).send({message:fileName}) //imagen no subida
            }
            
        } catch (error) {
            return res.status(500).send({message:"Error al subir la imagen"});
        }
    },

    getImagen: async function(req,res){
        try {
            let file = req.params.imagen;
            let path_file="./uploads/"+file;
            let exists=await fs.promises.access(path_file)
            .then(()=>true) 
            .catch(()=>false);

            console.log("Ruta del archivo:", path_file); // Agrega esta línea para verificar la ruta

            
            if(exists){
                return res.sendFile(path.resolve(path_file));
            }else{
                return res.status(200).send({message:"La imagen no existe"})
            }            
        } catch (err) {
            return res.status(500).send({message:"Error al recuperar la imagen"})
        }
    }
}

module.exports=controller;