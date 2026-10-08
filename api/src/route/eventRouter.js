import Router from 'express';
import {addEvent, updateEvent, getEvent, deleteEvent} from "../controler/eventController.js";

const router = Router();

router.post("/", addEvent);
router.patch("/", updateEvent);
router.get("/:id", getEvent);
router.delete("/:id", deleteEvent);

export default router;