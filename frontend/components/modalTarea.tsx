import { useState } from "react"
import { ModalTareaProps, TareaProps } from "./types"
import ModalEditarTarea from '@/components/modalEditarTarea'
import ModalCargarHorasTarea from "./modalFinalizarTarea"


export default function ModalTarea({ modalOpen, setModalOpen, tarea }: ModalTareaProps) {

    const [nombre, setNombre] = useState(tarea.nombre)
    const [descripcion, setDescripcion] = useState(tarea.descripcion)
    const [lider, setLider] = useState('')
    const [fechaInicio, setFechaInicio] = useState(tarea.fechaInicio)
    const [fechaFinalizacion, setFechaFinalizacion] = useState(tarea.fechaFinalizacion)
    const [esfuerzoEstimado, setEsfuerzoEstimado] = useState(tarea.esfuerzoEstimado)
    const [horasEstimadas, setHorasEstimado] = useState(tarea.horasEstimadas)
    const [estado, setEstado] = useState(tarea.estado)

    const [modalOpenEditar, setModalOpenEditar] = useState(false);
    const [modalOpenFinalizar, setModalOpenFinalizar] = useState(false);


    const tareaNueva = () => {
        const nuevaTarea: TareaProps = {
            id: tarea.id,
            nombre,
            descripcion,
            fechaInicio,
            fechaFinalizacion,
            esfuerzoEstimado,
            horasEstimadas,
            estado,
            horasReales: 0,
            esfuerzoReal: 0
        }
        return nuevaTarea
    }

    const showModalTarea = () => {
        if (modalOpenEditar) {
            return <ModalEditarTarea modalOpen={modalOpenEditar} setModalOpen={setModalOpenEditar} tarea={tareaNueva()} />
        }
        else return <></>
    }

    const showModalFinalizar = () => {
        if (modalOpenFinalizar) {
            return <ModalCargarHorasTarea modalOpen={modalOpenFinalizar} setModalOpen={setModalOpenFinalizar} tarea={tareaNueva()} />
        }
        else return <></>
    }

    const renderBotones = () => {
        if (tarea.estado != 'completada') {
            return (<>
                <button
                    type="button"
                    className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                    onClick={() => setModalOpenFinalizar(true)}
                >Marcar como completada
                </button>
                <button
                    type="button"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    onClick={() => setModalOpenEditar(true)}
                >Editar
                </button>
                <button
                    type="button"
                    className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                    onClick={() => {
                        setModalOpen(false)
                    }}>Cancelar
                </button>
            </>)

        }
        return <>
            <button
                type="button"
                className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                onClick={() => {
                    setModalOpen(false)
                }}>Cerrar
            </button>
        </>
    }

    const esEditable = () => {
        if (tarea.estado == 'completada') {
            return true
        }
        return false
    }

    function formatDate(date: Date) {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');

        return `${year}-${month}-${day}`;
    }


    return (
        <>
            <div
                id="modalTarea"
                tabIndex={-1}
                aria-hidden={!modalOpen}
                className={`${modalOpen ? "" : "hidden"} absolute inset-0 h-screen flex justify-center items-center bg-black/25`}
            >
                <div className="relative p-4 w-full max-w-2xl h-full md:h-auto">
                    {/* <!-- Modal content --> */}
                    <div className="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
                        {/* <!-- Modal header --> */}
                        <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Tarea</h3>
                            <button
                                type="button"
                                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                data-modal-toggle="defaultModal"
                                onClick={() => {
                                    setModalOpen(false)
                                }}
                            >
                                <svg
                                    aria-hidden="true"
                                    className="w-5 h-5"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    ></path>
                                </svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>
                        {/* <!-- Modal body --> */}
                        <form>
                            <div className="relative z-0 w-full mb-6 group">
                                <div className="mb-6">
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre</label>
                                    <input
                                        type="text"
                                        id="email"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Nombre"
                                        defaultValue={tarea.nombre}
                                        onChange={(e) => setNombre(e.target.value)}
                                        disabled={esEditable()}
                                        required />
                                </div>
                            </div>
                            <div className="relative z-0 w-full mb-6 group">
                                <label
                                    htmlFor="message"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Descripción </label>
                                <textarea id="message"
                                    className="block p-2.5 w-full text-sm h-fit text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Descripcion"
                                    rows={10}
                                    defaultValue={tarea.descripcion}
                                    disabled={esEditable()}
                                    onChange={(e) => setDescripcion(e.target.value)}
                                ></textarea>
                            </div>
                            <div className="relative z-0 w-full mb-6 group">
                                <input disabled={esEditable()} type="text" name="floating_first_name" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                                <label htmlFor="floating_first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                    Personas asignadas
                                </label>
                            </div>
                            <div className="grid md:grid-cols-4 md:gap-6">
                                <div className="relative z-0 w-full mb-6 group">
                                    <input disabled={esEditable()} value={formatDate(fechaInicio)} onChange={(e) => setFechaInicio(new Date(e.target.value))} type="date" name="floating_last_name" id="floating_last_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                    <label htmlFor="floating_last_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                        Fecha Inicio</label>
                                </div>
                                <div className="relative z-0 w-full mb-6 group">
                                    <input disabled={esEditable()} defaultValue={horasEstimadas} onChange={(e) => setHorasEstimado(Number(e.target.value))} type="number" name="floating_last_name" id="floating_last_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                    <label htmlFor="floating_last_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                        Horas Estimadas</label>
                                </div>

                                <div className="relative z-0 w-full mb-6 group">
                                    <div className="flex items-center">
                                        <select disabled={esEditable()} defaultValue={estado.replace(' ', '_')} onChange={e => setEstado(e.target.value)} name="floating_last_name" id="floating_last_name" className="block py-2.5 pr-8 pl-0 w-full text-sm text-gray-900 bg-white dark:bg-gray-800 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" required>
                                            <option value="" disabled hidden>Estado</option>
                                            <option value="en_curso">En curso</option>
                                            <option value="no_iniciada">No iniciada</option>
                                            <option value="completada">Completada</option>
                                        </select>
                                        <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                            <svg className="w-5 h-5 text-gray-400 dark:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M6.293 7.707a1 1 0 0 1 1.414 0L10 9.293l2.293-2.293a1 1 0 1 1 1.414 1.414l-3 3a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 0-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                    </div>
                                    <label htmlFor="floating_last_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Estado</label>
                                </div>

                            </div>
                            <div className="grid md:grid-cols-4 md:gap-6">
                                <div className="relative z-0 w-full mb-6 group">
                                    <input type="date"
                                        disabled={esEditable()}
                                        defaultValue={formatDate(tarea.fechaFinalizacion)}
                                        onChange={e => setFechaFinalizacion(new Date(e.target.value))} name="floating_last_name" id="floating_last_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                    <label htmlFor="floating_last_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                    >Fecha  finalizacion</label>
                                </div>
                                <div className="relative z-0 w-full mb-6 group">
                                    <input disabled={esEditable()} defaultValue={esfuerzoEstimado} onChange={(e) => setEsfuerzoEstimado(Number(e.target.value))} type="number" name="floating_last_name" id="floating_last_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                    <label htmlFor="floating_last_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                    >Esfuerzo Estimado</label>
                                </div>
                            </div>
                            <div className="flex justify-end gap-2">
                                {renderBotones()}
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            {showModalFinalizar()}
            {showModalTarea()}
        </>
    )

}