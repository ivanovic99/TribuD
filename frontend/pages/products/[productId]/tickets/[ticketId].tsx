import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getTicketById, deleteTicket } from '@/pages/api/ticketsServices';
import { Tickets } from '@/public/types';

function HeaderItem({ title }: { title: string }) {
  return (
    <th className="px-6 py-3 text-sm text-left text-gray-500 border-b border-gray-200 bg-gray-50">
      {title}
    </th>
  );
}

const TicketDetails = () => {
  const [ticket, setTicket] = useState<Tickets | null>(null);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const router = useRouter();
  const { productId, ticketId } = router.query;

  useEffect(() => {
    getTicketById(productId as string, ticketId as string)
      .then((data) => setTicket(data))
      .catch((error) => console.error('Error al obtener los detalles del ticket:', error));
  }, [ticketId]);

  const handleModifyTicket = () => {
    const confirmAction = window.confirm('¿Estás seguro de que quieres modificar este ticket?');
    if (confirmAction) {
      window.location.href = "/products/" + productId + "/tickets/" + ticketId + "/edit";
    }
  };

  const handleDeleteTicket = async () => {
    const confirmAction = window.confirm('¿Estás seguro de que quieres borrar este ticket?');
    if (confirmAction) {
      await deleteTicket(productId as string, ticketId as string);
      setShowDeleteConfirmation(true);
   }
};

const closeDeleteConfirmation = () => {
   setShowDeleteConfirmation(false);
   window.location.href = "/products/" + productId + "/tickets";
  };

  if (!ticket) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {/* ACA EMPIEZA LA GRILLA */}
      <div className="container max-w-7xl mx-auto mt-8">
        <div className="mb-4">
          <h1 className="text-3xl font-bold decoration-gray-400">Detalles del Ticket</h1>
        </div>
        <div className="flex flex-col">
          <div className="overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
            <div className="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg">
              <table className="min-w-full">
                <thead>
                  <tr>
                    <HeaderItem title="ID" />
                    <HeaderItem title="Titulo" />
                    <HeaderItem title="Descripcion" />
                    <HeaderItem title="Estado" />
                    <HeaderItem title="Fecha de creacion" />
                  </tr>
                </thead>

                <tbody>
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
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="flex">
            <button
              className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded mr-2"
              onClick={handleModifyTicket}
            >
              Modificar Ticket
            </button>
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              onClick={handleDeleteTicket}
            >
              Borrar Ticket
            </button>
          </div>
        </div>
      </div>

      {/* Pop-up de confirmación de eliminación */}
      {showDeleteConfirmation && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>

            <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>&#8203;
            
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
                    <svg
                      className="h-6 w-6 text-green-600"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">Eliminación Exitosa</h3>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        Su ticket ha sido eliminado exitosamente.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={closeDeleteConfirmation}
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TicketDetails;
