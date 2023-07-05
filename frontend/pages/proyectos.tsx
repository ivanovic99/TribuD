import ModalCrearProyecto from "@/components/modalCrearProyecto";
import ProyectoGridRow from "@/components/proyectoGridRow";
import { ProyectoInfoProps } from "@/components/types";
import { useEffect, useState } from "react";
import { getProyectos } from "./api/proyectoServices";


export default function TableProjets() {
    const [modalOpen, setmodalOpen] = useState(false);
    const [proyectos, setProyectos] = useState<ProyectoInfoProps[]>([]);

    useEffect(() => {
        getProyectos(setProyectos)
    }, [proyectos])

    const HeaderItem = ({ titulo }: { titulo: string }) => {
        return <th className="px-6 py-3 text-sm text-left text-gray-500 border-b border-gray-200 bg-gray-50">{titulo}</th>
    }

    const renderProjects = () => {
        return proyectos.map((proyecto) => <ProyectoGridRow key={proyecto.id} proyecto={proyecto} />)
    }

    const showModal = () => {
        if (modalOpen) {
            return <ModalCrearProyecto modalOpen={modalOpen} setModalOpen={setmodalOpen} list={[]} />
        }
        return <></>
    }


    return (
        <>
            <div className="container max-w-7xl mx-auto mt-8">
                <div className="mb-4 flex flex-row justify-between">
                    <h1 className="text-3xl font-bold decoration-gray-400">Lista de Proyectos</h1>

                    <div className="flex w-fit justify-between items-center space-x-2   ">
                        <button
                            type="button"
                            className="text-white bg-gradient-to-r font-bold from-green-500 via-green-600 to-green-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 rounded-lg text-sm px-5 py-2.5 text-center"
                            onClick={() => { setmodalOpen(true) }}
                        >Crear Proyecto</button>
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
                        <div className="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg">
                            <table className="min-w-full ">
                                <thead >
                                    <tr >
                                        <HeaderItem titulo={"Nombre del Proyecto"} />
                                        <HeaderItem titulo={"Cliente"} />
                                        <HeaderItem titulo={"Fecha de Inicio"} />
                                        <HeaderItem titulo={"Fecha de finalizacion estimada"} />
                                        <HeaderItem titulo={"Estado"} />
                                        <HeaderItem titulo={"Accion"} />
                                    </tr>
                                </thead>

                                <tbody>
                                    {renderProjects()}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            {showModal()}
        </>
    )
}