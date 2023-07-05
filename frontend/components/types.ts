import { Resource } from "@/public/types"

export interface ISidebarItem {
  href: string
  title: string
  children?: ISidebarItem[]
}

export interface ModalProps {
  modalOpen: boolean
  setModalOpen: (x: boolean) => void
  list: Resource[]
}

export interface ModalTareaProps {
  modalOpen: boolean
  setModalOpen: (x: boolean) => void
  tarea: TareaProps
}

export interface ProyectoInfoProps {
  id: number;
  nombre: string;
  cliente: string;
  descripcion: string;
  lider: string;
  fechaInicio: string;
  fechaFinalizacion: string;
  estado: string;
  horasEstimadas: number,
  esfuerzoEstimado: number,
  horasReales: number,
  esfuerzoReal: number,
  tareas: TareaProps[],
}

export interface CrearProyectoProps {
  id: number;
  nombre: string;
  // cliente: string;
  descripcion: string;
  lider: string;
  fechaInicio: string;
  fechaFinalizacion: string;
  estado: string;
  // horasEstimadas: number,
  // esfuerzoEstimado: number,
  // horasReales: number,
  // esfuerzoReal: number,
  tareas: TareaProps[],
  // recursos: string[]
}

export interface TareaProps {
  id: number;
  idProyecto: number;
  nombre: string;
  descripcion: string;
  estado: string;
  fechaInicio: string;
  fechaFinal: string;
  horasEstimadas: number,
  esfuerzoEstimado: number,
  horasReales: number,
  esfuerzoReal: number,
  recursos: Recurso[]
}

export interface CrearTareaProps {
  id: number;
  idProyecto: number;
  nombre: string;
  descripcion: string;
  estado: string;
  fechaInicio: string;
  fechaFinal: string;
  horasEstimadas: number,
  esfuerzoEstimado: number,
  horasReales: number,
  esfuerzoReal: number,
  recursos: string[]
}

export interface Recurso {
  legajo: number,
  nombre: string,
  apellido: string
}