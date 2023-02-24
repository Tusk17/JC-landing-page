import React, { useState } from 'react';
import axios from 'axios';

const EmployeeForm = () => {
    const [employee, setEmployee] = useState({
        firstName: '',
        lastName: '',
        branch: '',
        age: ''
    });
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        setEmployee({
            ...employee,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('https://localhost:7238/employees', employee);
            setMessage('Empleado ingresado correctamente');
        } catch (error) {
            console.error(error);
            setMessage('Error ingresando al empleado');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Nombre(s):
                <input
                    type="text"
                    name="firstName"
                    value={employee.firstName}
                    onChange={handleChange}
                />
            </label>
            <label>
                Apellido(s):
                <input
                    type="text"
                    name="lastName"
                    value={employee.lastName}
                    onChange={handleChange}
                />
            </label>
            <label>
                Departamento:
                <input
                    type="text"
                    name="branch"
                    value={employee.branch}
                    onChange={handleChange}
                />
            </label>
            <label>
                Edad:
                <input
                    type="number"
                    name="age"
                    value={employee.age}
                    onChange={handleChange}
                />
            </label>
            <button type="submit">Crear</button>
            {message && (
                <div>{message}</div>
            )}
        </form>
    );
};

export default EmployeeForm;
