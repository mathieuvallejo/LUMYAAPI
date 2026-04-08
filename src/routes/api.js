const { Router } = require('express');
const userRouter = require('./user');
const sessionRouter = require('./session');
const videoRouter =require('./video')

const router = Router();
router.use('/users', userRouter);
router.use('/session', sessionRouter);
router.use('/video',videoRouter)

module.exports = router;
