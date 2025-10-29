import express from 'express';
import TripsController from '../controllers/trips.js'

const router = express.Router();

router.get('/', TripsController.getTrips);

router.get('/:id', TripsController.getTripById);

router.post('/', TripsController.createTrip)

router.put('/:id', TripsController.updateTrip);

router.delete('/:id', TripsController.deleteTrip);

export default router;