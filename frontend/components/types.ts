import { Usuario } from "@/public/types"

export interface ISidebarItem {
  href: string
  title: string
  children?: ISidebarItem[]
}

export interface ModalProps {
  modalOpen: boolean
  setModalOpen: (x: boolean) => void
  list: Usuario[]
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
  fechaEstimadaFinalizacion: Date;
  estado: string;
  horasEstimadas: number,
  esfuerzoEstimado: number,
  horasReales: number,
  esfuerzoReal: number,
}

export interface TareaProps {
  id: number;
  nombre: string;
  descripcion: string;
  estado: string;
  fechaInicio: Date;
  fechaFinalizacion: Date;
  horasEstimadas: number,
  esfuerzoEstimado: number,
  horasReales: number,
  esfuerzoReal: number,
}