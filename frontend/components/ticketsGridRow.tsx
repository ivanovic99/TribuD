import Link from "next/link";
import { type } from "os";
import { useEffect, useState } from "react";

type Ticket = {
   _id: string;
   title: string;
   description: string;
   status: string;
   createdAt: string;
   product: string;
   task: string;
   client: string;
   priority: string;
   severity: string;
   time_remaining: string;
}

type TicketsGridRowProps = {
   productId: string;
   ticket: Ticket;
}

const calculateTimeRemaining = ( ticket: Ticket): string => {
  const millis_in_day = 24 * 60 * 60 * 1000;
  const start = new Date(ticket.createdAt);
  const end = new Date();
  const timeDifference = end.getTime() - start.getTime(); //in millis
  const daysPassed = Math.floor(timeDifference / millis_in_day);
  let initial_days_remaining = 0;

  if (ticket.severity === 'S1') {
    initial_days_remaining = 7;
  } else if (ticket.severity === 'S2') {
    initial_days_remaining = 30;
  } else if (ticket.severity === 'S3') {
    initial_days_remaining = 90;
  } else if (ticket.severity === 'S4') {
    initial_days_remaining = 360;
  }

  if (initial_days_remaining - daysPassed > 0){
    return (initial_days_remaining - daysPassed).toString();
  } else {
    return "Vencido por" + -(daysPassed - initial_days_remaining).toString() + "días";
  }
};

export default function TicketsGridRow({ productId, ticket }: TicketsGridRowProps) {
  return (
      <tr className="cursor-pointer" key={`${ticket._id}`}>
        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
          <div className="flex items-center">{ticket._id}</div>
        </td>

        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
          <div className="flex items-center">{ticket.title}</div>
        </td>

      {/*  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
          <div className="text-sm leading-5 text-gray-900">{ticket.description}</div>
        </td>
      */}
        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
          <div className="text-sm leading-5 text-gray-900">{ticket.status}</div>
        </td>

        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
          <div className="text-sm leading-5 text-gray-900">{ticket.createdAt.slice(0, 10)}</div>
        </td>

        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
          <div className="text-sm leading-5 text-gray-900">{calculateTimeRemaining(ticket)}</div>
        </td>

      {/*  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
          <div className="text-sm leading-5 text-gray-900">{ticket.product}</div>
        </td>
      */}  
        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
          <div className="text-sm leading-5 text-gray-900">{ticket.task}</div>
        </td>

        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
          <div className="text-sm leading-5 text-gray-900">{ticket.client}</div>
        </td>

        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
          <div className="text-sm leading-5 text-gray-900">{ticket.priority}</div>
        </td>
        
        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
          <div className="text-sm leading-5 text-gray-900">{ticket.severity}</div>
        </td>

        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
          <Link href={`/products/${productId}/tickets/${ticket._id}`} passHref>
            <button className="text-blue-500 hover:text-blue-700">Ver detalles</button>
          </Link>
        </td>
      </tr>
  );
}
