import React, { useState, useEffect } from 'react'
import Event from '../components/Event.jsx'
import EventsAPI from '../services/EventsAPI.jsx'
import '../css/LocationEvents.css'
import LocationsAPI from '../services/LocationsAPI.jsx'

const Events = () => {
    const [events, setEvents] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [locations, setLocations] = useState([])
    const [locationNames, setLocationNames] = useState([])

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                setLoading(true)
                const eventsData = await EventsAPI.getAllEvents()
                const locationsData = await LocationsAPI.getAllLocations()
                setEvents(eventsData)
                setLocations(locationsData)
            } catch (err) {
                console.error('Error fetching events:', err)
                setError(err.message)
            } finally {
                setLoading(false)
            }
        }

        fetchEvents()
    }, [])

    useEffect(() => {
        if (locations.length === 0 || events.length === 0) return;
        
        const locationIds = locations.map(location => location.id);
        
        const filteredEvents = events.filter((e) => {
            return locationIds.includes(e.location_id);
        });

        setEvents(filteredEvents);
    }, [locations])

    if (loading) return <div className="loading">Loading...</div>
    if (error) return <div className="error">Error: {error}</div>

    return (
        <div className='location-events'>
            <header>
                <h2>All Events</h2>
            </header>
            <select>
                {
                    locations && locations.map((location) => {
                        return <option key={location.id} value={location.name}>{location.name}</option>
                    })
                }
            </select>


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
