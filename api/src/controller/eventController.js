import {pool} from '../database/database.js';
import * as eventModel from '../model/eventModel.js';

export const getEvent = async (req, res)=> {
    try {
        const event = await eventModel.readEvent(pool, req.params);
        if (event) {
            res.json(event);
        } else {
            res.sendStatus(404);
        }
    } catch (err) {
        console.error(err);
        res.sendStatus(500);
    }
};
