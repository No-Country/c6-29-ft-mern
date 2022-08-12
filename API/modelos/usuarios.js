const mongoose =require('mongoose');

const mongoosePaginate = require('mongoose-paginate-v2');

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
        emun: {
            values: ['ADMIN', 'USUARIO'],
            message: 'Usuario tiene que ser ADMIN o USER.'
        },
        default: 'USUARIO',
    },
    avatar: {type : String},
    contacto:{
        type:mongoose.Schema.ObjectId,
        ref:"Contacto"
    },
    articulos_id:  [{ObjectId}], 
    favoritos_id: [{ObjectId}],
    feria: {
        nombre:{type: String},
        ubicacionReal: {type: String},
        coordenadas: {
            latitud: {type: Number},
            longitud: {type: Number}, 
        }
    },
});

UsuarioSchema.plugin(mongoosePaginate)
module.exports = model('Usuario', UsuarioSchema);