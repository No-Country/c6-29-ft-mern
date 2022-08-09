const router = require("express").Router();
const articulosController = require('../controllers/articulosController');


/* GET users listing. */
router.post('/', articulosController.create);
router.get('/buscarnombre',articulosController.getnombre);
router.get('/', articulosController.getAll);
router.post('/recientes', articulosController.getRecientes);//trae por fecha
router.get('/favoritos', articulosController.favoritos);//trae array de favoritos del usuario
router.get('/localizacion',articulosController.localizar);//trae por coordenadas ubi aprox
router.get('/:id',  articulosController.getById);
router.put('/:id', articulosController.update);
router.delete('/:id',  articulosController.delete);

module.exports = router;