import React, { useState, useEffect } from 'react';
import Employee from './Employee.jsx';
import { api } from '../../services/api';
import HandleBadCredentials from '../../helpers/HandleBadCredentials.jsx';
import '../../styles/employee/employee.css';

export default function AllEmployees(props) {

    const [employees, setEmployees] = useState([]);
    const [auth, setAuth] = useState();
    useEffect(() => {
        api.employee_service.employeeAll()
        .then(data => setEmployees(data))
        api.login_service.authcheck()
        .then(data => setAuth(data.status))
    }, [])

    return (
        <>
            {}
            {auth === 401 ? (
                    <HandleBadCredentials />
            ) : (
                    <>
                        {console.log(process.env.REACT_APP_API_URL)}
                        <div class="container">
                            <div>
                                <h1>EMPLOYEE LIST</h1>
                            </div>
                            <table>
                                <tbody>
                                    <tr>
                                        <th>Employee ID</th>
                                        <th>First Name</th>
                                        <th>Last Name</th>
                                        <th>Actions</th>
                                    </tr>
                                    {employees.map(employee => {
                                        if(employee.error) {
                                            console.log(employee.error)
                                        }
                                        return (
                                            <Employee key={employee.id} employee={employee} setEmployees={setEmployees} />
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </>
            )}
        </>
    )
}
