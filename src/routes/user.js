const { Router } = require('express');
const usersCtrl = require('../controllers/user');

const router = Router();

router.get('/', usersCtrl.getAll);
router.get('/:id', usersCtrl.getOne);
router.post('/', usersCtrl.create);
router.put('/:id', usersCtrl.edit);
router.delete('/:id', usersCtrl.remove);

module.exports = router;
