
const mongoose = require('mongoose');
const mongoosePaginate= require('mongoose-paginate-v2');
const dbConnection = async() => {
mongoose.connect(process.env.MONGODB_CNN,function(error){
    
    if(error){
        throw error;
    }else{
           console.log("Conectado con mongodb");
    }
});

   
}


module.exports ={
    
    dbConnection
}
