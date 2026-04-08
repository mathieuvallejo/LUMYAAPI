const { Router } = require('express');
const videosCtrl = require('../controllers/video');

const router = Router();

router.get('/', videosCtrl.getAll);
router.get('/:id', videosCtrl.getOne);
router.get('/user/:idUser', videosCtrl.getByUser);
router.post('/', videosCtrl.create);
router.put('/:id', videosCtrl.edit);
router.delete('/:id', videosCtrl.remove);
router.patch('/:id/views', videosCtrl.addView);

module.exports = router;