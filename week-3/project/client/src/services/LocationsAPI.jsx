const API_BASE = '/api/locations'

const getAllLocations = async () => {
  try {
    const res = await fetch(API_BASE)
    if (!res.ok) throw new Error(`Failed to fetch locations: ${res.status}`)
    return await res.json()
  } catch (err) {
    console.error('getAllLocations error:', err)
    throw err
  }
}

const getLocationById = async (id) => {
  if (!id) throw new Error('getLocationById requires an id')
  try {
    const res = await fetch(`${API_BASE}/${encodeURIComponent(id)}`)
    if (res.status === 404) return null
    if (!res.ok) throw new Error(`Failed to fetch location ${id}: ${res.status}`)
    return await res.json()
  } catch (err) {
    console.error('getLocationById error:', err)
    throw err
  }
}

export default {
  getAllLocations,
  getLocationById
}