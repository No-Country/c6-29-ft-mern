const Joi = require('joi')

const Joi = require('@hapi/joi')
Joi.objectId = require('joi-objectid')(Joi)


const validator = (req, res, next)=>{

    const schema = Joi.object({
        
        username: Joi.string().max(20).min(2).trim().pattern(new RegExp('[a-zA-Z]')).required().messages({
            'string.min':'You name must have at least 2 characters',
            'string.max':'You name cannot exceed 20 characters'
        }),
        password: Joi.string().pattern(new RegExp('[a-zA-Z0-9]')).required().trim().min(8).max(30).message({
            'string.min': 'The password must be have a minimum length of 8 characters (lower case, upper case and numberes are required).',
            'string.pattern': 'The pasword must be alphanumerical and it must contain at least one number.'
        }),
        email: Joi.string().email({minDomainSegments: 2}).required().messages({
            'string.email':'Incorrect email format.'
        }),
        emailValidad: Joi.boolean(),
        google: Joi.boolean(),
        rol: Joi.string(),
        avatar: Joi.string().min(5).trim().messages({
            'string.min':'URL must have at least 5 characters',
        }),

        contacto:{
            nombre: Joi.string().max(20).min(2).trim().pattern(new RegExp('[a-zA-Z]')).messages({
                'string.min':'You name must have at least 2 characters',
                'string.max':'You name cannot exceed 20 characters',
                'string.pattern': ''
            }),
            apellido: Joi.string().max(20).min(2).trim().pattern(new RegExp('[a-zA-Z]')).messages({
                'string.min':'You name must have at least 2 characters',
                'string.max':'You name cannot exceed 20 characters',
                'string.pattern': ''
            }), 
            telefono:Joi.string(),
            email: Joi.string(),
            direccion: Joi.string(),
            coordenadas:{
                latitud: Joi.number(),
                longitud: Joi.number(),
            }
        },


        feria:{
            nombre:Joi.string(),
            ubicacionReal:Joi.string(),
            coordenadas:{
                latitud: Joi.number(),
                longitud: Joi.number(),
            }
        },


        articulos_id : Joi.array.items('Joi-objectId')(Joi),
        favoritos_id : Joi.array.items('Joi-objectId')(Joi),

    })

    const schemaArticulo = Joi.object({ 
        nombreArticulo: Joi.string().max(20).min(2).trim().pattern(new RegExp('[a-zA-Z]')).required().messages({
            'string.min':'You name must have at least 2 characters',
            'string.max':'You name cannot exceed 20 characters'
        }), 

        fechaCreacion: Joi.date(),
        imagen: Joi.array.items(Joi.string()),
        descripcion: Joi.string().max(150).trim(),
        categoria: Joi.string().required(),
        condicion: Joi.string().required(),
        precio: Joi.string().required(),
        ubicacion:{
            latitud: Joi.number(),
            longitud: Joi.number()
        },
        estado: Joi.string().required(),
        valoracion: Joi.number(),

        contacto:{
            nombre: Joi.string().max(20).min(2).trim().pattern(new RegExp('[a-zA-Z]')).messages({
                'string.min':'You name must have at least 2 characters',
                'string.max':'You name cannot exceed 20 characters',
                'string.pattern': ''
            }),
            apellido: Joi.string().max(20).min(2).trim().pattern(new RegExp('[a-zA-Z]')).messages({
                'string.min':'You name must have at least 2 characters',
                'string.max':'You name cannot exceed 20 characters',
                'string.pattern': ''
            }), 
            telefono:Joi.string(),
            email: Joi.string(),
            direccion: Joi.string(),
            coordenadas:{
                latitud: Joi.number(),
                longitud: Joi.number(),
            }
        },

    })

    const validation = schema.validate(req.body.newUserData, {abortEarly:false})
        if(validation.error){
            return res.json({success: false, message:validation.error.details})
        }
    
    next()

}
module.exports = validator