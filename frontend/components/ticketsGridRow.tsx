import Link from "next/link";

export default function TicketsGridRow({ productId, ticket }) {
  return (
      <tr className="cursor-pointer" key={`${ticket._id}`}>
        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
          <div className="flex items-center">{ticket._id}</div>
        </td>

        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
          <div className="flex items-center">{ticket.title}</div>
        </td>

        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
          <div className="text-sm leading-5 text-gray-900">{ticket.description}</div>
        </td>

        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
          <div className="text-sm leading-5 text-gray-900">{ticket.status}</div>
        </td>

        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
          <div className="text-sm leading-5 text-gray-900">{ticket.createdAt}</div>
        </td>

        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
          <Link href={`/products/${productId}/tickets/${ticket._id}`} passHref>
            <button className="text-blue-500 hover:text-blue-700">Ver detalles</button>
          </Link>
        </td>
      </tr>
  );
}
