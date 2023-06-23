import {Usuario} from "@/public/types";

type UserGridRowProps = {
   usuario: Usuario;
}

export default function UserGridRow({ usuario }: UserGridRowProps) {
  return (
    <tr key={`${usuario.nombre}-${usuario.apellido}`}>
      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
        <div className="flex items-center">{usuario.legajo}</div>
      </td>

      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
        <div className="flex items-center">{usuario.nombre}</div>
      </td>

      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
        <div className="text-sm leading-5 text-gray-900">{usuario.apellido}</div>
      </td>
    </tr>
  )
}
