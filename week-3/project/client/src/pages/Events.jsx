import React, { useState, useEffect } from 'react'
import Event from '../components/Event'
import EventsAPI from '../services/EventsAPI.jsx'
import '../css/LocationEvents.css'

const Events = () => {
    const [events, setEvents] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                setLoading(true)
                const eventsData = await EventsAPI.getAllEvents()
                setEvents(eventsData)
            } catch (err) {
                console.error('Error fetching events:', err)
                setError(err.message)
            } finally {
                setLoading(false)
            }
        }

        fetchEvents()
    }, [])

    if (loading) return <div className="loading">Loading...</div>
    if (error) return <div className="error">Error: {error}</div>

    return (
        <div className='location-events'>
            <header>
                <h2>All Events</h2>
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
                    ) : <h2><i className="fa-regular fa-calendar-xmark fa-shake"></i> {'No events scheduled yet!'}</h2>
                }
            </main>
        </div>
    )
}

export default Events
