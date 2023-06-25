import { TareaProps } from "./types";


export default function Tarea({ tarea, abrirModalTarea }: { tarea: TareaProps, abrirModalTarea: (estado: boolean, tarea: TareaProps) => void }) {

    const renderState = () => {
        if (tarea.estado == 'no iniciada')
            return (
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                    <span className="inline-flex items-center bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-red-900 dark:text-red-300">
                        <span className="w-2 h-2 mr-1 bg-red-500 rounded-full"></span>
                        No iniciada
                    </span>

                </td>
            )

        if (tarea.estado == "en progreso")
            return (
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                    <span className="inline-flex items-center bg-orange-100 text-orange-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-orange-900 dark:text-orange-300">
                        <span className="w-2 h-2 mr-1 bg-orange-500 rounded-full"></span>
                        En progreso
                    </span>
                </td>
            )

        if (tarea.estado == "completada")
            return (
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                    <span className="inline-flex items-center bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
                        <span className="w-2 h-2 mr-1 bg-green-500 rounded-full"></span>
                        Completada
                    </span>
                </td>
            )
    }


    return (

        <tr key={tarea.id} className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                <div className="flex items-center">{tarea.id}</div>
            </td>
            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                <div className="flex items-center">{tarea.nombre}</div>
            </td>
            {renderState()}
            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                {/* <div className="flex items-center">Abrir</div> */}

                <button
                    type="button"
                    className="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800"
                    onClick={() => { abrirModalTarea(true, tarea) }}
                >
                    Abrir
                </button>
            </td>

        </tr>
    )
}