import { Router } from 'express';
import * as humeurCtrl from '../controllers/humeur.js';
import * as middleware from '../middleware/auth.js';

const router = Router();

router.get('/', middleware.authByToken, humeurCtrl.getAll);
router.get('/user/:idUser', middleware.authByToken, humeurCtrl.getByUser);
router.get('/:id', middleware.authByToken, humeurCtrl.getOne);
router.post('/', middleware.authByToken, humeurCtrl.create);
router.put('/:id', middleware.authByToken, humeurCtrl.edit);
router.delete('/:id', middleware.authByToken, humeurCtrl.remove);

export default router;
