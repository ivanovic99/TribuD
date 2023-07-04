import {useRouter} from "next/router";
import Card from './card';
import {Resource, ResourceTask} from "@/public/types";
import React, {useEffect, useState} from "react";
import {getHoursByResource, getResourceById} from "@/pages/api/resourcesServices";
import {getTarea} from "@/pages/api/proyectoServices";
import {TareaProps} from "@/components/types";

function ResourceDetail() {
    const router = useRouter();
    const { id } = router.query;
    const [resource, setResource] = useState();
    const [task, setTask] = useState<TareaProps>();
    const [tasks, setTasks] = useState([])

    useEffect(() => {
        getResourceById(id as string)
            .then((res) => {
                setResource(res)
            })
            .catch((error) => {
                console.log(error.message)
            });

        getHoursByResource(id as string)
            .then((res) => {
                const result = res
                result.map(async (item: ResourceTask) => {
                    try{
                        await getTarea(item.tarea as string, setTask)

                        if(task){
                            item.tarea = task.nombre
                        }
                    }catch(error){

                    }
                })
                setTasks(result)
            })
            .catch((error) => {
                console.log(error.message)
            });
    }, [id]);

    if (!id || !tasks || !resource) {
        return <div>Cargando...</div>;
    }

    return (
        <div className="container mx-auto py-4">
            {tasks.map((task: ResourceTask, index) => (
                <div key={`${index}-task-${task.legajo}`} className="my-4">
                    <Card task={task} resource={resource} />
                </div>
            ))}
        </div>
    );
}

export default ResourceDetail;

