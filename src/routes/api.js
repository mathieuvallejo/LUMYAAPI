const { Router } = require('express');
const userRouter = require('./user');
const sessionRouter = require('./session');
const docRouter = require('./doc');

const router = Router();
router.use('/users', userRouter);
router.use('/session', sessionRouter);
router.use('/doc', docRouter);

module.exports = router;
