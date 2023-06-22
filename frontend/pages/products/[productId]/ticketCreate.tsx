import React, { useState } from 'react';
import { createTicket } from '@/pages/api/ticketsServices';
import { useRouter } from 'next/router';

const TicketForm: React.FC = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('Open');
  const [showPopup, setShowPopup] = useState(false);
  const router = useRouter();
  const { productId } = router.query;
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createTicket(productId, { title, description, status });
      // Limpiar el formulario después de crear el ticket
      setTitle('');
      setDescription('');
      setStatus('Open');
      // Mostrar el pop-up
      setShowPopup(true);
      // Actualizar la lista de tickets (puedes pasar una función de actualización desde el padre)
      // updateTicketList();
    } catch (error) {
      // Manejo de errores
      console.error('Error al crear el ticket:', error);
    }
  };

  const closePopup = () => {
    // Cerrar el pop-up y reiniciar el estado
    window.location.href = "/products/" + productId + "/tickets";
    setShowPopup(false);
  };

  return (
    <div className="ticket-form">
      <h2>Crear Ticket</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Titulo:</label>
          <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="description">Descripcion:</label>
          <textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="status">Estado:</label>
          <select id="status" value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="Open">Open</option>
            <option value="In Progress">In Progress</option>
            <option value="Closed">Closed</option>
          </select>
        </div>
        <button type="submit" className="btn-create">Crear</button>
      </form>

      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <h3>Ticket Creado!</h3>
            <p>Su ticket fue creado exitosamente.</p>
            <button className="btn-close" onClick={closePopup}>Close</button>
          </div>
        </div>
      )}

      <style jsx>{`
        .ticket-form {
          max-width: 400px;
          margin: 0 auto;
        }
        h2 {
          color: #333;
          font-size: 24px;
          margin-bottom: 16px;
        }
        .form-group {
          margin-bottom: 16px;
        }
        label {
          display: block;
          margin-bottom: 8px;
          color: #555;
          font-size: 16px;
        }
        input[type='text'],
        textarea,
        select {
          width: 100%;
          padding: 8px;
          font-size: 16px;
          border: 1px solid #ccc;
          border-radius: 4px;
        }
        .btn-create {
          background-color: #007bff;
          color: #fff;
          border: none;
          border-radius: 4px;
          padding: 8px 16px;
          font-size: 16px;
          cursor: pointer;
        }
        .btn-create:hover {
          background-color: #0069d9;
        }
        .popup {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .popup-content {
          background-color: #fff;
          padding: 16px;
          border-radius: 4px;
          text-align: center;
        }
        h3 {
          color: #333;
          font-size: 24px;
          margin-bottom: 16px;
        }
        .btn-close {
          background-color: #ccc;
          color: #333;
          border: none;
          border-radius: 4px;
          padding: 8px 16px;
          font-size: 16px;
          cursor: pointer;
        }
        .btn-close:hover {
          background-color: #bbb;
        }
      `}</style>
    </div>
  );
};

export default TicketForm;
