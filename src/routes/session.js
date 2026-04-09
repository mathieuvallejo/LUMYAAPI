import { Router } from 'express';
import * as middleware from '../middleware/auth.js';
import * as sessionController from '../controllers/session.js';

const router = Router();

router.get('/', middleware.authByToken, sessionController.getSession);
router.post('/', sessionController.createSession);

export default router;
