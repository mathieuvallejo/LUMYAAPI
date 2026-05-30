import { Router } from "express";
import userRouter from "./user.js";
import sessionRouter from "./session.js";
import videoRouter from "./video.js";
import commentaireRouter from "./commentaire.js";
import likeRouter from "./likes.js";
import docRouter from "./doc.js";
import proRouter from "./pro.js";
import humeurRouter from "./humeur.js";
import prefererRouter from "./preferer.js";
import themeRouter from "./theme.js";
import traiterRouter from "./traiter.js";

const router = Router();

router.use("/users", userRouter);
router.use("/session", sessionRouter);
router.use("/video", videoRouter);
router.use("/commentaire", commentaireRouter);
router.use("/likes", likeRouter);
router.use("/doc", docRouter);
router.use("/pro", proRouter);
router.use("/humeur", humeurRouter);
router.use("/preferer", prefererRouter);
router.use("/themes", themeRouter);
router.use("/traiter", traiterRouter);

export default router;
