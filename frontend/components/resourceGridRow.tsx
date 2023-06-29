import {Resource} from "@/public/types";
import Link from "next/link";

type ResourceGridRowProps = {
   resource: Resource;
}

export default function ResourceGridRow({ resource }: ResourceGridRowProps) {
  return (
    <tr className="cursor-pointer" key={`${resource.nombre}-${resource.apellido}`}>
      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
        <div className="flex items-center">{resource.legajo}</div>
      </td>

      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
        <div className="flex items-center">{resource.nombre}</div>
      </td>

      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
        <div className="text-sm leading-5 text-gray-900">{resource.apellido}</div>
      </td>

        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
            <Link href={`/resources/${resource.legajo}`} passHref>
                <button className="text-blue-500 hover:text-blue-700">Ver horas cargadas</button>
            </Link>
        </td>
    </tr>
  )
}
