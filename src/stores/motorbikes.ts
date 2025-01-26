import { defineStore } from 'pinia'
import { getMotorbikes, getMotorbikeCity } from 'src/common/apiCalls'
import type { Motorbike } from 'src/common/types'
import { motorbikeTexts } from 'src/common/texts'

export const useMotorbikesStore = defineStore('motorbikes', {
  state: () => ({
    motorbikes: [] as Motorbike[],
    loading: false,
  }),

  getters: {
    getMotorbikeById: (state) => {
      return (id: string) => state.motorbikes.find((moto) => moto.id === id)
    },
  },

  actions: {
    async getMotorbikes() {
      this.loading = true
      try {
        const { data: response } = await getMotorbikes()
        this.motorbikes = response
      } catch (error) {
        console.error(error)
      } finally {
        this.loading = false
      }
    },
    async getCityFromCoordinates(lat: number, lon: number) {
      try {
        const response = await getMotorbikeCity(lat, lon)
        return response.data.results[0].address_components[2].long_name || 'Unknown location'
      } catch (error) {
        console.error(error)
        return 'Unknwon location'
      }
    },
    async enrichMotorbikesWithCities() {
      this.loading = true
      try {
        const citiesPromises = this.motorbikes.map(async (moto) => {
          const city = await this.getCityFromCoordinates(
            moto.coordenadas.latitud,
            moto.coordenadas.longitud,
          )
          return { ...moto, city }
        })

        this.motorbikes = await Promise.all(citiesPromises)
      } catch (error) {
        console.error(error)
      } finally {
        this.loading = false
      }
    },
    motorbikeExtraData() {
      this.motorbikes = this.motorbikes.map((moto) => {
        const purchaseDate = new Date(moto.fechaCompra)
        const currentDate = new Date()

        let yearsSincePurchase = currentDate.getFullYear() - purchaseDate.getFullYear()

        if (
          currentDate.getMonth() < purchaseDate.getMonth() ||
          (currentDate.getMonth() === purchaseDate.getMonth() &&
            currentDate.getDate() < purchaseDate.getDate())
        ) {
          yearsSincePurchase--
        }

        let currentPrice = moto.precioCompra
        for (let i = 0; i < yearsSincePurchase; i++) {
          currentPrice /= 2
        }

        currentPrice = parseFloat(currentPrice.toFixed(2))

        const text = motorbikeTexts.find((text) => text.id === moto.id)

        return { ...moto, currentPrice, text: text?.text }
      })
    },
  },
})
