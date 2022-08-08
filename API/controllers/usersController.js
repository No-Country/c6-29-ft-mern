const {response, request} = require('express');
const Usuarios = require('../modelos/usuarios');

module.exports ={
    create: async function(req,res,next){
        console.log(req.body)
      try {
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
      })
      const document = await user.save()
      res.status(201).json(document)
    } catch (error) {
        console.log(error);
      }
    },
}

