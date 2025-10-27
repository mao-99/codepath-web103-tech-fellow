import { pool } from "../config/database";

const getEvents = async (req, res) => {
    try {
        const selectQuery = `
            SELECT * FROM events ORDER BY id ASC;
        `;
        const results = await pool.query(selectQuery);
        res.status(200).json(results.rows);
    } catch(error) {
        res.status(409).json( { error: error.message } )
    }
}

const getEventById = async (req, res) => {
    try {
        const selectQuery = `
            SELECT id, name, title, date FROM events where id = $1;
        `
        const eventId = req.params.eventId;
        const results = await pool.query(selectQuery, [eventId]);
        res.status(200).json(results.rows[0]); 
    } catch (error) {
        res.status(409).json( { error: error.message} )
    }
}

export default {getEventById, getEvents}