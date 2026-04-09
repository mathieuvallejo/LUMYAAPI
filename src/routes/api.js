import { Router } from 'express';
import userRouter from './user.js';
import sessionRouter from './session.js';
import videoRouter from './video.js';
import commentaireRouter from './commentaire.js';
import likeRouter from './likes.js';
import docRouter from './doc.js';

const router = Router();


router.use('/users', userRouter);
router.use('/session', sessionRouter);
router.use('/video', videoRouter);
router.use('/commentaire', commentaireRouter);
router.use('/likes', likeRouter);
 router.use('/doc', docRouter);

export default router;