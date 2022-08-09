const {Schema, model} = require('mongoose');

const ArticulosSchema = Schema({
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
    nombreArticulo: {type: String, required: true},
    fechaCreacion: {type: Date},
    imagen:{type: Array},
    descripcion:{type: String},
    categoria:{type:String},
    condicion:{
        type : String,
        default: 'USADO'
    },
    precio:{type:String},
    ubicacion:{
        latitud: {type: Number},
        longitud: {type: Number} },
    estado:{type:String},
    valoracion:{type:Number}
})

module.exports = model('Articulos', ArticulosSchema);