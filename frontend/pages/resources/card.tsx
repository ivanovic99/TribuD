import React from 'react';
import {ResourceTask} from "@/public/types";

type ResourceTaskProps = {
    task: ResourceTask
}

const Card = ({ task }: ResourceTaskProps) => {

    if (!task) {
        return <div>No se encontraron resultados</div>;
    }

    return (
        <div className="bg-white rounded shadow p-4">
            <p className="text-gray-600 mb-2">Tarea: {task.tarea}</p>
            <p className="text-gray-600 mb-2">Horas trabajadas: {task.cantidadHoras}</p>
            <p className="text-gray-600">Fecha: {task.fecha}</p>
        </div>
    );
};

export default Card;