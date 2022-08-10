const joi = require('joi')

const Joi = require('@hapi/joi')
Joi.objectId = require('joi-objectid')(Joi)


const validator = (req, res, next)=>{

    const schema = joi.object({
        
        username: joi.string().max(20).min(2).trim().pattern(new RegExp('[a-zA-Z]')).required().messages({
            'string.min':'You name must have at least 2 characters',
            'string.max':'You name cannot exceed 20 characters'
        }),
        password: joi.string().pattern(new RegExp('[a-zA-Z0-9]')).required().trim().min(8).max(30).message({
            'string.min': 'The password must be have a minimum length of 8 characters (lower case, upper case and numberes are required).',
            'string.pattern': 'The pasword must be alphanumerical and it must contain at least one number.'
        }),
        email: joi.string().email({minDomainSegments: 2}).required().messages({
            'string.email':'Incorrect email format.'
        }),
        emailValidad: joi.boolean(),
        google: joi.boolean(),
        rol: joi.string(),
        avatar: joi.string().min(5).trim().messages({
            'string.min':'URL must have at least 5 characters',
        }),

        contacto:{
            nombre: joi.string().max(20).min(2).trim().pattern(new RegExp('[a-zA-Z]')).messages({
                'string.min':'You name must have at least 2 characters',
                'string.max':'You name cannot exceed 20 characters',
                'string.pattern': ''
            }),
            apellido: joi.string().max(20).min(2).trim().pattern(new RegExp('[a-zA-Z]')).messages({
                'string.min':'You name must have at least 2 characters',
                'string.max':'You name cannot exceed 20 characters',
                'string.pattern': ''
            }), 
            telefono:joi.string(),
            email: joi.string(),
            direccion: joi.string(),
            coordenadas:{
                latitud: joi.number(),
                longitud: joi.number(),
            }
        },


        feria:{
            nombre:joi.string(),
            ubicacionReal:joi.string(),
            coordenadas:{
                latitud: joi.number(),
                longitud: joi.number(),
            }
        },


        articulos_id : joi.array.items(Joi.objectId()),
        favoritos_id : joi.array.items(joi.objectId()),

    })

    const schemaArticulo = joi.object({ 
        nombreArticulo: joi.string().max(20).min(2).trim().pattern(new RegExp('[a-zA-Z]')).required().messages({
            'string.min':'You name must have at least 2 characters',
            'string.max':'You name cannot exceed 20 characters'
        }), 

        fechaCreacion: joi.date(),
        imagen: joi.array.items(joi.string()),
        descripcion: joi.string().max(150).trim(),
        categoria: joi.string().required(),
        condicion: joi.string().required(),
        precio: joi.string().required(),
        ubicacion:{
            latitud: joi.number(),
            longitud: joi.number()
        },
        estado: joi.string().required(),
        valoracion: joi.number(),

        contacto:{
            nombre: joi.string().max(20).min(2).trim().pattern(new RegExp('[a-zA-Z]')).messages({
                'string.min':'You name must have at least 2 characters',
                'string.max':'You name cannot exceed 20 characters',
                'string.pattern': ''
            }),
            apellido: joi.string().max(20).min(2).trim().pattern(new RegExp('[a-zA-Z]')).messages({
                'string.min':'You name must have at least 2 characters',
                'string.max':'You name cannot exceed 20 characters',
                'string.pattern': ''
            }), 
            telefono:joi.string(),
            email: joi.string(),
            direccion: joi.string(),
            coordenadas:{
                latitud: joi.number(),
                longitud: joi.number(),
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