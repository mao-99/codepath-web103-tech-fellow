import React, { useState, useEffect } from 'react'
import Event from '../components/Event'
import LocationsAPI from '../services/locationsAPI.jsx'
import EventsAPI from '../services/eventsAPI.jsx'
import '../css/LocationEvents.css'

const LocationEvents = ({index}) => {
    const [location, setLocation] = useState([])
    const [events, setEvents] = useState([])

    useEffect(() => {
        (async () => {
            try {
                const locationData = await LocationsAPI.getLocationById(index)
                setLocation(locationData)
            } catch (error) {
                console.error('Error fetching location:', error)
            }
        })()
    }, [index])

    useEffect(() => {
        (async () => {
            try {
                // Fetch all events and filter by location
                const allEvents = await EventsAPI.getAllEvents()
                const locationEvents = allEvents.filter(event => event.location_id === index)
                setEvents(locationEvents)
            } catch (error) {
                console.error('Error fetching events:', error)
            }
        })()
    }, [index])

    return (
        <div className='location-events'>
            <header>
                <div className='location-image'>
                    <img src={location.image} />
                </div>

                <div className='location-info'>
                    <h2>{location.name}</h2>
                    <p>{location.address}, {location.city}, {location.state} {location.zip}</p>
                </div>
            </header>

            <main>
                {
                    events && events.length > 0 ? events.map((event, index) =>
                        <Event
                            key={event.id}
                            id={event.id}
                            title={event.title}
                            date={event.date}
                            time={event.time}
                            image={event.image}
                        />
                    ) : <h2><i className="fa-regular fa-calendar-xmark fa-shake"></i> {'No events scheduled at this location yet!'}</h2>
                }
            </main>
        </div>
    )
}

export default LocationEvents