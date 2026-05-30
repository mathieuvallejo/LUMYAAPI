import { Router } from 'express';
import * as themeCtrl from '../controllers/theme.js';
import * as middleware from '../middleware/auth.js';

const router = Router();

router.get('/', middleware.authByToken, themeCtrl.getAll);

export default router;
