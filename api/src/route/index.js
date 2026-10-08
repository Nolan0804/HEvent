import {Router} from 'express';
import {default as eventRouter} from "./eventRouter.js";
const router = Router();

router.use("/event", eventRouter);

export default router;