const {response, request} = require('express');
const Usuarios = require('../modelos/usuarios');

module.exports ={

  get: async (req,res,next) =>{
    console.log('get all')
    try {
      const usuarios = await Usuarios.find({});
      res.status(201).json({
        usuarios : usuarios
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
      const usuario = await Usuarios.findById(id);

      if(usuario){
        res.status(201).json({
          usuario
        })
      }else{
        res.status(400).json({
          msg: `El usuario con el id ${id} no existe`
        })
      }

    } catch (error) {
      res.status(400).json({
        error
      })
    }

    

  },

  create: async (req,res,next) =>{
    const user = new Usuarios({
      username:req.body.username,
      password:req.body.password,
      email:req.body.email,
      emailValidado:req.body.emailValidado,
      google:req.body.google,
      rol:req.body.rol,
      avatar:req.body.avatar,
      contacto: req.body.contacto,
      articulos_id:req.body.articulos_id,
      favoritos_id:req.body.favoritos_id,
      feria: req.body.feria,
    });

    try {

      const newUser = await user.save();
      res.status(201).json(newUser)

      } catch (error) {
        res.status(500).json(error)
      }
    },

  update: async (req,res,next) =>{
    res.status(201).json({
      msg: 'update'
    })
  },

  delete: async (req,res,next) =>{
    res.status(201).json({
      msg: 'delete'
    })
  }
}

