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
  fechaInicio: Date;
  fechaFinalizacion: Date;
  estado: string;
  horasEstimadas: number,
  esfuerzoEstimado: number,
  horasReales: number,
  esfuerzoReal: number,
  tareas: TareaProps[]
}

export interface TareaProps {
  id: number;
  idProyecto: number;
  nombre: string;
  descripcion: string;
  estado: string;
  fechaInicio: Date;
  fechaFinal: Date;
  horasEstimadas: number,
  esfuerzoEstimado: number,
  horasReales: number,
  esfuerzoReal: number,
  recursosAsignados: Recurso[]
}

export interface Recurso {
  legajo: number,
  nombre: string,
  apellido: string
}