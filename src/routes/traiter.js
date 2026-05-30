import { Router } from 'express';
import * as traiterCtrl from '../controllers/traiter.js';
import * as middleware from '../middleware/auth.js';

const router = Router();

router.get('/video/:idVideo', middleware.authByToken, traiterCtrl.getByVideo);
router.post('/', middleware.authByToken, traiterCtrl.create);
router.delete('/:idTheme/:idVideo', middleware.authByToken, traiterCtrl.remove);

export default router;
