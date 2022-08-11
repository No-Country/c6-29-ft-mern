const router = require("express").Router();
const categoriasController = require('../controllers/categoriasController')

router.post('/', categoriasController.create);
router.get('/categorias',categoriasController.getcategorias);

module.exports = router;