import { useEffect, useState } from "react";
import Link from "next/link";
import { getProducts } from "@/pages/api/productsServices";
import ProductsGridRow from "@/components/productsGridRow";
import { Products } from "@/public/types";

function HeaderItem({ title }: { title: string }) {
  return (
    <th className="px-6 py-3 text-sm text-left text-gray-500 border-b border-gray-200 bg-gray-50">
      {title}
    </th>
  );
}

export default function Products() {
  const [products, setProducts] = useState<Products[]>([]);

  useEffect(() => {
    getProducts(setProducts);
  }, []);

  return (
    <>
      {/* ACA EMPIEZA LA GRILLA */}

      <div className="container max-w-7xl mx-auto mt-8">
        <div className="mb-4">
          <h1 className="text-3xl font-bold decoration-gray-400">Productos</h1>
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
                    <HeaderItem title="Version" />
                  </tr>
                </thead>
                <tbody>
                  {products.map((product) => (
                    <ProductsGridRow key={product._id} product={product} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
