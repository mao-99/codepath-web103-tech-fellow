import { pool } from './database.js'
import { fileURLToPath } from 'url'
import path, { dirname } from 'path'
import fs from 'fs'

const currentPath = fileURLToPath(import.meta.url)
const tripsFile = fs.readFileSync(path.join(dirname(currentPath), '../config/data/data.json'))
const tripsData = JSON.parse(tripsFile)
const createTripsTable = async () => {
  const createTripsTableQuery = `
      DROP TABLE IF EXISTS trips;

      CREATE TABLE IF NOT EXISTS trips (
          id serial PRIMARY KEY,
          title varchar(100) NOT NULL,
          description varchar(500) NOT NULL,
          img_url text NOT NULL,
          num_days integer NOT NULL,
          start_date date NOT NULL,
          end_date date NOT NULL,
          total_cost money NOT NULL
      );
  `

  try {
    const res = await pool.query(createTripsTableQuery)
    console.log('🎉 trips table created successfully')
  }
  catch (err) {
    console.error('⚠️ error creating trips table', err)
  }
}

const seedTripsTable = async () => {
  await createTripsTable()

  tripsData.forEach((trip) => {
    const insertQuery = {
      text: 'INSERT INTO trips (title, description, img_url, num_days, start_date, end_date, total_cost) VALUES ($1, $2, $3, $4, $5, $6, $7)'
    }

    const values = [
      trip.title,
      trip.description,
      trip.img_url,
      trip.num_days,
      trip.start_date,
      trip.end_date,
      trip.total_cost
    ]

    pool.query(insertQuery, values, (err, res) => {
      if (err) {
        console.error('⚠️ error inserting trip', err)
        return
      }

      console.log(`✅ ${trip.title} added successfully`)
    })
  })
}

seedTripsTable()

const createDestinationsTable = async () => {
    const createDestinationsTableQuery = `
            CREATE TABLE IF NOT EXISTS destinations (
                id serial PRIMARY KEY,
                destination VARCHAR(100),
                description VARCHAR(500),
                city VARCHAR(100),
                country VARCHAR(100),
                img_url TEXT,
                flag_img_url TEXT
            );
    `
    try {
        const res = await pool.query(createDestinationsTableQuery);
        console.log('🎉 destinations table created successfully')
    } catch (err) {
        console.error('⚠️ error creating destinations table', err)
    }
}

const createActivitiesTable = async () => {
    const createActivitiesTableQuery = `
        CREATE TABLE IF NOT EXISTS activities (
        id serial PRIMARY KEY,
        trip_id INT NOT NULL,
        activity VARCHAR(100) NOT NULL,
        num_votes INT DEFAULT 0,
        FOREIGN KEY (trip_id) REFERENCES trips(id) ON DELETE CASCADE
        );
    `;
    try {
        const res = await pool.query(createActivitiesTableQuery);
        console.log('🎉 activities table created successfully')
    } catch (err) {
        console.error('⚠️ error creating activities table', err)
    }
}

const createTripsDestinationsTable = async () => {
    const createTableQuery = `
        CREATE TABLE IF NOT EXISTS trips_destinations (
            trip_id INT NOT NULL,
            destination_id INT NOT NULL,
            PRIMARY KEY (trip_id, destination_id),
            FOREIGN KEY (trip_id) REFERENCES trips(id) ON DELETE CASCADE,
            FOREIGN KEY (destination_id) REFERENCES destinations(id) ON DELETE CASCADE
        );
    `;
    try {
        const res = await pool.query(createTableQuery);
        console.log('🎉 trips_destinations table created successfully');
    } catch (err) {
        console.error('⚠️ error creating trips_destinations table', err)
    }
}

const createUsersTable = async () => {
    const createTableQuery = `
        CREATE TABLE IF NOT EXISTS users (
            id serial PRIMARY KEY,
            githubid INT NOT NULL,
            username VARCHAR(100) NOT NULL,
            avatarurl VARCHAR(500),
            accesstoken VARCHAR(500)
        );
    `;
    try {
        const res = await pool.query(createTableQuery);
        console.log('🎉 users table created successfully');
    } catch (err) {
        console.error('⚠️ error creating users table', err)
    }
}

const createTripsUsersTable = async () => {
    const createTableQuery = `
        CREATE TABLE IF NOT EXISTS trips_users (
            trip_id INT NOT NULL,
            user_id INT NOT NULL,
            PRIMARY KEY (trip_id, user_id),
            FOREIGN KEY (trip_id) REFERENCES trips(id) ON DELETE CASCADE,
            FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
        );
    `;
    try {
        const res = await pool.query(createTableQuery);
        console.log('🎉 trips_users table created successfully');
    } catch (err) {
        console.error('⚠️ error creating trips_users table', err)
    }
}

createDestinationsTable();
createActivitiesTable();
createTripsDestinationsTable();
createUsersTable();
createTripsUsersTable();