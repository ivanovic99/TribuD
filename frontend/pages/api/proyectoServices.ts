import { ProyectoInfoProps, TareaProps } from "@/components/types";
import axios from "axios";
import { Dispatch, SetStateAction } from "react";

const BASE_URL = 'http://localhost:8080'; // La URL del servidor backend


// Obtener todos los proyectos
export const getProyectos = async (setProyectos: React.Dispatch<React.SetStateAction<any[]>>) => {
    await axios.get(`${BASE_URL}/proyecto/listar`)
        .then(response => {
            setProyectos(response.data)
        }).catch(error => {
            throw error;
        })
}


// Obtener un proyecto
export const getProyecto = async (id: string, setProyecto: React.Dispatch<React.SetStateAction<any>>) => {
    await axios.get(`${BASE_URL}/proyecto/${id}`)
        .then(response => {
            setProyecto(response.data)
        }).catch(error => {
            throw error;
        })
}

export const deleteProyecto = async (id: string, setProyecto: React.Dispatch<React.SetStateAction<any>>) => {
    await axios.delete(`${BASE_URL}/proyecto/${id}`)
        .then(response => {
            setProyecto(response.data)
        }).catch(error => {
            throw error;
        })
}

export const createProyecto = async (proyecto: ProyectoInfoProps) => {
    await axios.post(`${BASE_URL}/proyecto`, proyecto)
        .then(response => response.data)
        .catch(error => {
            throw error;
        })
}


export const createTarea = async (tarea: TareaProps) => {
    await axios.put(`${BASE_URL}/tarea`, tarea)
        .then(response => response.data)
        .catch(error => {
            throw error;
        })
}


export const editTarea = async (id: number, tarea: TareaProps) => {
    await axios.put(`${BASE_URL}/tarea/${id}`, tarea)
        .then(response => response.data)
        .catch(error => {
            throw error;
        })
}

export const getTareas = async (id: number, setTareas: React.Dispatch<React.SetStateAction<any>>) => {
    await axios.get(`${BASE_URL}/tarea/listar`)
        .then(response => {
            setTareas(response.data)
        }).catch(error => {
            throw error;
        })
}


export const getTarea = async (id: string, setTarea: React.Dispatch<React.SetStateAction<any>>) => {
    await axios.get(`${BASE_URL}/tarea/${id}`)
        .then(response => {
            setTarea(response.data)
        }).catch(error => {
            throw error;
        })
}



export const deleteTarea = async (id: number) => {
    await axios.delete(`${BASE_URL}/tarea/${id}`)
        .then(response => response.data)
        .catch(error => {
            throw error;
        })
}



export const getRecursos = async (setRecursos: React.Dispatch<React.SetStateAction<any[]>>) => {
    await axios.get(`${BASE_URL}/tarea/obtenerRecursos`)
        .then(response => setRecursos(response.data))
        .catch(error => {
            throw error;
        })
}