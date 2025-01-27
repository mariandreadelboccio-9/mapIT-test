import { mount } from '@vue/test-utils'
import { describe, it, expect, vi } from 'vitest'
import MotoMap from '../MotoMap.vue'

const setViewMock = vi.fn()
const addToMock = vi.fn()
const markerAddToMock = vi.fn()

vi.mock('leaflet', () => {
  return {
    __esModule: true,
    default: {
      map: vi.fn(() => ({
        setView: setViewMock,
      })),
      tileLayer: vi.fn(() => ({
        addTo: addToMock,
      })),
      marker: vi.fn(() => ({
        addTo: markerAddToMock,
      })),
    },
  }
})

describe('MotoMap', () => {
  it('renders the map container', () => {
    const wrapper = mount(MotoMap, {
      props: {
        latitud: 40.7128,
        longitud: -74.006,
      },
    })

    expect(wrapper.find('#map').exists()).toBe(true)
  })

  it('initializes Leaflet map with correct props', () => {
    mount(MotoMap, {
      props: {
        latitud: 40.7128,
        longitud: -74.006,
      },
    })

    // Method called properly
    expect(setViewMock).toHaveBeenCalledWith([40.7128, -74.006], 13)

    // TileLayer properly configured
    expect(addToMock).toHaveBeenCalled()

    // Marker properly added
    expect(markerAddToMock).toHaveBeenCalled()
  })
})
