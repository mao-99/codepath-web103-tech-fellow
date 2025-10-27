import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Event from '../components/Event'
import LocationsAPI from '../services/LocationsAPI'
import EventsAPI from '../services/EventsAPI.jsx'
import '../css/LocationEvents.css'

const LocationEvents = () => {
    const { id } = useParams() // Get location ID from URL
    const [location, setLocation] = useState(null)
    const [events, setEvents] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchLocationAndEvents = async () => {
            try {
                setLoading(true)
                // Fetch events for this location
                const eventsData = await EventsAPI.getAllEvents()
                setEvents(eventsData)
            } catch (err) {
                console.error('Error fetching location data:', err)
                setError(err.message)
            } finally {
                setLoading(false)
            }
        }

        fetchLocationAndEvents()
    }, [])

    if (loading) return <div className="loading">Loading...</div>
    if (error) return <div className="error">Error: {error}</div>

    return (
        <div className='location-events'>
            <header>
                <h2>Events</h2>
            </header>

            <main>
                {
                    events && events.length > 0 ? events.map((event) =>
                        <Event
                            key={event.id}
                            id={event.id}
                            title={event.title}
                            date={event.date}
                            image={event.image}
                        />
                    ) : <h2><i className="fa-regular fa-calendar-xmark fa-shake"></i> {'No events scheduled at this location yet!'}</h2>
                }
            </main>
        </div>
    )
}

export default LocationEvents