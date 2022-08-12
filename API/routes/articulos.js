const router = require("express").Router();
const articulosController = require('../controllers/articulosController');


/* GET users listing. */
router.post('/', articulosController.create);
router.get('/buscarnombre',articulosController.getnombre);
router.get('/', articulosController.getAll);
router.get('/recientes', articulosController.getRecientes);//trae por fecha
router.get('/categorias', articulosController.getCategorias);//trae por categoria
router.get('/favoritos', articulosController.favoritos);//trae array de favoritos del usuario
router.get('/localizacion',articulosController.localizar);//trae por coordenadas ubi aprox
router.get('/:id',  articulosController.getById);
router.put('/:id', articulosController.update);
router.delete('/:id',  articulosController.delete);

module.exports = router;