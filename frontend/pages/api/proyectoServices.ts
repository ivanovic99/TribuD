import { ProyectoInfoProps, TareaProps } from "@/components/types";
import axios from "axios";
import formatearFecha from '@/components/formatearFecha'

const BASE_URL = 'https://proyectos-psa-sq13.onrender.com'; // La URL del servidor backend;
// const BASE_URL = 'http://localhost:8090'; // La URL del servidor backend;


const headers = {
    'Method': 'POST',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*', // Configura el origen permitido para las solicitudes (puede ser '*' para permitir cualquier origen)
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE', // Configura los métodos HTTP permitidos
};

// Obtener todos los proyectos
export const getProyectos = async (setProyectos: React.Dispatch<React.SetStateAction<any[]>>) => {
    await axios.get(`${BASE_URL}/proyecto/listar`, { headers })
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
            console.log(response.data.tareas)
            return true
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

    await axios.post(`${BASE_URL}/proyecto`, JSON.stringify(proyecto), { headers })
        .then(response => response.data)
        .catch(error => {
            throw error;
        })
}


export const createTarea = async (tarea: TareaProps) => {
    await axios.post(`${BASE_URL}/tarea`, tarea)
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

export const getTareas = async (id: string, setTareas: React.Dispatch<React.SetStateAction<any>>) => {
    await axios.get(`${BASE_URL}/proyecto/${id}/listarTareas`)
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


export const putFinalizarTarea = async (id: number, horasReales: number, esfuerzoReal: number) => {
    await axios.put(`${BASE_URL}/finalizarTarea/${id}/${horasReales}/${esfuerzoReal}`)
        .then(response => response.data)
        .catch(error => {
            throw error
        })
}


export const getRecursos = async (setRecursos: React.Dispatch<React.SetStateAction<any[]>>) => {
    // await axios.get(`${BASE_URL}/tarea/obtenerRecursos`)
    //     .then(response => {
    //         setRecursos(response.data)
    //     }).catch(error => {
    //         throw error;
    //     })

    await axios.get('https://anypoint.mulesoft.com/mocking/api/v1/sources/exchange/assets/754f50e8-20d8-4223-bbdc-56d50131d0ae/recursos-psa/1.0.1/m/api/recursos')
        .then(response => {
            console.log(response.data)
            setRecursos(response.data)
        }).catch(error => {
            throw error;
        })

}