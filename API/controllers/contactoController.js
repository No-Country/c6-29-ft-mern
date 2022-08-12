const {response, request} = require('express');
const Contactos = require('../modelos/contactos');

module.exports ={

  get: async (req,res,next) =>{

    try {

      const contactos = await Contactos.paginate({limit:4});

      res.status(201).json({
        contactos
      })
      
    } catch (error) {
      res.status(400).json({
        error
      })
    }
  },

  getOne:async (req,res,next) =>{

    const {id} = req.params;

    try {
      const contactos = await Contactos.findById(id);

      if(usuario){
        res.status(201).json({
            contactos
        })
      }else{
        res.status(400).json({
          msg: `El contacto con el id ${id} no existe`
        })
      }

    } catch (error) {
      res.status(400).json({
        error
      })
    }

    

  },

  create: async (req,res,next) =>{
    const contacto = new Contactos({
      nombre:req.body.nombre,
      apellido:req.body.apellido,
      telefono:req.body.telefono,
      email:req.body.email,
      direccion:req.body.direccion,
      coordenadas:req.body.coordenadas,
    });

    try {

      const newContacto = await contacto.save();
      res.status(201).json(newContacto)

      } catch (error) {
        res.status(500).json(error)
      }
  },

  update: async (req,res,next) =>{

    const {id} = req.params;

    const {
            _id, 
            password, 
            google,
            emailValidado,
            rol,
            __v,
              ...resto} = req.body;

    try {
      const contactoModificado = await Contactos.findByIdAndUpdate(id, resto);
      res.status(201).json({
        contactoModificado
      })
    } catch (error) {
      res.status(400).json({
        error
      })
    }
  },

  delete: async (req,res,next) =>{

    const {id} = req.params;

    try {
      await Contactos.findByIdAndDelete(id);

      res.status(201).json({
        msg: 'ok'
      })
    } catch (error) {
      res.status(400).json({
        error
      })
    }
  },


}




