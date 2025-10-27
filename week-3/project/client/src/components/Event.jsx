import React, { useState, useEffect } from 'react'
import EventsAPI from '../services/EventsAPI'
import '../css/Event.css'

const Event = ({ id, title, date, image }) => {
    const [event, setEvent] = useState({ id, title, date, image })

    useEffect(() => {
        if (!id) return // Skip if no id provided
        
        const fetchEvent = async () => {
            try {
                const eventData = await EventsAPI.getEventById(id)
                if (eventData) {
                    setEvent(eventData)
                }
            } catch (error) {
                console.error('Error fetching event:', error)
            }
        }
        
        fetchEvent()
    }, [id])

    // Format the date for display
    const formatDate = (dateString) => {
        try {
            const eventDate = new Date(dateString)
            return eventDate.toLocaleDateString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            })
        } catch (error) {
            return dateString
        }
    }

    // Format the time for display
    const formatTime = (dateString) => {
        try {
            const eventDate = new Date(dateString)
            return eventDate.toLocaleTimeString('en-US', {
                hour: 'numeric',
                minute: '2-digit',
                hour12: true
            })
        } catch (error) {
            return ''
        }
    }

    // Calculate remaining time
    const getRemainingTime = (dateString) => {
        try {
            const eventDate = new Date(dateString)
            const now = new Date()
            const diff = eventDate - now
            
            if (diff < 0) {
                return 'Event has passed'
            }
            
            const days = Math.floor(diff / (1000 * 60 * 60 * 24))
            const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
            
            if (days > 0) {
                return `${days} day${days !== 1 ? 's' : ''} remaining`
            } else if (hours > 0) {
                return `${hours} hour${hours !== 1 ? 's' : ''} remaining`
            } else {
                return 'Starting soon!'
            }
        } catch (error) {
            return ''
        }
    }

    return (
        <article className='event-information'>
            <img src={event.image} alt={event.title} />

            <div className='event-information-overlay'>
                <div className='text'>
                    <h3>{event.title}</h3>
                    <p>
                        <i className="fa-regular fa-calendar fa-bounce"></i> 
                        {formatDate(event.date)}
                        <br /> 
                        {formatTime(event.date)}
                    </p>
                    <p id={`remaining-${event.id}`}>{getRemainingTime(event.date)}</p>
                </div>
            </div>
        </article>
    )
}

export default Event