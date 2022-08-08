const mongoose =require('mongoose');
const {Schema, model} = require('mongoose');
var schema = mongoose.Schema,
    ObjectId = schema.ObjectId;
const UsuarioSchema = Schema({
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    emailValidado: {type: Boolean, default: false },
    google: {
        type : Boolean,
        default: false
    },
    rol: {
        type : String,
        required: true,
        emun: ['ADMIN', 'USUARIO'],
        default: 'USUARIO',
    },
    avatar: {type : String},
    contacto: {
        nombre: {type: String, required: true}, 
        apellido: {type: String, required: true}, 
        telefono: {type: String, required: true}, 
        email: {type: String, required: true}, 
        direccion: {type: String, required: true},
        coordenadas: {
            latitud: {type: Number},
            longitud: {type: Number}, 
        }
    },
    articulos_id:  [{ObjectId}], 
    favoritos_id: [{ObjectId}]
    feria: {
        nombre:{type: String},
        ubicacionReal: {type: String},
        coordenadas: {
            latitud: {type: Number},
            longitud: {type: Number}, 
        }
    },
});

module.exports = model('Usuario', UsuarioSchema);