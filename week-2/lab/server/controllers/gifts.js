import { pool } from "../config/database";

const getGifts = async (req, res) => {
    try {
        const getGiftsQuery = `SELECT * from gifts ORDER BY id ASC`;
        const results = await pool.query(getGiftsQuery);
        res.status(200).json(results.rows);
    } catch (error) {
        res.status(409).json( { error: error.message } )
    }

}

export default {getGifts};