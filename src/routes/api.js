const { Router } = require('express');
const userRouter = require('./user');
const sessionRouter = require('./session');
const videoRouter=require('./video');
const docRouter = require('./doc');

const router = Router();
router.use('/users', userRouter);
router.use('/session', sessionRouter);
router.use('/doc', docRouter);
router.use('/video',videoRouter)
router.use('/commentaire',commentaireRouteur)
//test


module.exports = router;
