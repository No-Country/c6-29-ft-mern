const mongoose =require('mongoose');

const mongoosePaginate = require('mongoose-paginate-v2');

const {Schema, model} = require('mongoose');

const ContactoSchema = Schema({
    nombre: {type: String, required: true},
    apellido: {type: String, required: true},
    telefono: {type: String, required: true},
    email: {type: String, required: true},
    direccion: {type: String, required: true},
    coordenadas: {
        latitud: {type: Number},
        longitud: {type: Number}, 
    },
});

ContactoSchema.plugin(mongoosePaginate)
module.exports = model('Contacto', ContactoSchema);