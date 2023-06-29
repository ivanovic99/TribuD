import React from 'react';
import {Resource, ResourceTask} from "@/public/types";

type ResourceTaskProps = {
    task: ResourceTask,
    resource: Resource
}

const Card = ({ task, resource }: ResourceTaskProps) => {

    if (!task || !resource) {
        return <div>No se encontraron resultados</div>;
    }

    return (
        <div className="bg-white rounded shadow p-4">
            <h2 className="text-lg font-bold mb-2">{resource.nombre + ' ' + resource.apellido}</h2>
            <p className="text-gray-600 mb-2">Tarea: {task.tarea}</p>
            <p className="text-gray-600 mb-2">Horas trabajadas: {task.cantidadHoras}</p>
            <p className="text-gray-600">Fecha: {task.fecha}</p>
        </div>
    );
};

export default Card;