const API_BASE = 'http://localhost:3000/api/events'

const getAllEvents = async () => {
    try {
        const res = await fetch(`${API_BASE}`)
        if (!res.ok) throw new Error(`Failed to fetch events: ${res.status}`)
        return await res.json()
    } catch (err) {
        console.error('getAllEvents error:', err)
        throw err
    }
}

const getEventById = async (id) => {
    if (!id) throw new Error('getEventById requires an id')
    try {
        const res = await fetch(`${API_BASE}/${encodeURIComponent(id)}`)
        if (res.status === 404) return null
        if (!res.ok) throw new Error(`Failed to fetch event ${id}: ${res.status}`)
        return await res.json()
    } catch (err) {
        console.error('getEventById error:', err)
        throw err
    }
}

export default {
    getAllEvents,
    getEventById
}