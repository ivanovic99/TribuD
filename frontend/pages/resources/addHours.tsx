import React, {useState} from "react";

const AddHours: React.FC = () => {
    const [project, setProject] = useState('');
    const [task, setTask] = useState('');
    const [resource, setResource] = useState('');

    return (
        <div className="container max-w-7xl mx-auto mt-8">
            <div className="mb-4">
                <h1 className="text-3xl font-bold decoration-gray-400">Recursos</h1>
            </div>
            <h2>Asignación de horas</h2>
            <form>
                <div className="form-group">
                    <label htmlFor="project">Proyecto:</label>
                    <select id="project" value="default" onChange={(e) => setProject(e.target.value)}>
                        <option value="default">Seleccione el projecto</option>
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="task">Tarea:</label>
                    <select id="task" value="default" onChange={(e) => setTask(e.target.value)}>
                        <option value="default">Seleccione la tarea</option>
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="resource">Recurso:</label>
                    <select id="resource" value="default" onChange={(e) => setResource(e.target.value)}>
                        <option value="default">Seleccione el recurso</option>
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="hours">
                        Horas
                    </label>
                    <input
                        type="number"
                        name="hours"
                        id="hours"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Horas trabajadas"
                        required
                    />
                </div>
                <button type="submit" className="btn-create mt-10">Cargar horas</button>
            </form>

            <style jsx>{`
              .product-form {
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
}

export default AddHours;