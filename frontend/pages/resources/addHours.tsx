import React, {FormEvent, useEffect, useState} from "react";
import {Resource} from "@/public/types";
import {addHours, getResources} from "@/pages/api/resourcesServices";
import {getProyectos} from "@/pages/api/proyectoServices";
import {ProyectoInfoProps, TareaProps} from "@/components/types";

const AddHours: React.FC = () => {
    const [hours, setHours] = useState('');
    const [date, setDate] = useState('');
    const [task, setTask] = useState('');
    const [resource, setResource] = useState('');
    const [project, setProject] = useState<ProyectoInfoProps>();
    const [resources, setResources] = useState<Resource[]>([]);
    const [projects, setProjects] = useState<ProyectoInfoProps[]>([]);

    useEffect(() => {
        getResources()
            .then((res) => {
                setResources(res)
            })
            .catch((error) => {
                console.log(error.message)
            });
    }, []);

    useEffect(() => {
        getProyectos(setProjects)
            .then((res) => {

            })
            .catch((error) => {

            });
    }, [projects]);

    const handleSubmit = async (e: FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const formatDate = (new Date(date)).toISOString().split('T')[0];
        const confirmAction = window.confirm('¿Estás seguro que deseas realizar la carga de horas al recurso?');
        if (confirmAction) {
            await addHours({
                legajo: resource,
                tarea: task,
                cantidadHoras: hours,
                fecha: formatDate
            });
        }
    }

    if (!projects || !resources) {
        return <div>Cargando...</div>;
    }

    if (projects.length === 0) {
        return <h2 className="text-lg font-bold mb-2">No hay proyectos disponibles para asignar horas a tareas</h2>;
    }

    return (
        <div className="container max-w-7xl mx-auto mt-8">
            <div className="mb-4">
                <h1 className="text-3xl font-bold decoration-gray-400">Recursos</h1>
            </div>
            <h2>Asignación de horas</h2>
            <form id="add-hours-form">
                <div className="form-group">
                    <label htmlFor="project">Proyecto:</label>
                    <select id="project" onChange={(e) => setProject(projects.find(o => o.id === parseInt(e.target.value)))}>
                        <option selected>Seleccione el proyecto</option>
                        {projects.map((item: ProyectoInfoProps) => (
                            <option value={`${item.id}`} key={`${item.id}-${item.nombre}`}>
                                {item.nombre}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="task">Tarea:</label>
                    <select id="task" onChange={(e) => setTask(e.target.value)}>
                        <option selected>Seleccione la tarea</option>
                        {project && project.tareas?.map((task: TareaProps) => (
                            <option value={`${task.id}`} key={`${task.id}-${task.nombre}`}>
                                {task.nombre}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="resource">Recurso:</label>
                    <select id="resource" onChange={(e) => setResource(e.target.value)}>
                        <option selected>Seleccione el recurso</option>
                        {resources.map((item: Resource) => (
                            <option value={`${item.legajo}`} key={`${item.legajo}`}>
                                {item.nombre} {item.apellido}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="date">
                        Fecha
                    </label>
                    <input
                        type="date"
                        name="date"
                        id="date"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Fecha"
                        onChange={(e) => setDate(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="hours">
                        Horas
                    </label>
                    <input
                        type="number"
                        name="hours"
                        id="hours"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Horas trabajadas"
                        onChange={(e) => setHours(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="btn-create mt-10" onClick={handleSubmit}>Cargar horas</button>
            </form>

            <style jsx>{`
              .product-form {
                max-width: 400px;
                margin: 0 auto;
              }
              h2 {
                color: #333;
                font-size: 24px;
                margin-bottom: 16px;
              }
              .form-group {
                margin-bottom: 16px;
              }
              label {
                display: block;
                margin-bottom: 8px;
                color: #555;
                font-size: 16px;
              }
              input[type='text'],
              textarea,
              select {
                width: 100%;
                padding: 8px;
                font-size: 16px;
                border: 1px solid #ccc;
                border-radius: 4px;
              }
              .btn-create {
                background-color: #007bff;
                color: #fff;
                border: none;
                border-radius: 4px;
                padding: 8px 16px;
                font-size: 16px;
                cursor: pointer;
              }
              .btn-create:hover {
                background-color: #0069d9;
              }
              .popup {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-color: rgba(0, 0, 0, 0.5);
                display: flex;
                align-items: center;
                justify-content: center;
              }
              .popup-content {
                background-color: #fff;
                padding: 16px;
                border-radius: 4px;
                text-align: center;
              }
              h3 {
                color: #333;
                font-size: 24px;
                margin-bottom: 16px;
              }
              .btn-close {
                background-color: #ccc;
                color: #333;
                border: none;
                border-radius: 4px;
                padding: 8px 16px;
                font-size: 16px;
                cursor: pointer;
              }
              .btn-close:hover {
                background-color: #bbb;
              }
            `}</style>
        </div>
    );
}

export default AddHours;