const { Router } = require('express');
const userRouter = require('./user');
const sessionRouter = require('./session');
const videoRouter =require('./video')
const commentaireRouteur =require('/.commentaire')

const router = Router();
router.use('/users', userRouter);
router.use('/session', sessionRouter);
router.use('/video',videoRouter)
router.use('/commentaire',commentaireRouteur)

module.exports = router;
