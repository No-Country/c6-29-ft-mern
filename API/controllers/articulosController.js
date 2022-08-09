const articulos = require('../modelos/articulos');
module.exports ={
    getAll: async function(req, res, next) {
        try {
          const articulosAll = await articulos.find()
          res.status(200).json(articulosAll)
        } catch (error) {
          console.log(error);
        }
      },
      getnombre: async function(req,res,next){
        try {
             let queryFind={}
          if(req.query.buscar){
            queryFind = {nombreArticulo:{$regex:".*"+req.query.buscar+".*",$options:"i"}}
          }
          const articuloNombre = await articulos.find(queryFind)
          res.status(200).json(articuloNombre)
        } catch (error) {
            console.log(error);
        }

      },
      create: async function(req,res,next){
        try {
        const articulo = new articulos({
            contacto: req.body.contacto,
            nombreArticulo: req.body.nombreArticulo,
            fechaCreacion: req.body.fechaCreacion,
            imagen: req.body.imagen,
            descripcion: req.body.descripcion,
            categoria: req.body.descripcion,
            condicion: req.body.condicion,
            precio: req.body.precio,
            ubicacion: req.body.ubicacion,
            estado: req.body.estado,
            valoracion: req.body.valoracion
        })  
        const document = await articulo.save()
        console.log(req.body);
        res.status(201).json(document)  
      } catch (error) {
          console.log(error);
        }
      },
      getById: async function(req,res,next){
        console.log(req.params.id);
        try {
          const articulo = await articulos.findById(req.params.id)        
          res.status(200).json(articulo)
        } catch (error) {
          console.log(error);
        }
      },
      update: async function(req,res,next){
        const {id} = req.params; 
        try {
        const {_id, contacto,valoracion, ...resto} = req.body;
          const document = await articulos.updateOne(id,resto);
          res.status(200).json(document)
        } catch (error) {
          console.log(error);
        }
      },
      delete: async function (req,res,next){
        console.log(req.params.id);
        try {
          const document = await articulos.deleteOne({_id:req.params.id})
          res.status(200).json(document)
        } catch (error) {
          console.log(error);

        }
      },

      getRecientes: async function(req,res,next){
        const f = new Date()
        console.log(f);
        const fechaInicial = req.body.fechaCreacion;
        const fechaFinal = fechaInicial.substring(0,8).concat(Number(fechaInicial.substring(8)) + 1);
        try {
            const articulodate = await articulos.find({$and: [{f: {$gte: new Date(fechaInicial)}},{fecha: {$lt: new Date(fechaFinal)}}]})
            return res.status(200).json(articulodate) 
        } catch (error) {
            console.log(error);
        }
      },
      favoritos: async () => {},
      localizar: async () => {},
      

}