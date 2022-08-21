const { date } = require('joi');
const {Schema, model, default: mongoose} = require('mongoose'); 
const mongoosePaginate = require('mongoose-paginate-v2');
const ArticulosSchema = Schema({
    usuario: {
        type:mongoose.Schema.ObjectId,
        ref:"Usuario"
    },
    nombreArticulo: {type: String, required: true},
    fechaCreacion: {type:Date, default:Date.now},
    imagen:{type: Array},
    descripcion:{type: String},
    categoria:{
        type:mongoose.Schema.ObjectId,
        ref:"Categoria"
    },
    condicion:{
        type : String,
        default: 'USADO'
    },
    precio:{type:Number,
            min:0,
            required:true},
    ubicacion:{
        latitud: {type: Number},
        longitud: {type: Number}},
    estado:{
        type:String,
        emun: ['ACTIVO', 'PAUSADO', 'FINALIZADO'],
        default: 'ACTIVO'},
    valoracion:{type:Number}
})
ArticulosSchema.plugin(mongoosePaginate)
ArticulosSchema.set('toJSON',{setters:true})
module.exports = model('Articulos', ArticulosSchema);