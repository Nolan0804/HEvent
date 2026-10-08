import Router from 'express';
import {getEvent} from "../controller/eventController.js";

const router = Router();

//router.post("/", addEvent);
//router.patch("/", updateEvent);
router.get("/:id", getEvent);
//router.delete("/:id", deleteEvent);

export default router;