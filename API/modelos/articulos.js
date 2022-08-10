const {Schema, model} = require('mongoose'); 
const mongoosePaginate = require('mongoose-paginate-v2');
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
    precio:{type:String, default:0},
    ubicacion:{
        latitud: {type: Number},
        longitud: {type: Number}},
    estado:{
        type:String,
        emun: ['ACTIVO', 'PAUSADO', 'FINALIZADO'],
        default: 'ACTIVO'},
    valoracion:{type:Number, default: 0}
})
ArticulosSchema.plugin(mongoosePaginate)
module.exports = model('Articulos', ArticulosSchema);