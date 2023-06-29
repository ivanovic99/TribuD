import { ProyectoInfoProps, TareaProps } from "@/components/types";
import axios from "axios";

const BASE_URL = 'https://proyectos-psa-sq13.onrender.com'; // La URL del servidor backend;
const headers = {
    'Method': 'POST',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*', // Configura el origen permitido para las solicitudes (puede ser '*' para permitir cualquier origen)
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE', // Configura los métodos HTTP permitidos
};





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
    // await axios.post(`${BASE_URL}/proyecto`, proyecto, { headers })
    //     .then(response => response.data)
    //     .catch(error => {
    //         throw error;
    //     })


    // await fetch(`${BASE_URL}/proyecto`, { headers })



    let url = `${BASE_URL}/proyecto`;
    try {
        let headers = { 'Content-Type': 'application/json' }
        let method = 'POST';
        let body = JSON.stringify(proyecto)
        const resp = await fetch(url, { headers, body, method });
        const data = await resp.json()
        return data;
    } catch (error) {
        console.log(error);
        return null;
    }

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


export const putFinalizarTarea = async (id: number, horasReales: number, esfuerzoReal: number) => {
    await axios.put(`${BASE_URL}/finalizarTarea/${id}/${horasReales}/${esfuerzoReal}`)
        .then(response => response.data)
        .catch(error => {
            throw error
        })
}



export const getRecursos = async (setRecursos: React.Dispatch<React.SetStateAction<any[]>>) => {
    await axios.get(`${BASE_URL}/tarea/obtenerRecursos`)
        .then(response => {
            console.log(response.data)
            setRecursos(response.data)
        }
        )
        .catch(error => {
            throw error;
        })
}