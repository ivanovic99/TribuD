import Tarea from "@/components/tareaGridRow"
import { ProyectoInfoProps, TareaProps } from "@/components/types"
import { useEffect, useState } from "react"
import ModalCrearTarea from "@/components/modalCrearTarea";
import ModalTarea from "@/components/modalTarea";
import ModalEliminarTarea from "@/components/modalEliminarTarea";
import { useRouter } from 'next/router';
import { getProyecto } from "../api/proyectoServices";
import ModalProyecto from "@/components/modalProyecto";

const availableTasks: TareaProps[] = [
    {
        id: 1,
        idProyecto: 1,
        nombre: "Crear el diseño de la página de inicio",
        descripcion: "Para crear el diseño de la página de inicio, debes utilizar herramientas de diseño gráfico y considerar los elementos clave, como la disposición de los elementos, la paleta de colores y el uso de imágenes relevantes.",
        estado: "no iniciada",
        fechaInicio: new Date(2023, 5, 1),
        fechaFinalizacion: new Date(2023, 5, 10),
        horasReales: 2,
        horasEstimadas: 2,
        esfuerzoReal: 5,
        esfuerzoEstimado: 5,
        recursosAsignados: [{
            "legajo": 1,
            "Nombre": "Mario",
            "Apellido": "Mendoza"
        }]
    },
    {
        id: 2,
        idProyecto: 1,
        nombre: "Implementar la funcionalidad de inicio de sesión",
        descripcion: "Para implementar la funcionalidad de inicio de sesión, debes utilizar un lenguaje de programación y un framework adecuados. Debes crear formularios de inicio de sesión, validar las credenciales del usuario y gestionar la sesión del usuario.",
        estado: "en progreso",
        fechaInicio: new Date(2023, 5, 3),
        fechaFinalizacion: new Date(2023, 5, 15),
        horasReales: 5,
        horasEstimadas: 5,
        esfuerzoReal: 5,
        esfuerzoEstimado: 5,
        recursosAsignados: [{ 'legajo': 1, 'Nombre': "Pepe", 'Apellido': 'Pepecito' }]

    },
    {
        id: 3,
        idProyecto: 1,
        nombre: "Agregar validaciones de entrada de datos",
        descripcion: "Para agregar validaciones de entrada de datos, debes utilizar técnicas de validación en el lenguaje de programación que estés utilizando. Verifica que los datos ingresados por el usuario cumplan con los requisitos establecidos y muestra mensajes de error adecuados en caso de incumplimiento.",
        estado: "completada",
        fechaInicio: new Date(2023, 5, 8),
        fechaFinalizacion: new Date(2023, 5, 12),
        horasReales: 5,
        horasEstimadas: 5,
        esfuerzoReal: 5,
        esfuerzoEstimado: 5,
        recursosAsignados: [{ 'legajo': 1, 'Nombre': "Pepe", 'Apellido': 'Pepecito' }]

    },
    {
        id: 4,
        idProyecto: 1,
        nombre: "Optimizar el rendimiento de la aplicación",
        descripcion: "Para optimizar el rendimiento de la aplicación, debes identificar y abordar los cuellos de botella en el código y en la infraestructura. Puedes utilizar técnicas como el caching, la compresión de recursos, la optimización de consultas a la base de datos, entre otros.",
        estado: "no iniciada",
        fechaInicio: new Date(2023, 5, 2),
        fechaFinalizacion: new Date(2023, 5, 9),
        horasReales: 5,
        horasEstimadas: 5,
        esfuerzoReal: 5,
        esfuerzoEstimado: 5,
        recursosAsignados: [{ 'legajo': 1, 'Nombre': "Pepe", 'Apellido': 'Pepecito' }]

    },
    {
        id: 5,
        idProyecto: 1,
        nombre: "Realizar pruebas de integración",
        descripcion: "Para realizar pruebas de integración, debes combinar diferentes componentes y módulos de la aplicación y verificar que funcionen correctamente juntos. Puedes utilizar frameworks de pruebas y crear casos de",
        estado: "en progreso",
        fechaInicio: new Date(2023, 5, 4),
        fechaFinalizacion: new Date(2023, 5, 14),
        horasReales: 5,
        horasEstimadas: 5,
        esfuerzoReal: 5,
        esfuerzoEstimado: 5,
        recursosAsignados: [{ 'legajo': 1, 'Nombre': "Pepe", 'Apellido': 'Pepecito' }]

    },
    {
        id: 6,
        idProyecto: 1,

        nombre: "Crear la estructura de base de datos",
        descripcion: "Para crear la estructura de base de datos, debes utilizar un sistema de gestión de bases de datos adecuado y diseñar las tablas y relaciones necesarias para almacenar los datos de la aplicación. Puedes utilizar lenguajes de consulta como SQL para crear y modificar la estructura de la base de datos.",
        estado: "completada",
        fechaInicio: new Date(2023, 5, 6),
        fechaFinalizacion: new Date(2023, 5, 11),
        horasReales: 5,
        horasEstimadas: 5,
        esfuerzoReal: 5,
        esfuerzoEstimado: 5,
        recursosAsignados: [{ 'legajo': 1, 'Nombre': "Pepe", 'Apellido': 'Pepecito' }]

    },
    {
        id: 7,
        idProyecto: 1,
        nombre: "Desarrollar la funcionalidad de búsqueda",
        descripcion: "Para desarrollar la funcionalidad de búsqueda, debes utilizar técnicas de búsqueda y filtrado en el lenguaje de programación que estés utilizando. Puedes implementar algoritmos de búsqueda eficientes y permitir a los usuarios buscar información relevante en la aplicación.",
        estado: "en progreso",
        fechaInicio: new Date(2023, 5, 5),
        fechaFinalizacion: new Date(2023, 5, 13),
        horasReales: 5,
        horasEstimadas: 5,
        esfuerzoReal: 5,
        esfuerzoEstimado: 5,
        recursosAsignados: [{ 'legajo': 1, 'Nombre': "Pepe", 'Apellido': 'Pepecito' }]
    }
]

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
        const { id } = router.query;

        if (id) {
            // getProyecto(id as string, setProyecto)
            // setTareas(proyecto?.tareas)
        }
        setTareas(availableTasks)

    }, [])


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

    const renderTareas = (tareas: TareaProps[]) => {
        // return availableTasks.map((tarea) => <Tarea key={tarea.id} tarea={tarea} abrirModalTarea={abrirModalTarea} eliminarModalTarea={eliminarModalTarea} />)

        if (tareas) {
            return tareas.map((tarea) => <Tarea key={tarea.id} tarea={tarea} abrirModalTarea={abrirModalTarea} eliminarModalTarea={eliminarModalTarea} />)
        }
        return (
            <tr>No hay tareas disponibles</tr>
        )
    }

    const showModalProyecto = () => {
        if (modalOpenProyecto) return <ModalCrearTarea modalOpen setModalOpen={setModalOpenProyecto} idProyecto={proyecto?.id as number} />
        return <></>
    }

    const showModalTarea = () => {
        if (modalOpenTarea) return <ModalTarea modalOpen setModalOpen={setModalOpenTarea} tarea={tarea as TareaProps} />
        return <></>
    }

    const showModalEliminarTarea = () => {
        if (modalEliminarTarea) return <ModalEliminarTarea modalOpen setModalOpen={setModalEliminarTarea} tarea={tarea as TareaProps} />
        return <></>
    }

    const showModalInfoProyecto = () => {
        if (modalInfoProyecto) return <ModalProyecto modalOpen setModalOpen={setModalInfoProyecto} proyecto={proyecto as ProyectoInfoProps} />
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
                                    {renderTareas(tareas as TareaProps[])}
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