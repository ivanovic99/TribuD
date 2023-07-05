import {useRouter} from "next/router";
import Card from './card';
import {Resource, ResourceTask} from "@/public/types";
import React, {useEffect, useState} from "react";
import {getHoursByResource, getResourceById} from "@/pages/api/resourcesServices";
import {getTarea} from "@/pages/api/proyectoServices";
import {TareaProps} from "@/components/types";
import {getProductById} from "@/pages/api/productsServices";
import {getTickets} from "@/pages/api/ticketsServices";

function ResourceDetail() {
    const router = useRouter();
    const { id } = router.query;
    const [loading, setLoading] = useState(true)
    const [resource, setResource] = useState<Resource>();
    const [hours, setHours] = useState<ResourceTask[]>();
    const [task, setTask] = useState<TareaProps>();
    const [tasks, setTasks] = useState<ResourceTask[]>()

    useEffect(() => {
        (async () => {
            if (typeof id !== 'undefined') {
                const resource = await getResourceById(router.query.id as string);
                setResource(resource)

                const hours = await getHoursByResource(resource.legajo);
                setHours(hours)

                const result: ResourceTask[] = await Promise.all(hours.map(async (item: ResourceTask) => {
                    const task = await getTarea(item.tarea as string, setTask);
                    item.tarea = task.nombre;
                    return item;
                }));

                setLoading(false)
                setTasks(result)
            }
        })()
    }, [router.query]);

    if (!resource || loading) {
        return <div>Cargando...</div>;
    }

    return (
        <div className="container mx-auto py-4">
            <h2 className="text-lg font-bold mb-2">Historial de tareas de {resource.nombre + ' ' + resource.apellido}</h2>
            {tasks && tasks.map((task: ResourceTask, index) => (
                <div key={`${index}-task-${task.legajo}`} className="my-4">
                    <Card task={task} />
                </div>
            ))}
        </div>
    );
}

export default ResourceDetail;

