import { pool } from "../config/database.js";

const createTrip = async (req, res) => {
    const insertQuery = `
        INSERT INTO trips (title, description, img_url, num_days, start_date, end_date, total_cost) VALUES ($1, $2, $3, $4, $5, $6, $7) \
        RETURNING *;
    `;
    try {
        const { title, description, img_url, num_days, start_date, end_date, total_cost } = req.body
        const results = await pool.query(insertQuery, [title, description, img_url, num_days, start_date, end_date, total_cost]);
        res.status(201).json(results.rows[0]);
    } catch (err) {
        res.status(409).json( { error: err.message } );
    }
}

const getTrips = async (req, res) => {
    const getQuery = `SELECT * FROM trips ORDER BY id ASC;`
    try {
        const results = await pool.query(getQuery);
        res.status(201).json(results.rows);
    } catch (err) {
        res.status(409).json( { error: err.message } );
    }
}

const getTripById = async (req, res) => {
    const getTripQuery = `SELECT * FROM trips WHERE id=$1;`;
    try {
        const tripId = parseInt(req.params.id);
        const results = await pool.query(getTripQuery, [tripId]);
        res.status(201).json(results.rows[0]);
    } catch (err) {
        res.status(409).json( { error: err.message } );
    }
}

const updateTrip = async (req, res) => {
    const updateQuery = 'UPDATE trips SET title = $1, description = $2, img_url = $3, num_days = $4, start_date = $5, end_date = $6, total_cost= $7 WHERE id = $8'
    try {
        const tripId = parseInt(req.params.id);
        const { title, description, img_url, num_days, start_date, end_date, total_cost } = req.body
        const results = await pool.query(updateQuery, [title, description, img_url, num_days, start_date, end_date, total_cost, tripId]);
        res.status(201).json(results.rows[0]);
    } catch (err) {
        res.status(409).json( { error: err.message } )
    }
}

const deleteTrip = async (req, res) => {
    const deleteQuery = 'DELETE FROM activities where trip_id = $1; DELETE FROM trips where id = $1;'
    try {
        const tripId = req.params.id;
        const results = await pool.query(deleteQuery, [tripId]);
        res.status(201).json(results.rows[0]);
    } catch (err) {
        res.status(409).json( { error: err.message } )
    }
}

export default {
    createTrip,
    getTrips,
    getTripById,
    updateTrip,
    deleteTrip
}