const router = require("express").Router();
const contactoController = require('../controllers/contactoController')


router.get('/',contactoController.get);
router.get('/:id',contactoController.getOne);

router.post('/',contactoController.create);
router.put('/:id',contactoController.update);
router.delete('/:id',contactoController.delete);

module.exports= router;
