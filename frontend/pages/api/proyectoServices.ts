import axios from "axios";
import { Dispatch, SetStateAction } from "react";

const BASE_URL = 'http://localhost:8080'; // La URL del servidor backend

export const getProyectos = async (setProyectos: React.Dispatch<React.SetStateAction<any[]>>) => {
    await axios.get(`${BASE_URL}/proyecto/listar`)
        .then(response => {
            setProyectos(response.data)
        }).catch(error => {
            throw error;
        })
}

