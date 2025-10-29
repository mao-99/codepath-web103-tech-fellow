import express from 'express';
import cors from 'cors';
import tripsRouter from './routes/trips.js';
import activityRouter from './routes/activities.js';
import destinationRouter from './routes/destinations.js';
import tripDestinationRouter from './routes/trips-destinations.js';

const app = express()

app.use(express.json())
app.use(cors())
app.use("/api/trips", tripsRouter)
app.use('/api/activities/', activityRouter)
app.use('/api/destinations/', destinationRouter)
app.use('/api/trips-destinations/', tripDestinationRouter)

app.get("", (req, res) => {
    res.status(200).send('<h1 style="text-align: center; margin-top: 50px;">✈️ On the Fly API</h1>');
})

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`)
})