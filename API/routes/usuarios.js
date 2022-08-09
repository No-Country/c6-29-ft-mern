const router = require("express").Router();
const usersController = require('../controllers/usersController')


router.get('/',usersController.get);
router.get('/articulosuser',usersController.articulosuser);//trae los articulos que publico el usuario 
router.get('/:id',usersController.getOne);
router.post('/',usersController.create);
router.put('/:id',usersController.update);
router.delete('/:id',usersController.delete);

module.exports= router;


