const {Schema, model} = require('mongoose'); 
const CategoriaSchema = Schema({
    contacto: {
        nombre: {type: String} 
    }
    })

    module.exports = model('Categoria', CategoriaSchema);