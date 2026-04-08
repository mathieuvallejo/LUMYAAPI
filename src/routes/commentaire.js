<<<<<<< HEAD
import { Router } from 'express';
import * as commentairesCtrl from '../controllers/commentaire.js';
import * as middleware from '../middleware/auth.js';

const router = Router();

router.get('/',middleware.authByToken, commentairesCtrl.getAll);
router.get('/:id',middleware.authByToken, commentairesCtrl.getOne);
router.get('/video/:idVideo',middleware.authByToken, commentairesCtrl.getByVideo);
router.get('/user/:idUser',middleware.authByToken, commentairesCtrl.getByUser);
router.post('/',middleware.authByToken, commentairesCtrl.create);
router.put('/:id',middleware.authByToken, commentairesCtrl.edit);
router.delete('/:id',middleware.authByToken, commentairesCtrl.remove);

export default router;
=======
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
>>>>>>> 154a8d8 (commentaire(controllers,models,toutes))
