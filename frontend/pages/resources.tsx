import { useEffect, useState } from "react"
import ResourceGridRow from "@/components/resourceGridRow"
import {Resource} from "@/public/types";
import {getResources} from "@/pages/api/resourcesServices";

function HeaderItem({ title }: { title: string }) {
  return <th className="px-6 py-3 text-sm text-left text-gray-500 border-b border-gray-200 bg-gray-50">{title}</th>
}

export default function Resources() {
  const [resources, setResources] = useState<Resource[]>([]);

  useEffect(() => {
    getResources()
        .then((res) => {
          setResources(res)
        })
        .catch((error) => {
          console.log(error.message)
        });
  }, []);

  if (resources.length === 0) {
    return <div>Cargando...</div>;
  }

  return (
    <>
      <div className="container max-w-7xl mx-auto mt-8">
        <div className="mb-4">
          <h1 className="text-3xl font-bold decoration-gray-400">Recursos</h1>
        </div>
        <div className="flex flex-col">
          <div className="overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
            <div className="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg">
              <table className="min-w-full">
                <thead>
                  <tr>
                    <HeaderItem title="Legajo" />
                    <HeaderItem title="Nombre" />
                    <HeaderItem title="Apellido" />
                    <HeaderItem title="Opciones" />
                  </tr>
                </thead>

                <tbody>
                  {resources.map((resource: Resource) => (
                    <ResourceGridRow key={`${resource.nombre}-${resource.apellido}`} resource={resource} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
