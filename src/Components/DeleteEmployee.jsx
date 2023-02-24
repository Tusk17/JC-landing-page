import React, { useState } from "react";

function DeleteEmployee() {
    const [employeeId, setEmployeeId] = useState("");
    const [success, setSuccess] = useState(false);

    const handleDelete = async () => {
        const response = await fetch(`https://localhost:7238/employees/${employeeId}`, {
            method: "DELETE"
        });
        if (response.ok) {
            setSuccess(true);
        } else {
            setSuccess(false);
        }
    };

    return (
        <div className="container">
            <h1>Eliminar empleado</h1>
            <div className="form-group">
                <label htmlFor="employee-id">ID de empleado:</label>
                <input
                    type="text"
                    id="employee-id"
                    value={employeeId}
                    onChange={(e) => setEmployeeId(e.target.value)}
                />
            </div>
            <button onClick={handleDelete}>Eliminar</button>
            {success && (
                <div className="success-message">
                    <p>Empleado eliminado con éxito.</p>
                </div>
            )}
            {!success && (
                <div className="error-message">
                    <p>Error al eliminar empleado.</p>
                </div>
            )}
        </div>
    );
}

export default DeleteEmployee;
