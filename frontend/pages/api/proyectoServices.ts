import { CrearProyectoProps, CrearTareaProps, ProyectoInfoProps, Recurso, TareaProps } from "@/components/types";
import axios from "axios";
import formatearFecha from '@/components/formatearFecha'

const BASE_URL = 'https://proyectos-psa-sq13.onrender.com'; // La URL del servidor backend;
// const BASE_URL = 'http://localhost:8080'; // La URL del servidor backend;k


const headers = {
    'Method': 'POST',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*', // Configura el origen permitido para las solicitudes (puede ser '*' para permitir cualquier origen)
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE', // Configura los métodos HTTP permitidos
};

// Obtener todos los proyectos
export const getProyectos = async (setProyectos: React.Dispatch<React.SetStateAction<any[]>>) => {
    await axios.get(`${BASE_URL}/proyecto/listar`, {
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*', // Configura el origen permitido para las solicitudes (puede ser '*' para permitir cualquier origen)
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE', // Configura los métodos HTTP permitidos
        }
    })
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
            // console.log(response.data.tareas)
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

export const createProyecto = async (proyecto: CrearProyectoProps) => {
    await axios.post(`${BASE_URL}/proyecto`, JSON.stringify(proyecto), { headers })
        .then(response => response.data)
        .catch(error => {
            throw error;
        })
}


export const createTarea = async (tarea: CrearTareaProps) => {
    await axios.post(`${BASE_URL}/tarea`, tarea, { headers })
        .then(response => response.data)
        .then(data => {
            putAsignarTareaAProyecto(data.id, data.idProyecto)
            putAsignarRecursoATarea(tarea.id, tarea.recursos)
            return true;
        })
        .catch(error => {
            throw error;
        })
}

export const editTarea = async (id: number, tarea: TareaProps) => {

    let nuevaTarea: any = tarea
    nuevaTarea.recursos = tarea.recursos.map(recurso => JSON.stringify(recurso))

    await axios.put(`${BASE_URL}/tarea/${id}`, nuevaTarea)
        .then(response => response.data)
        .catch(error => {
            throw error;
        })
}

export const getTareas = async (id: string, setTareas: React.Dispatch<React.SetStateAction<any>>) => {
    await axios.get(`${BASE_URL}/proyecto/${id}/listarTareas`)
        .then(response => response.data as CrearTareaProps[])
        .then(tareas => {

            let tareasNuevas = tareas as CrearTareaProps[]

            for (let tarea of tareasNuevas) {
                tarea.recursos = tarea.recursos.map((recurso: string) => JSON.parse(recurso));
            }

            setTareas(tareasNuevas)
        })

        .catch(error => {
            throw error;
        })
}


export const getTarea = async (id: string, setTarea: React.Dispatch<React.SetStateAction<any>>) => {
    const response = await axios.get(`${BASE_URL}/tarea/${id}`)
        .then(response => response.data as CrearTareaProps)
        .then(tarea => {
            tarea.recursos = tarea.recursos.map((recurso: string) => JSON.parse(recurso));
            setTarea(tarea)
            return tarea
        })
        .catch(error => {
            throw error;
        })
    return response
}



export const deleteTarea = async (id: number) => {
    console.log(id)
    await axios.delete(`${BASE_URL}/tarea/${id}`)
        .then(response => response.data)
        .catch(error => {
            throw error;
        })
}


export const putFinalizarTarea = async (id: number, horasReales: number, esfuerzoReal: number) => {
    await axios.put(`${BASE_URL}/tarea/finalizarTarea/${id}/${horasReales}/${esfuerzoReal}`, {
        headers: {
            'Method': 'PUT',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*', // Configura el origen permitido para las solicitudes (puede ser '*' para permitir cualquier origen)
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE', // Configura los métodos HTTP permitidos
        }
    })
        .then(response => response.data)
        .catch(error => {
            throw error
        })

}


export const getRecursos = async (setRecursos: React.Dispatch<React.SetStateAction<any[]>>) => {
    // await axios.get('https://anypoint.mulesoft.com/mocking/api/v1/sources/exchange/assets/754f50e8-20d8-4223-bbdc-56d50131d0ae/recursos-psa/1.0.1/m/api/recursos')
    //     .then(response => {
    //         console.log(response.data)
    //         setRecursos(response.data)
    //     }).catch(error => {
    //         throw error;
    //     })

    await axios.get(`${BASE_URL}/proyecto/obtenerRecursos`)
        .then(response => {
            setRecursos(response.data)
        }).catch(error => {
            throw error;
        })

}

export const putAsignarTareaAProyecto = async (idTarea: number, idProyecto: number) => {
    await axios.put(`${BASE_URL}/proyecto/agregarTarea/${idProyecto}/${idTarea}`)
        .then(response => {
            console.log(response.data)
        }).catch(error => {
            throw error;
        })

}


export const putAsignarRecursoATarea = async (idTarea: number, recursos: string[]) => {
    await axios.put(`${BASE_URL}/tarea/asignarRecursos/${idTarea}`)
        .then(response => {
            console.log(response.data)
        }).catch(error => {
            throw error;
        })

}


