const articulos = require('../modelos/articulos');
module.exports ={
    getAll: async function(req, res, next) {
        try {
          const products = await articulos.find()
          res.status(200).json(products)
        } catch (error) {
          console.log(error);
        }
      },
      create: async function(req,res,next){
        try {
        const producto = new articulos({
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
        const document = await articulos.save()
        console.log(req.body);
        res.status(201).json(document)  
      } catch (error) {
          console.log(error);
        }
      },
      getById: async function(req,res,next){
        console.log(req.params.id);
        try {
          const product = await articulos.findById(req.params.id)        
          res.status(200).json(product)
        } catch (error) {
          console.log(error);
        }
      },
      update: async function(req,res,next){
        console.log(req.params.id);
        try {
          const document = await articulos.updateOne({_id:req.params.id},req.body);
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
      
      }
}