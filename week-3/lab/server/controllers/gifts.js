import { pool } from "../config/database.js";

const getGifts = async (req, res) => {
    try {
        const getGiftsQuery = `SELECT * from gifts ORDER BY id ASC`;
        const results = await pool.query(getGiftsQuery);
        res.status(200).json(results.rows);
    } catch (error) {
        res.status(409).json( { error: error.message } )
    }

}

const getGiftById = async (req, res) => {
    try {
        const selectQuery = `
                SELECT name, pricePoint, audience, image, description, submittedBy, submittedOn from gifts where id = $1;
            `;
        const giftId = req.params.giftId;
        const results = await pool.query(selectQuery, [giftId]);
        res.status(200).json(results.rows[0]); 
    } catch (error) {
        res.status(409).json( { error: error.message} )
    }
}

export default {getGifts, getGiftById};