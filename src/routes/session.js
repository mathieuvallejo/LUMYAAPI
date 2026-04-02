const { Router } = require('express');
const middleware = require('../middleware/auth');
const sessionController = require('../controllers/session');

const router = Router();

router.get('/', middleware.authByToken, sessionController.getSession);
router.post('/', sessionController.createSession);

module.exports = router;
