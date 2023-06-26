import Modal from "@/components/modal";
import ModalCrearProyecto from "@/components/modalCrearProyecto";
import ModalFiltrarProyectos from "@/components/modalFiltrarProyectos"
import ProyectoGridRow from "@/components/proyectoGridRow";
import { useState } from "react";

const projectExamples = [
    {
        "id": 1,
        "nombre": "Desarrollo de Sitio Web",
        "cliente": "ABC Company",
        "fechaInicio": "01-01-2023",
        "fechaEstimadaFinalizacion": "30-04-2023",
        "estado": "En progreso"
    },
    {
        "id": 2,
        "nombre": "Implementación de Sistema de Gestión",
        "cliente": "XYZ Corporation",
        "fechaInicio": "15-03-2023",
        "fechaEstimadaFinalizacion": "30-09-2023",
        "estado": "No iniciado"
    },
    {
        "id": 3,
        "nombre": "Diseño de Identidad Corporativa",
        "cliente": "Acme Corporation",
        "fechaInicio": "01-05-2023",
        "fechaEstimadaFinalizacion": "30-06-2023",
        "estado": "Completado"
    },
    {
        "id": 4,
        "nombre": "Desarrollo de Aplicación Móvil",
        "cliente": "PQR Solutions",
        "fechaInicio": "10-02-2023",
        "fechaEstimadaFinalizacion": "31-08-2023",
        "estado": "En progreso"
    },
    {
        "id": 5,
        "nombre": "Consultoría en Optimización de Procesos",
        "cliente": "Alpha Industries",
        "fechaInicio": "01-07-2023",
        "fechaEstimadaFinalizacion": "31-10-2023",
        "estado": "En progreso"
    }
]

export default function TableProjets() {
    const [modalOpen, setmodalOpen] = useState(false);
    const [modalFiltrarOpen, setModalFiltrarOpen] = useState(false);

    const HeaderItem = ({ titulo }: { titulo: string }) => {
        return <th className="px-6 py-3 text-sm text-left text-gray-500 border-b border-gray-200 bg-gray-50">{titulo}</th>
    }

    const renderProjects = () => {

        let htmlReturn = []

        for (let proyecto of projectExamples) {
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