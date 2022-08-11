const router = require("express").Router();
const categoriasController = require('../controllers/categoriasController')

router.post('/',categoriasController.createCategorias);
router.get('/',categoriasController.getCategorias);

module.exports = router;