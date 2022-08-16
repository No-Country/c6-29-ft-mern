const express = require('express')
require('dotenv').config()
const cors = require('cors')
const app = express()
const port = 3000
const { dbConnection } = require('./database/config');

var usersRouter = require('./routes/usuarios');
var articulosRouter =require('./routes/articulos');
var categoriasRouter =require('./routes/categorias');
var contactosRouter =require('./routes/contactos');
var authRouter =require('./routes/auth');

const database = async () => {
    await dbConnection();
}

database()

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use(cors());
app.use(express.json())
app.use('/usuarios', usersRouter);
app.use('/articulos',articulosRouter);
app.use('/categorias',categoriasRouter);
app.use('/contactos',contactosRouter);
app.use('/auth',authRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})