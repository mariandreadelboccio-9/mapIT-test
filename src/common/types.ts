export interface Motorbike {
  id: string
  fechaCompra: string
  precioCompra: number
  modelo: string
  nombre: string
  coordenadas: {
    latitud: number
    longitud: number
  }
  city: string
}
