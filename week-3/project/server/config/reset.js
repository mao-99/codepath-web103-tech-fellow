import { pool } from "./database.js";
import eventData from '../data/events.js'
import locationData from '../data/locations.js'


const createLocationsTable = async () => {
    const createTableQuery = `
        DROP TABLE IF EXISTS locations CASCADE;

        CREATE TABLE IF NOT EXISTS locations (
            id SERIAL PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            image VARCHAR(255),
            city VARCHAR(255),
            state VARCHAR(255),
            zip VARCHAR(255)
        )
    `
    try {
        const res = await pool.query(createTableQuery)
        console.log('✅ Locations table created successfully')
    } catch (err) {
        console.error('❌ Error creating locations table: ', err)
    }
}

const createEventsTable = async () => {
    const createTableQuery = `
        DROP TABLE IF EXISTS events;

        CREATE TABLE IF NOT EXISTS events (
            id SERIAL PRIMARY KEY,
            title VARCHAR(255) NOT NULL,
            date DATE NOT NULL,
            time TIME NOT NULL,
            location_id INTEGER REFERENCES locations(id),
            image VARCHAR(255) NOT NULL
        )
    `
    try {
        const res = await pool.query(createTableQuery)
        console.log('✅ Events table created successfully')
    } catch (err) {
        console.error('❌ Error creating events table: ', err)
    }
}

const seedLocationsTable = async () => {
    await createLocationsTable();

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

const seedEventsTable = async () => {
    await createEventsTable();

    for (const event of eventData) {
        const insertQuery = {
            text: 'INSERT INTO events (title, date, time, location_id, image) VALUES ($1, $2, $3, $4, $5)'
        }
        const values = [
            event.title,
            event.date,
            event.time,
            event.location_id,
            event.image
        ]

        try {
            await pool.query(insertQuery, values)
            console.log(`✅ ${event.title} successfully inserted`)
        } catch (err) {
            console.error(`❌ Error inserting event: ${event.title}`, err)
        }
    }
}

const seedAllTables = async () => {
    await seedLocationsTable();
    await seedEventsTable();
    console.log('🎉 Database seeding complete!')
    process.exit(0)
}


// Run the seeding
seedAllTables();