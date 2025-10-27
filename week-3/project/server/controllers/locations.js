import { pool } from "../config/database.js";

const getLocations = async (req, res) => {
    try {
        const selectQuery = `
            SELECT * FROM locations ORDER BY id ASC;
        `;
        const results = await pool.query(selectQuery);
        res.status(200).json(results.rows);
    } catch(error) {
        res.status(409).json( { error: error.message } )
    }
}

const getLocationById = async (req, res) => {
    try {
        const selectQuery = `
            SELECT id, name, image, city, state, zip FROM locations where id = $1;
        `
        const locationId = parseInt(req.params.locationId);
        const results = await pool.query(selectQuery, [locationId]);
        res.status(200).json(results.rows[0]); 
    } catch (error) {
        res.status(409).json( { error: error.message} )
    }
}

export default {getLocationById, getLocations}