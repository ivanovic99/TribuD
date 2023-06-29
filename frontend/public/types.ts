export interface Resource {
  Nombre: string
  Apellido: string
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
  "razon social": string
  CUIT: number
}

export interface Tickets {
  _id: string
  title: string
  description: string
  status: string
  createdAt: string
  product: string
  task: string
  client: string
  priority: string
  severity: string
  time_remaining: string
  resource: string
}

export interface Products {
  _id: string
  title: string
  description: string
  status: string
  createdAt: string
  version: String
}
