import { Router } from 'express';
import * as prefererCtrl from '../controllers/preferer.js';
import * as middleware from '../middleware/auth.js';

const router = Router();

router.get('/user/:idUser',   middleware.authByToken, prefererCtrl.getByUser);
router.get('/theme/:idTheme', middleware.authByToken, prefererCtrl.getByTheme);
router.post('/',              middleware.authByToken, prefererCtrl.create);
router.delete('/:idUser/:idTheme', middleware.authByToken, prefererCtrl.remove);

export default router;
