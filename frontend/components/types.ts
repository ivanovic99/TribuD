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
  proyecto: {
    id: number;
    nombre: string;
    cliente: string;
    fechaInicio: string;
    fechaEstimadaFinalizacion: string;
    estado: string;
  }
}

export interface TareaProps {
  id: number;
  nombre: string;
  descripcion: string;
  estado: string;
  fechaInicio: Date;
  fechaFinalizacion: Date

}