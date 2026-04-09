import { Router } from 'express';
import * as likesCtrl from '../controllers/likes.js';
import * as middleware from '../middleware/auth.js';

const router = Router();

router.get('/',middleware.authByToken, likesCtrl.getAll);
router.get('/video/:idVideo',middleware.authByToken, likesCtrl.getByVideo);
router.get('/user/:idUser',middleware.authByToken, likesCtrl.getByUser);
router.get('/commentaire/:idCommentaire',middleware.authByToken, likesCtrl.getByCommentaire);
router.get('/:id',middleware.authByToken, likesCtrl.getOne);
router.post('/', middleware.authByToken,likesCtrl.create);
router.delete('/video',middleware.authByToken, likesCtrl.unlikeVideo);
router.delete('/commentaire',middleware.authByToken, likesCtrl.unlikeCommentaire);
router.delete('/:id',middleware.authByToken, likesCtrl.remove);

export default router;