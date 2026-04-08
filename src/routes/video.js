<<<<<<< HEAD
<<<<<<< HEAD
import { Router } from 'express';
import * as videosCtrl from '../controllers/video.js';
import * as middleware from '../middleware/auth.js';

const router = Router();

router.get('/',middleware.authByToken, videosCtrl.getAll);
router.get('/:id',middleware.authByToken, videosCtrl.getOne);
router.get('/user/:idUser',middleware.authByToken, videosCtrl.getByUser);
router.post('/',middleware.authByToken, videosCtrl.create);
router.put('/:id',middleware.authByToken, videosCtrl.edit);
router.delete('/:id',middleware.authByToken, videosCtrl.remove);
router.patch('/:id/views',middleware.authByToken, videosCtrl.addView);

export default router;
=======
=======
>>>>>>> e726143 (add video (controller,models,routes))
const { Router } = require('express');
const videosCtrl = require('../controllers/video');

const router = Router();

<<<<<<< HEAD
router.get('/',middleware.authByToken, videosCtrl.getAll);
router.get('/:id',middleware.authByToken, videosCtrl.getOne);
router.get('/user/:idUser',middleware.authByToken, videosCtrl.getByUser);
router.post('/',middleware.authByToken, videosCtrl.create);
router.put('/:id',middleware.authByToken, videosCtrl.edit);
router.delete('/:id',middleware.authByToken, videosCtrl.remove);
router.patch('/:id/views',middleware.authByToken, videosCtrl.addView);
=======
router.get('/', videosCtrl.getAll);
router.get('/:id', videosCtrl.getOne);
router.get('/user/:idUser', videosCtrl.getByUser);
router.post('/', videosCtrl.create);
router.put('/:id', videosCtrl.edit);
router.delete('/:id', videosCtrl.remove);
router.patch('/:id/views', videosCtrl.addView);
>>>>>>> e726143 (add video (controller,models,routes))

module.exports = router;