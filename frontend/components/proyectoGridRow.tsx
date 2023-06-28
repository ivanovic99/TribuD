import Link from "next/link";
import { ProyectoInfoProps } from "./types";

const ESTADO_COMPLETADO = 'Completado'
const ESTADO_EN_PROGRESO = 'En progreso'
const ESTADO_NO_INICIADO = 'No iniciado'

export default function ProyectoGridRow({ proyecto }: { proyecto: ProyectoInfoProps }) {

    function formatDate(date: Date) {
        date = new Date(date)

        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');

        return `${year}-${month}-${day}`;
    }

    const getColorEstado = (estado: string) => {
        if (estado == ESTADO_COMPLETADO) return 'red'
        if (estado == ESTADO_EN_PROGRESO) return 'orange'
        if (estado == ESTADO_NO_INICIADO) return 'green'
    }

    const renderState = (estado: string) => {
        return (
            <span className={`inline-flex items-center bg-${getColorEstado(estado)}-100 text-${getColorEstado(estado)}-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-${getColorEstado(estado)}-900 dark:text-${getColorEstado(estado)}-300`}>
                <span className={`w-2 h-2 mr-1 bg-${getColorEstado(estado)}-500 rounded-full`}></span>
                {estado}
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
                <div className="flex items-center">{formatDate(proyecto.fechaInicio)}</div>
            </td>
            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                <div className="flex items-center">{formatDate(proyecto.fechaFinalizacion)}</div>
            </td>

            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                <div className="flex items-center">{renderState(proyecto.estado)}</div>
            </td>

            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                {/* <Link href={`/proyecto`}> */}

                <Link
                    href={{
                        pathname: "/proyecto/[id]",
                        query: { id: proyecto.id }
                    }}

                    passHref

                >
                    <button
                        type="button"
                        className="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800"
                    >
                        Abrir
                    </button>
                </Link>
            </td>
        </tr>
    )
}