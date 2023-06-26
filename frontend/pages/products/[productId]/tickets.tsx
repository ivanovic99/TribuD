import { useEffect, useState } from "react";
import Link from "next/link";
import { getTickets } from "@/pages/api/ticketsServices";
import TicketsGridRow from "@/components/ticketsGridRow";
import { Tickets } from "@/public/types";
import { useRouter } from 'next/router';

function HeaderItem({ title }: { title: string }) {
  return (
    <th className="px-6 py-3 text-sm text-left text-gray-500 border-b border-gray-200 bg-gray-50">
      {title}
    </th>
  );
}

export default function Tickets() {
  const router = useRouter();
  const [tickets, setTickets] = useState<Tickets[]>([]);
  var { productId } = router.query;
  useEffect(() => {
     (async () => {
        await getTickets(productId as string, setTickets);
      })()
   }, [router.query]);
   if (!tickets.length) {  
      return (
         <div><p>No tiene Tickets asociados...</p>
         <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => {
              window.location.href = "/products/" + productId + "/ticketCreate";
            }}
          >
            Crear Ticket
          </button>
         </div>);
   }
  return (
    <>
      {/* ACA EMPIEZA LA GRILLA */}

      <div className="container max-w-7xl mx-auto mt-8">
        <div className="mb-4">
          <h1 className="text-3xl font-bold decoration-gray-400">Tickets</h1>
        </div>
        <div className="flex flex-col">
          <div className="overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
            <div className="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg">
              <table className="min-w-full">
                <thead>
                  <tr>
                    <HeaderItem title="ID" />
                    <HeaderItem title="Tipo" />
                    <HeaderItem title="Descripcion" />
                    <HeaderItem title="Estado" />
                    <HeaderItem title="Fecha de creacion" />
                    <HeaderItem title="Producto asociado" />
                    <HeaderItem title="Tarea" />
                    <HeaderItem title="Cliente" />
                    <HeaderItem title="Prioridad" />
                    <HeaderItem title="Severidad" />
                  </tr>
                </thead>

                <tbody>
                  {tickets.map((ticket) => (
                     <TicketsGridRow key={ticket._id} productId={productId as string} ticket={ticket} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => {
              window.location.href = "/products/" + productId + "/ticketCreate";
            }}
          >
            Crear Ticket
          </button>
        </div>
      </div>
    </>
  );
}
