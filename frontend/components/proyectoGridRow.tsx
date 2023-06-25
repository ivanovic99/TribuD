import Link from "next/link";
import { ProyectoInfoProps } from "./types";

export default function ProyectoGridRow({ proyecto }: ProyectoInfoProps) {

    const renderState = () => {
        if (proyecto.estado == 'No iniciado')
            return (
                <span className="inline-flex items-center bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-red-900 dark:text-red-300">
                    <span className="w-2 h-2 mr-1 bg-red-500 rounded-full"></span>
                    No iniciada
                </span>
            )

        if (proyecto.estado == "En progreso")
            return (
                <span className="inline-flex items-center bg-orange-100 text-orange-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-orange-900 dark:text-orange-300">
                    <span className="w-2 h-2 mr-1 bg-orange-500 rounded-full"></span>
                    En progreso
                </span>
            )

        if (proyecto.estado == "Completado")
            return (
                <span className="inline-flex items-center bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
                    <span className="w-2 h-2 mr-1 bg-green-500 rounded-full"></span>
                    Completada
                </span>
            )
    }

    return (
        <tr key={proyecto.id} className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {proyecto.nombre}
            </th>
            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                <div className="flex items-center">{proyecto.cliente}</div>
            </td>
            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                <div className="flex items-center">{proyecto.fechaInicio}</div>
            </td>
            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                <div className="flex items-center">{proyecto.fechaEstimadaFinalizacion}</div>
            </td>

            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                <div className="flex items-center">{renderState()}</div>
            </td>

            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                <div className="flex items-center">
                    <Link href="/proyecto" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Abrir</Link>
                </div>
            </td>
        </tr>
    )
}