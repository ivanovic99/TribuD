import Tarea from "@/components/tareaGridRow"
import { ProyectoInfoProps, TareaProps } from "@/components/types"
import { useEffect, useState } from "react"
import ModalCrearTarea from "@/components/modalCrearTarea";
import ModalTarea from "@/components/modalTarea";
import ModalEliminarTarea from "@/components/modalEliminarTarea";
import { useRouter } from 'next/router';
import { getProyecto, getTareas } from "../api/proyectoServices";
import ModalProyecto from "@/components/modalProyecto";

export default function Project() {
    const router = useRouter();

    const [modalOpenProyecto, setModalOpenProyecto] = useState(false);
    const [modalOpenTarea, setModalOpenTarea] = useState(false);
    const [modalEliminarTarea, setModalEliminarTarea] = useState(false);
    const [modalInfoProyecto, setModalInfoProyecto] = useState(false);
    const [proyecto, setProyecto] = useState<ProyectoInfoProps>()
    const [tarea, setTarea] = useState<TareaProps>();
    const [tareas, setTareas] = useState<TareaProps[]>();

    useEffect(() => {
        if (router.asPath !== router.route) {
            const { id } = router.query

            getProyecto(id as string, setProyecto)
            getTareas(id as string, setTareas)
        }
    }, [router, modalOpenProyecto])


    const HeaderItem = ({ titulo }: { titulo: string }) => {
        return <th className="px-6 py-3 text-sm text-left text-gray-500 border-b border-gray-200 bg-gray-50">{titulo}</th>
    }

    const abrirModalTarea = (estado: boolean, tarea: TareaProps) => {
        setModalOpenTarea(true)
        setTarea(tarea)
    }

    const eliminarModalTarea = (estado: boolean, tarea: TareaProps) => {
        setModalEliminarTarea(true)
        setTarea(tarea)
    }

    const renderTareas = () => {
        return tareas?.map((tarea) => <Tarea key={tarea.id} tarea={tarea} abrirModalTarea={abrirModalTarea} eliminarModalTarea={eliminarModalTarea} />)
    }

    const showModalProyecto = () => {
        if (modalOpenProyecto) return <ModalCrearTarea modalOpen={modalOpenProyecto} setModalOpen={setModalOpenProyecto} idProyecto={proyecto?.id as number} />
        return <></>
    }

    const showModalTarea = () => {
        if (modalOpenTarea) return <ModalTarea modalOpen={modalOpenTarea} setModalOpen={setModalOpenTarea} tarea={tarea as TareaProps} />
        return <></>
    }

    const showModalEliminarTarea = () => {
        if (modalEliminarTarea) return <ModalEliminarTarea modalOpen={modalEliminarTarea} setModalOpen={setModalEliminarTarea} tarea={tarea as TareaProps} />
        return <></>
    }

    const showModalInfoProyecto = () => {
        if (modalInfoProyecto) return <ModalProyecto modalOpen={modalInfoProyecto} setModalOpen={setModalInfoProyecto} proyecto={proyecto as ProyectoInfoProps} />
        return <></>
    }

    return (

        <>
            <div className="container max-w-7xl mx-auto mt-8">
                <div className="mb-4 flex flex-row justify-between">
                    <div className="flex space-x-2">
                        <h1 className="text-3xl font-bold decoration-gray-400">{proyecto?.nombre}</h1>
                        <button
                            type="button"
                            className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                            onClick={() => setModalInfoProyecto(true)}
                        >
                            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9h2v5m-2 0h4M9.408 5.5h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                        </button>
                    </div>

                    <div className="flex w-fit justify-between items-center space-x-2">

                        <button onClick={() => getTareas(proyecto?.id.toString() as string, setTareas)} type="button" className="py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 1v5h-5M2 19v-5h5m10-4a8 8 0 0 1-14.947 3.97M1 10a8 8 0 0 1 14.947-3.97"/></svg>
                        </button>
                        <button
                            type="button"
                            className="text-white bg-gradient-to-r font-bold from-green-500 via-green-600 to-green-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 rounded-lg text-sm px-5 py-2.5 text-center"
                            onClick={() => { setModalOpenProyecto(true) }}
                        >Crear Tarea</button>

                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
                        <div className="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg">
                            <table className="min-w-full overflow-scroll max-h-5">
                                <thead>
                                    <tr>
                                        <HeaderItem titulo="ID" />
                                        <HeaderItem titulo="Nombre" />
                                        <HeaderItem titulo="Estado" />
                                        <HeaderItem titulo="Accion" />
                                    </tr>
                                </thead>

                                <tbody>

                                    {renderTareas()}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                {showModalProyecto()}
                {showModalTarea()}
                {showModalEliminarTarea()}
                {showModalInfoProyecto()}
            </div>
        </>
    )
}