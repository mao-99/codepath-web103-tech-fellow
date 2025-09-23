import pool from "./database.js"
import workshopData from "../data/workshops.js"

const createWorkshopsTable = async () => {
    const createTableQuery = `
    DROP TABLE IF EXISTS workshops;

    CREATE TABLE IF NOT EXISTS workshops (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        related_concepts JSONB,
        leetcode_link TEXT NOT NULL,
        solution_sheet_link TEXT NOT NULL,
        video_link TEXT NOT NULL,
        difficulty TEXT NOT NULL,
        discord_server_link TEXT NOT NULL
        );
    `
    try {
        const res = await pool.query(createTableQuery)
        console.log("Workshops table created successfully")
    }
    catch (err) {
        console.error("Error creating table", err)
    }
}
const seedWorkshopsTable = async () => {
    await createWorkshopsTable();
    for (const workshop of workshopData) {
        const insertQuery = {
            text: 'INSERT INTO workshops (title, related_concepts, leetcode_link, solution_sheet_link, video_link, difficulty, discord_server_link) VALUES ($1, $2, $3, $4, $5, $6, $7)'
        }
        const values = [
            workshop.title,
            JSON.stringify(workshop.related_concepts),
            workshop.leetcode_link,
            workshop.solution_sheet_link,
            workshop.video_link,
            workshop.difficulty,
            workshop.discord_server_link,
        ]
        try {
            await pool.query(insertQuery, values)
            console.log(`${workshop.title} added successfully!`)
        } catch (err) {
            console.error('Error inserting workshop!', err)
        }
    }
}

seedWorkshopsTable();
