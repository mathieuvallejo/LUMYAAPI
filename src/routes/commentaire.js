const { Router } = require('express');
const commentairesCtrl = require('../controllers/commentaire');

const router = Router();

router.get('/', commentairesCtrl.getAll);
router.get('/:id', commentairesCtrl.getOne);
router.get('/video/:idVideo', commentairesCtrl.getByVideo);
router.get('/user/:idUser', commentairesCtrl.getByUser);
router.post('/', commentairesCtrl.create);
router.put('/:id', commentairesCtrl.edit);
router.delete('/:id', commentairesCtrl.remove);

module.exports = router;