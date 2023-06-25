import React from 'react';
import {ResourceTask} from "@/public/types";

type ResourceTaskProps = {
    task: ResourceTask;
}

const Card = ({ task }: ResourceTaskProps) => {
    if (!task) {
        return <div>Loading...</div>;
    }

    return (
        <div className="bg-white rounded shadow p-4">
            <h2 className="text-lg font-bold mb-2">{task.resource}</h2>
            <p className="text-gray-600 mb-2">Tarea: {task.name}</p>
            <p className="text-gray-600 mb-2">Horas trabajadas: {task.hours}</p>
            <p className="text-gray-600">Fecha: {task.date}</p>
        </div>
    );
};

export default Card;