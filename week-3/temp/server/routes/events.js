import express from 'express';
import eventController from '../controllers/events.js'

const router = express.Router()

router.get('/', eventController.getEvents)

router.get('/:eventId', eventController.getEventById)


export default router;