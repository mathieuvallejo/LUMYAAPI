import { Router } from 'express';
import * as usersCtrl from '../controllers/user.js';
import * as middleware from '../middleware/auth.js';

const router = Router();

router.get('/',middleware.authByToken, usersCtrl.getAll);
router.get('/:id',middleware.authByToken, usersCtrl.getOne);
router.post('/', usersCtrl.create);
router.put('/:id',middleware.authByToken, usersCtrl.edit);
router.delete('/:id',middleware.authByToken, usersCtrl.remove);

export default router;
