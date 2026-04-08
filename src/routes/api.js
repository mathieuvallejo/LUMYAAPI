import { Router } from 'express';
import userRouter from './user.js';
import sessionRouter from './session.js';
import videoRouter from './video.js';
import commentaireRouter from './commentaire.js';
import likeRouter from './likes.js';
const { Router } = require('express');
const userRouter = require('./user');
const sessionRouter = require('./session');
const videoRouter=require('./video');
const docRouter = require('./doc');

const router = Router();

router.use('/users', userRouter);
router.use('/session', sessionRouter);
router.use('/video', videoRouter);
router.use('/commentaire', commentaireRouter);
router.use('/likes', likeRouter);
router.use('/doc', docRouter);
router.use('/video',videoRouter)
router.use('/commentaire',commentaireRouteur)

export default router;