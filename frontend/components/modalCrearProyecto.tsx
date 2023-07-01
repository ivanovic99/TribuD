import { createProyecto, getRecursos } from "@/pages/api/proyectoServices"
import { ModalProps, ProyectoInfoProps, Recurso } from "./types"
import { useEffect, useState } from "react"
import SeleccionarRecurso from "@/components/seleccionarRecurso"
import formatearFecha from "@/components/formatearFecha"

const ESTADO_COMPLETADO = 'FINALIZACION'
const ESTADO_EN_PROGRESO = 'IMPLEMENTACION'
const ESTADO_NO_INICIADO = 'INICIO'
const ESTADO_DESARROLLO = 'DESARROLLO'

export default function ModalCreate({ modalOpen, setModalOpen, list }: ModalProps) {

    const [nombre, setNombre] = useState("")
    const [descripcion, setDescripcion] = useState("")
    const [lider, setLider] = useState("")
    const [cliente, setCliente] = useState("")
    const [fechaInicio, setFechaInicio] = useState('')
    const [fechaFinalizacion, setFechaFinalizacion] = useState('')
    const [esfuerzoEstimado, setEsfuerzoEstimado] = useState(0)
    const [horasEstimadas, setHorasEstimado] = useState(0)
    const [estado, setEstado] = useState(ESTADO_NO_INICIADO)

    const [recursosDisponibles, setRecursosDisponibles] = useState<Recurso[]>([])
    const [recursosSeleccionados, setRecursosSeleccionados] = useState<Recurso[]>([])

    const [error, setError] = useState("")

    useEffect(() => {
        getRecursos(setRecursosDisponibles)
        
    }, [modalOpen])

    const instanciaProyecto = () => {
        const instancia: ProyectoInfoProps = {
            id: 0,
            nombre,
            descripcion,
            cliente,
            lider,
            fechaInicio,
            fechaFinalizacion,
            esfuerzoReal: 0,
            esfuerzoEstimado,
            horasReales: 0,
            horasEstimadas,
            estado,
            tareas: []
        }
        return instancia
    }

    const handleSubmit = () => {
        createProyecto(instanciaProyecto())
            .then(response => console.log(response))
            .catch(error => {
                console.log(error.message)
                setError(error.message)
            })
        if (!error) {
            setModalOpen(false)
        }
    }

    const showError = () => {
        if (!error) return <></>

        return (<div className="bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-red-400 border border-red-400">
            {error}
        </div>)
    }

    return (
        <>
            <div
                id="crearProyectoModal"
                tabIndex={-1}
                aria-hidden={!modalOpen}
                className={`${modalOpen ? "" : "hidden"} absolute inset-0 h-screen flex justify-center items-center bg-black/25`}
            >
                <div className="relative p-4 w-full max-w-2xl h-full md:h-auto">
                    {/* <!-- Modal content --> */}
                    <div className="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
                        {/* <!-- Modal header --> */}
                        <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Nuevo Proyecto</h3>
                            <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="defaultModal"
                                onClick={() => {
                                    setModalOpen(false)
                                }}
                            >
                                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
                                </svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>
                        {/* <!-- Modal body --> */}

                        <form>
                            {showError()}
                            <div className="relative z-0 w-full mb-6 group">
                                <input
                                    onChange={(e) => setNombre(e.target.value)}
                                    value={nombre} type="text" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                >Nombre
                                </label>
                            </div>

                            <div className="relative z-0 w-full mb-6 group">
                                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Descripción </label>
                                <textarea
                                    value={descripcion}
                                    onChange={(e) => setDescripcion(e.target.value)} id="message" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Descripción..."></textarea>
                            </div>
                            <div className="relative z-0 w-full mb-6 group">
                                <input
                                    value={cliente}
                                    onChange={(e) => setCliente(e.target.value)} type="text" name="floating_first_name" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label htmlFor="floating_first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                    Cliente</label>
                            </div>

                            <div className="relative z-10 bg-white w-full mb-6 group">

                                {/* <SeleccionarRecurso recursosDisponibles={recursosDisponibles} setRecursosSeleccionados={setRecursosSeleccionados} selecciones={recursosSeleccionados} /> */}
                                <SeleccionarRecurso recursosDisponibles={recursosDisponibles} selecciones={recursosSeleccionados} setRecursosSeleccionados={setRecursosSeleccionados} />

                            </div>

                            <div className="grid md:grid-cols-4 md:gap-6">
                                <div className="relative z-0 w-full mb-6 group">
                                    <input
                                        onChange={(e) => setFechaInicio(e.target.value)} defaultValue={'dd-mm-aaaa'} type="date" name="floating_last_name" id="floating_last_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                    <label htmlFor="floating_last_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                        Fecha Inicio</label>
                                </div>

                                <div className="relative z-0 w-full mb-6 group">
                                    <input value={horasEstimadas} onChange={(e) => setHorasEstimado(Number(e.target.value))} type="number" name="floating_last_name" id="floating_last_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                    <label htmlFor="floating_last_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                        Horas Estimadas</label>
                                </div>

                                <div className="relative z-0 w-full mb-6 group">
                                    <div className="flex items-center">
                                        <select value={estado} onChange={(e) => setEstado(e.target.value)} name="floating_last_name" id="floating_last_name" className="block py-2.5 pr-8 pl-0 w-full text-sm text-gray-900 bg-white dark:bg-gray-800 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" required>
                                            <option value="" disabled hidden>Estado</option>
                                            <option value={ESTADO_EN_PROGRESO}>En curso</option>
                                            <option value={ESTADO_NO_INICIADO}>No iniciado</option>
                                            <option value={ESTADO_DESARROLLO}>En desarrollo</option>
                                            <option value={ESTADO_COMPLETADO}>Finalizado</option>
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
                                    <input
                                        onChange={(e) => setFechaFinalizacion(e.target.value)}
                                        defaultValue={'dd-mm-aaaa'} type="date" name="floating_last_name" id="floating_last_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="dd-mm-aaaa" required />
                                    <label htmlFor="floating_last_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                    >Fecha finalizacion</label>
                                </div>
                                <div className="relative z-0 w-full mb-6 group">
                                    <input
                                        value={esfuerzoEstimado}
                                        onChange={(e) => setEsfuerzoEstimado(Number(e.target.value))} type="number" name="floating_last_name" id="floating_last_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                    <label htmlFor="floating_last_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                    >Esfuerzo Estimado</label>
                                </div>
                            </div>
                            <div className="flex justify-end gap-2">
                                <button type="button"
                                    onClick={() => handleSubmit()} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                >Crear</button>
                                <button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                                    onClick={() => {
                                        setModalOpen(false)
                                    }}>Cancelar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>


        </>
    )
}