import Tarea from "@/components/tareaGridRow"
import { TareaProps } from "@/components/types"
import { useState } from "react"
import ModalCrearTarea from "@/components/modalCrearTarea";
import ModalTarea from "@/components/modalTarea";

export default function Project() {

    const tareaNull: TareaProps = {
        id: 0,
        nombre: "",
        descripcion: '',
        estado: "",
        fechaFinalizacion: new Date(1, 1, 2000),
        fechaInicio: new Date(1, 1, 2000),
    }

    const [modalOpenProyecto, setModalOpenProyecto] = useState(false);
    const [modalOpenTarea, setModalOpenTarea] = useState(false);
    const [tarea, setTarea] = useState(tareaNull);

    const HeaderItem = ({ titulo }: { titulo: string }) => {
        return <th className="px-6 py-3 text-sm text-left text-gray-500 border-b border-gray-200 bg-gray-50">{titulo}</th>
    }

    const availableTasks = [
        {
            id: 1,
            nombre: "Crear el diseño de la página de inicio",
            descripcion: "Para crear el diseño de la página de inicio, debes utilizar herramientas de diseño gráfico y considerar los elementos clave, como la disposición de los elementos, la paleta de colores y el uso de imágenes relevantes.",
            estado: "no iniciada",
            fechaInicio: new Date(2023, 5, 1), // Fecha de inicio aleatoria
            fechaFinalizacion: new Date(2023, 5, 10) // Fecha de finalización aleatoria
        },
        {
            id: 2,
            nombre: "Implementar la funcionalidad de inicio de sesión",
            descripcion: "Para implementar la funcionalidad de inicio de sesión, debes utilizar un lenguaje de programación y un framework adecuados. Debes crear formularios de inicio de sesión, validar las credenciales del usuario y gestionar la sesión del usuario.",
            estado: "en progreso",
            fechaInicio: new Date(2023, 5, 3), // Fecha de inicio aleatoria
            fechaFinalizacion: new Date(2023, 5, 15) // Fecha de finalización aleatoria
        },
        {
            id: 3,
            nombre: "Agregar validaciones de entrada de datos",
            descripcion: "Para agregar validaciones de entrada de datos, debes utilizar técnicas de validación en el lenguaje de programación que estés utilizando. Verifica que los datos ingresados por el usuario cumplan con los requisitos establecidos y muestra mensajes de error adecuados en caso de incumplimiento.",
            estado: "completada",
            fechaInicio: new Date(2023, 5, 8), // Fecha de inicio aleatoria
            fechaFinalizacion: new Date(2023, 5, 12) // Fecha de finalización aleatoria
        },
        {
            id: 4,
            nombre: "Optimizar el rendimiento de la aplicación",
            descripcion: "Para optimizar el rendimiento de la aplicación, debes identificar y abordar los cuellos de botella en el código y en la infraestructura. Puedes utilizar técnicas como el caching, la compresión de recursos, la optimización de consultas a la base de datos, entre otros.",
            estado: "no iniciada",
            fechaInicio: new Date(2023, 5, 2), // Fecha de inicio aleatoria
            fechaFinalizacion: new Date(2023, 5, 9) // Fecha de finalización aleatoria
        },
        {
            id: 5,
            nombre: "Realizar pruebas de integración",
            descripcion: "Para realizar pruebas de integración, debes combinar diferentes componentes y módulos de la aplicación y verificar que funcionen correctamente juntos. Puedes utilizar frameworks de pruebas y crear casos de",
            estado: "en progreso",
            fechaInicio: new Date(2023, 5, 4), // Fecha de inicio aleatoria
            fechaFinalizacion: new Date(2023, 5, 14) // Fecha de finalización aleatoria
        },
        {
            id: 6,
            nombre: "Crear la estructura de base de datos",
            descripcion: "Para crear la estructura de base de datos, debes utilizar un sistema de gestión de bases de datos adecuado y diseñar las tablas y relaciones necesarias para almacenar los datos de la aplicación. Puedes utilizar lenguajes de consulta como SQL para crear y modificar la estructura de la base de datos.",
            estado: "completada",
            fechaInicio: new Date(2023, 5, 6), // Fecha de inicio aleatoria
            fechaFinalizacion: new Date(2023, 5, 11) // Fecha de finalización aleatoria
        },
        {
            id: 7,
            nombre: "Desarrollar la funcionalidad de búsqueda",
            descripcion: "Para desarrollar la funcionalidad de búsqueda, debes utilizar técnicas de búsqueda y filtrado en el lenguaje de programación que estés utilizando. Puedes implementar algoritmos de búsqueda eficientes y permitir a los usuarios buscar información relevante en la aplicación.",
            estado: "en progreso",
            fechaInicio: new Date(2023, 5, 5), // Fecha de inicio aleatoria
            fechaFinalizacion: new Date(2023, 5, 13) // Fecha de finalización aleatoria
        },
        {
            id: 8,
            nombre: "Diseñar el logo y la identidad de la marca",
            descripcion: "Para diseñar el logo y la identidad de la marca, debes utilizar herramientas de diseño gráfico y considerar los valores y la personalidad de la marca. Crea un logo distintivo y diseña elementos visuales que reflejen la identidad de la marca.",
            estado: "no iniciada",
            fechaInicio: new Date(2023, 5, 1), // Fecha de inicio aleatoria
            fechaFinalizacion: new Date(2023, 5, 10) // Fecha de finalización aleatoria
        },
        {
            id: 9,
            nombre: "Realizar pruebas de rendimiento",
            descripcion: "Para realizar pruebas de rendimiento, debes simular cargas de trabajo realistas y medir el rendimiento de la aplicación. Puedes utilizar herramientas de prueba de carga y rendimiento para evaluar la capacidad de respuesta y la estabilidad de la aplicación bajo diferentes condiciones de carga.",
            estado: "no iniciada",
            fechaInicio: new Date(2023, 5, 2), // Fecha de inicio aleatoria
            fechaFinalizacion: new Date(2023, 5, 9) // Fecha de finalización aleatoria
        },
        {
            id: 10,
            nombre: "Documentar el código fuente",
            descripcion: "Para documentar el código fuente, debes proporcionar comentarios claros y concisos en el código que expliquen su funcionamiento. También puedes generar documentación adicional, como guías de usuario y manuales técnicos, que ayuden a otros desarrolladores a comprender y utilizar el código.",
            estado: "completada",
            fechaInicio: new Date(2023, 5, 6), // Fecha de inicio aleatoria
            fechaFinalizacion: new Date(2023, 5, 11) // Fecha de finalización aleatoria
        }
    ];


    const abrirModalTarea = (estado: boolean, tarea: TareaProps) => {
        setModalOpenTarea(true)
        setTarea(tarea)
    }

    const renderTarea = () => {
        return availableTasks.map((tarea) => <Tarea key={tarea.id} tarea={tarea} abrirModalTarea={abrirModalTarea} />)
    }

    const showModalProyecto = () => {
        if (modalOpenProyecto) return <ModalCrearTarea modalOpen setModalOpen={setModalOpenProyecto} list={[]} />
        return <></>
    }


    const showModalTarea = () => {
        if (modalOpenTarea) return <ModalTarea modalOpen setModalOpen={setModalOpenTarea} tarea={tarea} />
        return <></>
    }

    return (

        <>
            <div className="container max-w-7xl mx-auto mt-8">
                <div className="mb-4 flex flex-row justify-between">
                    <h1 className="text-3xl font-bold decoration-gray-400">Nombre del proyecto</h1>
                    <div className="flex w-fit justify-between items-center space-x-2   ">
                        <button
                            type="button"
                            className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
                        >Filtrar</button>

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
                                    {renderTarea()}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                {showModalProyecto()}
                {showModalTarea()}

            </div>
        </>
    )
}