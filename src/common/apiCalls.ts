import axios from 'axios'

export const getMotorbikes = async () => {
  return await axios.get('https://fake.prod.mapit.me/motos')
}

export const getMotorbikeCity = async (lat: number, lon: number) => {
  return await axios.get(
    `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lon}&key=AIzaSyAmCJlAoRsFzRm22e3ZHzdpDnQrVtQrIgE`,
  )
}
