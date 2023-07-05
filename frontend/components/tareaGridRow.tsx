import { TareaProps } from "./types";

const ESTADO_COMPLETADO = 'COMPLETADO'
const ESTADO_EN_PROGRESO = 'EN_CURSO'
const ESTADO_NO_INICIADO = 'NO_INICIADO'

export default function Tarea({ tarea, abrirModalTarea, eliminarModalTarea }:
    {
        tarea: TareaProps,
        abrirModalTarea: (estado: boolean, tarea: TareaProps) => void,
        eliminarModalTarea: (estado: boolean, tarea: TareaProps) => void
    }) {

    const renderState = () => {
        if (tarea.estado == ESTADO_NO_INICIADO)
            return (
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                    <span className="inline-flex items-center bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-red-900 dark:text-red-300 border-red-500 border">
                        <span className="w-2 h-2 mr-1 bg-red-500 rounded-full"></span>
                        No iniciada
                    </span>

                </td>
            )

        if (tarea.estado == ESTADO_EN_PROGRESO)
            return (
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                    <span className="inline-flex items-center bg-orange-100 text-orange-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-orange-900 dark:text-orange-300 border-orange-600 border">
                        <span className="w-2 h-2 mr-1 bg-orange-500 rounded-full"></span>
                        En progreso
                    </span>
                </td>
            )

        if (tarea.estado == ESTADO_COMPLETADO)
            return (
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                    <span className="inline-flex items-center bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300 border-green-600 border">
                        <span className="w-2 h-2 mr-1 bg-green-500 rounded-full"></span>
                        Completada
                    </span>
                </td>
            )
    }


    return (

        <tr id={"tarea-" + tarea.id.toString()} key={tarea.id} className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
            <th className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                <div className="flex items-center">{tarea.id}</div>
            </th>
            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                <div className="flex items-center">{tarea.nombre}</div>
            </td>
            {renderState()}
            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 space-x-2">
                <button
                    type="button"
                    className="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800"
                    onClick={() => { abrirModalTarea(true, tarea) }}
                >
                    Abrir
                </button>

                <button
                    type="button"
                    className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-800"
                    onClick={() => { eliminarModalTarea(true, tarea) }}
                >
                    Eliminar
                </button>
            </td>

        </tr>
    )
}