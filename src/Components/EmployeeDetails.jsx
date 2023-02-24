import React, { useState } from "react";

function EmployeeDetails() {
    const [employeeId, setEmployeeId] = useState("");
    const [employee, setEmployee] = useState(null);
    const [errorMessage, setErrorMessage] = useState("");

    const handleSearch = async () => {
        const response = await fetch(`https://localhost:7238/employees/${employeeId}`);
        if (response.status === 404) {
            setEmployee(null);
            setErrorMessage("Empleado no existente");
        } else {
            const data = await response.json();
            setEmployee(data);
            setErrorMessage("");
        }
    };

    return (
        <div className="container">
            <h1>Buscar información de empleado</h1>
            <div className="form-group">
                <label htmlFor="employee-id">ID de empleado:</label>
                <input
                    type="text"
                    id="employee-id"
                    value={employeeId}
                    onChange={(e) => setEmployeeId(e.target.value)}
                />
            </div>
            <button onClick={handleSearch}>Buscar</button>
            {employee && (
                <div className="employee-info">
                    <h2>Información del empleado:</h2>
                    <p>
                        <strong>Nombre:</strong> {employee.firstName} {employee.lastName}
                    </p>
                    <p>
                        <strong>Edad:</strong> {employee.age}
                    </p>
                    <p>
                        <strong>Sucursal:</strong> {employee.branch}
                    </p>
                </div>
            )}
            {errorMessage && (
                <div className="error-message">
                    <p>{errorMessage}</p>
                </div>
            )}
        </div>
    );
}

export default EmployeeDetails;
