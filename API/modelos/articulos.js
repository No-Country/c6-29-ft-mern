const {Schema, model, default: mongoose} = require('mongoose'); 
const mongoosePaginate = require('mongoose-paginate-v2');
const ArticulosSchema = Schema({
    contacto: {
        type:mongoose.Schema.ObjectId,
        ref:"Contacto"
    },
    nombreArticulo: {type: String, required: true},
    fechaCreacion: {type: Date},
    imagen:{type: Array},
    descripcion:{type: String},
    categoria:{
        type:mongoose.Schema.ObjectId,
        ref:"Categoria"
    },
    contacto:{
        type:mongoose.Schema.ObjectId,
        ref:"Contacto"
    },
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