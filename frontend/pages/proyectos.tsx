import Modal from "@/components/modal";
import ModalCrearProyecto from "@/components/modalCrearProyecto";
import ModalFiltrarProyectos from "@/components/modalFiltrarProyectos"
import ProyectoGridRow from "@/components/proyectoGridRow";
import { ProyectoInfoProps } from "@/components/types";
import { useState } from "react";

const projectExamples: ProyectoInfoProps[] = [
    {
        "id": 1,
        "nombre": "Desarrollo de Sitio Web",
        "cliente": "ABC Company",
        "fechaInicio": new Date("2023-01-01"),
        "fechaEstimadaFinalizacion": new Date("2023-04-30"),
        "estado": "En progreso",
        "esfuerzoEstimado": 3, // Valor numérico para el esfuerzo estimado (Alto: 3)
        "esfuerzoReal": 2, // Valor numérico para el esfuerzo real (Medio: 2)
        "descripcion": "Desarrollo y diseño de un sitio web corporativo",
        "horasEstimadas": 120,
        "horasReales": 80,
        "lider": "Juan Pérez" // Nombre del líder del proyecto
    },
    {
        "id": 2,
        "nombre": "Implementación de Sistema de Gestión",
        "cliente": "XYZ Corporation",
        "fechaInicio": new Date("2023-03-15"),
        "fechaEstimadaFinalizacion": new Date("2023-09-30"),
        "estado": "No iniciado",
        "esfuerzoEstimado": 2, // Valor numérico para el esfuerzo estimado (Medio: 2)
        "esfuerzoReal": 1, // Valor numérico para el esfuerzo real (Bajo: 1)
        "descripcion": "Implementación de un sistema de gestión empresarial",
        "horasEstimadas": 200,
        "horasReales": 0,
        "lider": "María López" // Nombre del líder del proyecto
    },
    {
        "id": 3,
        "nombre": "Diseño de Identidad Corporativa",
        "cliente": "Acme Corporation",
        "fechaInicio": new Date("2023-05-01"),
        "fechaEstimadaFinalizacion": new Date("2023-06-30"),
        "estado": "Completado",
        "esfuerzoEstimado": 1, // Valor numérico para el esfuerzo estimado (Bajo: 1)
        "esfuerzoReal": 1, // Valor numérico para el esfuerzo real (Bajo: 1)
        "descripcion": "Diseño de logotipo, paleta de colores y elementos visuales de la marca",
        "horasEstimadas": 40,
        "horasReales": 40,
        "lider": "Pedro Gómez" // Nombre del líder del proyecto
    },
    {
        "id": 4,
        "nombre": "Desarrollo de Aplicación Móvil",
        "cliente": "PQR Solutions",
        "fechaInicio": new Date("2023-02-10"),
        "fechaEstimadaFinalizacion": new Date("2023-08-31"),
        "estado": "En progreso",
        "esfuerzoEstimado": 3, // Valor numérico para el esfuerzo estimado (Alto: 3)
        "esfuerzoReal": 3, // Valor numérico para el esfuerzo real (Alto: 3)
        "descripcion": "Desarrollo de una aplicación móvil multiplataforma",
        "horasEstimadas": 300,
        "horasReales": 240,
        "lider": "Ana Torres" // Nombre del líder del proyecto
    },
    {
        "id": 5,
        "nombre": "Consultoría en Optimización de Procesos",
        "cliente": "Alpha Industries",
        "fechaInicio": new Date("2023-07-01"),
        "fechaEstimadaFinalizacion": new Date("2023-10-31"),
        "estado": "En progreso",
        "esfuerzoEstimado": 2, // Valor numérico para el esfuerzo estimado (Medio: 2)
        "esfuerzoReal": 2, // Valor numérico para el esfuerzo real (Medio: 2)
        "descripcion": "Análisis y recomendaciones para optimizar los procesos internos de la empresa",
        "horasEstimadas": 80,
        "horasReales": 60,
        "lider": "Carlos Ramírez" // Nombre del líder del proyecto
    }
];


export default function TableProjets() {
    const [modalOpen, setmodalOpen] = useState(false);
    const [modalFiltrarOpen, setModalFiltrarOpen] = useState(false);

    const HeaderItem = ({ titulo }: { titulo: string }) => {
        return <th className="px-6 py-3 text-sm text-left text-gray-500 border-b border-gray-200 bg-gray-50">{titulo}</th>
    }

    const renderProjects = () => {

        let htmlReturn = []

        for (let proyecto of projectExamples) {
            console.log(proyecto)
            htmlReturn.push(<ProyectoGridRow key={proyecto.id} proyecto={proyecto} />)
        }

        return htmlReturn
    }

    const showModal = () => {
        if (modalOpen) {
            return <ModalCrearProyecto modalOpen={modalOpen} setModalOpen={setmodalOpen} list={[]} />
        }
        return <></>
    }

    const showModalFiltrar = () => {
        if (modalFiltrarOpen) {
            return <ModalFiltrarProyectos modalOpen={modalFiltrarOpen} setModalOpen={setModalFiltrarOpen} />
        }
        return <></>
    }


    return (
        <>
            <div className="container max-w-7xl mx-auto mt-8">
                <div className="mb-4 flex flex-row justify-between">
                    <h1 className="text-3xl font-bold decoration-gray-400">Lista de Proyectos</h1>
                    <div className="flex w-fit justify-between items-center space-x-2   ">
                        <button
                            type="button"
                            className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
                            onClick={() => setModalFiltrarOpen(true)}
                        >Filtrar</button>

                        <button
                            type="button"
                            className="text-white bg-gradient-to-r font-bold from-green-500 via-green-600 to-green-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 rounded-lg text-sm px-5 py-2.5 text-center"
                            onClick={() => { setmodalOpen(true) }}
                        >Crear Proyecto</button>

                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
                        <div className="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg">
                            <table className="min-w-full ">
                                <thead >
                                    <tr >
                                        <HeaderItem titulo={"Nombre del Proyecto"} />
                                        <HeaderItem titulo={"Cliente"} />
                                        <HeaderItem titulo={"Fecha de Inicio"} />
                                        <HeaderItem titulo={"Fecha de finalizacion estimada"} />
                                        <HeaderItem titulo={"Estado"} />
                                        <HeaderItem titulo={"Accion"} />
                                    </tr>
                                </thead>

                                <tbody>
                                    {renderProjects()}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            {showModal()}
            {showModalFiltrar()}
        </>
    )
}