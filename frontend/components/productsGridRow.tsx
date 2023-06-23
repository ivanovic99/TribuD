import Link from "next/link";
import { Products } from "@/public/types";

 type ProductsGridRowProps = {
   product: Products;
 };

export default function ProductsGridRow({ product }: ProductsGridRowProps) {
  return (
      <tr className="cursor-pointer" key={`${product._id}`}>
        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
          <div className="flex items-center">{product._id}</div>
        </td>

        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
          <div className="flex items-center">{product.title}</div>
        </td>

        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
          <div className="text-sm leading-5 text-gray-900">{product.description}</div>
        </td>

        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
          <div className="text-sm leading-5 text-gray-900">{product.status}</div>
        </td>

        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
          <div className="text-sm leading-5 text-gray-900">{product.createdAt}</div>
        </td>

        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
          <Link href={`/products/${product._id}`} passHref>
            <button className="text-blue-500 hover:text-blue-700">Ver detalles del producto</button>
          </Link>
        </td>
        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
          <Link href={`/products/${product._id}/tickets`} passHref>
            <button className="text-blue-500 hover:text-blue-700">Ver Tickets del producto</button>
          </Link>
        </td>
      </tr>
  );
}
