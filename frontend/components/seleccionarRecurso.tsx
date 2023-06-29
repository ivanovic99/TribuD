import { useState, useEffect } from 'react';
import { Recurso } from './types';

const BuscadorConLista = ({ recursosDisponibles, selecciones, setRecursosSeleccionados }:
    {
        recursosDisponibles: Recurso[],
        selecciones: Recurso[],
        setRecursosSeleccionados: (listaRecursos: Recurso[]) => void
    }) => {

    const [busqueda, setBusqueda] = useState('');
    const [opciones, setOpciones] = useState<Recurso[]>([]);

    const handleBusquedaChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = event.target.value;
        setBusqueda(inputValue);

        // Filtrar las opciones precargadas basado en la búsqueda
        const filteredOptions = recursosDisponibles.filter((option) =>
            option.Nombre.toLowerCase().includes(inputValue.toLowerCase())
        );
        setOpciones(filteredOptions);

        console.log(recursosDisponibles, selecciones)
    };

    const handleAgregarSeleccion = (opcion: Recurso) => {
        if (!selecciones.find((seleccion) => seleccion.legajo === opcion.legajo)) {
            setRecursosSeleccionados([...selecciones, opcion]);
            setBusqueda('');
            setOpciones([]);
        }
    };

    const handleEliminarSeleccion = (opcion: Recurso) => {
        const updatedSelecciones = selecciones.filter((seleccion) => seleccion.legajo !== opcion.legajo);
        setRecursosSeleccionados(updatedSelecciones);
    };

    const borrarEntrada = () => {
        setOpciones([])
        setBusqueda('')
    }


    return (
        <div className='relative'>
            <div className="relative z-0 w-full mb-6 group">
                <input
                    type="text"
                    value={busqueda}
                    onChange={handleBusquedaChange}
                    placeholder=""
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                />
                <div className='absolute right-2 top-2 cursor-pointer'
                    onClick={() => borrarEntrada()}
                    hidden={busqueda.length == 0}
                >x</div>

                <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >Buscar recurso</label>
            </div>

            <ul className="absolute bg-white w-fit min-w-full border-gray-300 z-10 shadow-lg top-11">
                {opciones.map((opcion) => (
                    <li
                        key={opcion.legajo}
                        onClick={() => handleAgregarSeleccion(opcion)}
                        className="p-2 cursor-pointer text-sm font-medium hover:bg-gray-200"
                    >
                        {opcion.Nombre + ' ' + opcion.Apellido}
                    </li>
                ))}
            </ul>

            <ul className="z-0 w-fit">
                <label htmlFor="message" className="block text-sm font-medium text-gray-900 dark:text-white w-fit"
                >Recursos Asignados</label>
                {selecciones.map((seleccion) => (
                    <li
                        key={seleccion.legajo}
                        className="p-2 cursor-pointer text-sm font-medium hover:bg-gray-200 w-fit"
                    >
                        <div className='flex flex-row justify-between space-x-4 w-fit'>
                            <h3 className='w-fit'>{seleccion.Nombre + ' ' + seleccion.Apellido}</h3>
                            <h3
                                className='cursor-pointer'
                                onClick={() => handleEliminarSeleccion(seleccion)}
                            >x</h3>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BuscadorConLista;
