import { pool } from "./database.js";
import eventData from '../data/events.js'
import locationData from '../data/locations.js'


const createEventsTable = async () => {
    const createTableQuery = `
        DROP TABLE IF EXISTS events;

        CREATE TABLE IF NOT EXISTS events (
            id SERIAL PRIMARY KEY,
            title VARCHAR(255) NOT NULL,
            date TIMESTAMPTZ NOT NULL,
            image VARCHAR(255) NOT NULL,
            created_at TIMESTAMPTZ NOT NULL DEFAULT now()
        )
    `
    try {
        const res = await pool.query(createTableQuery)
        console.log('Events table created successfully')
    } catch (err) {
        console.error('Error creating events table: ', err)
    }
}

const seedEventsTable = async () => {
    // await createEventsTable();

    eventData.forEach((event) => {
        const insertQuery = {
            text: 'INSERT INTO events (title, date, image, time ) VALUES ($1, $2, $3, $4)'
        }
        const values = [
            event.title,
            event.date,
            event.image,
            event.time,
        ]

        pool.query(insertQuery, values, (err, res) => {
            if (err){
                console.error("Error inserting event: ", event.title)
                return
            }

            console.log(`${event.title} successfully inserted`)
        })
    })
}

const seedLocationsTable = async () => {
    // await createLocationsTable();

    for (const location of locationData) {
        const insertQuery = {
            text: 'INSERT INTO locations (name, image, city, state, zip) VALUES ($1, $2, $3, $4, $5)'
        }
        const values = [
            location.name,
            location.image,
            location.city,
            location.state,
            location.zip
        ]

        try {
            await pool.query(insertQuery, values)
            console.log(`✅ ${location.name} successfully inserted`)
        } catch (err) {
            console.error(`❌ Error inserting location: ${location.name}`, err)
        }
    }
}


const updateEventAndLocationTables =  async () => {
    const updateTablesQuery = 
        `
            DELETE FROM events;

            ALTER TABLE events
                ADD COLUMN time TIME,
                DROP COLUMN date,
                ADD COLUMN date DATE;
            
            DROP TABLE IF EXISTS locations;

            CREATE TABLE locations (
                id SERIAL PRIMARY KEY,
                image VARCHAR(255),
                name VARCHAR(255),
                city VARCHAR(255),
                state VARCHAR(255),
                zip VARCHAR(255)
            );

        `;
        try{
            const results = await pool.query(updateTablesQuery)
            console.log('Events table created successfully'); 
        } catch(error) {
            console.error("Error with update tables query: ", error);
        }
        

}

// updateEventAndLocationTables();
seedEventsTable();
seedLocationsTable();