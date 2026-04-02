const { Router } = require('express');
const userRouter = require('./user');
const sessionRouter = require('./session');

const router = Router();
router.use('/users', userRouter);
router.use('/session', sessionRouter);

module.exports = router;
