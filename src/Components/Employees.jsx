import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Employees = () => {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                'https://localhost:7238/employees',
            );
            setEmployees(result.data);
        };
        fetchData();
    }, []);

    return (
        <div className="row">
            {employees.map(employee => (
                <div className="col-md-4" key={employee.id}>
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Nombre: {employee.firstName}</h5>
                            <p className="card-text">Apellido(s): {employee.lastName}</p>
                            <p className="card-text">Departamento: {employee.branch}</p>
                            <p className="card-text">Edad: {employee.age}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Employees;
