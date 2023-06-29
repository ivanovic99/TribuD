export interface Resource {
  nombre: string
  apellido: string
  legajo: number
}

export interface ResourceTask {
  resource: string
  name: string
  hours: number
  date: string
}

export interface Cliente {
  id: string
  razon_social: string
  cuit: number
}

export interface Tickets {
  _id: string
  title: string
  description: string
  status: string
  createdAt: string
}

export interface Products {
  _id: string
  title: string
  description: string
  status: string
  createdAt: string
}
