const {response, request} = require('express');
const Usuarios = require('../modelos/usuarios');

module.exports ={

  get: async (req,res,next) =>{
    res.status(201).json({
      msg: 'get all'
    })
  },

  getOne:async (req,res,next) =>{
    res.status(201).json({
      msg: 'get one'
    })
  },

  create: async (req,res,next) =>{
    
    const  user  = new Usuarios({
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

