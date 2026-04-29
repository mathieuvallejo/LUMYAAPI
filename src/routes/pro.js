import { Router } from 'express';
import { verifyPro, upgradeToPro } from '../controllers/pro.js';
import { authByToken } from '../middleware/auth.js';

const router = Router();

router.post('/verify', verifyPro);
router.put('/upgrade/:id', authByToken, upgradeToPro);

export default router;