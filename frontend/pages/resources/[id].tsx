import {useRouter} from "next/router";
import Card from './card';
import {ResourceTask} from "@/public/types";
import {useEffect, useState} from "react";
//import {getTasksForResourceId} from "@/pages/api/resourcesServices";

function ResourceDetail() {
    const router = useRouter();
    const { id } = router.query;
    const [tasks, setTasks] = useState([
        {
            resource: 'Mario Mendoza',
            name: 'Tarea 1',
            hours: 8,
            date: '2023-06-24',
        },
        {
            resource: 'Mario Mendoza',
            name: 'Tarea 2',
            hours: 6,
            date: '2023-06-23',
        }
    ])
    /*const [resource, setResource] = useState([
        {
            resource: 'Mario Mendoza',
        },
        {
            resource: 'Mario Mendoza',
        }
    ])*/

    /*useEffect(() => {
        getTasksForResourceId(id)
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                setTasks(data)
            })
            .catch((error) => {
                console.log(error.message)
            });
    }, [id]);*/

    return (
        <div className="container mx-auto py-4">
            {tasks.map((task: ResourceTask, index) => (
                <div key={`${index}-task-${task.resource}`} className="my-4">
                    <Card task={task} />
                </div>
            ))}
        </div>
    );
}


export default ResourceDetail;

