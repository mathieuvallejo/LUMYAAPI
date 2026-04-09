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