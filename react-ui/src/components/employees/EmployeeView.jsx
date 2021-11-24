import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { api } from '../../services/api.js';
import HandleBadCredentials from '../../helpers/HandleBadCredentials.jsx';

export default function EmployeeView(props) {
    const ID = props.match.url.split("/")[2]
    const [employee, setEmployee] = useState([]);
    const [auth, setAuth] = useState();
    const history = useHistory();

    useEffect(() => {
        api.login_service.authcheck()
        .then(data => setAuth(data.status))

        api.employee_service.employeeById(ID)
        .then(data => setEmployee(data));
    }, [ID]);

    const returnToList = () => {
        history.push("/employee/all");
    };

    const redirectToEdit = () => {
        history.push(`/employee/${ID}/edit`)
    }

    return (
        <>
            {auth === 401 ? (
                <HandleBadCredentials />
            ) : (
                <>
                    <div className="form_container">
                        <h1>{employee.firstName + " " + employee.lastName} -- UID: {employee.userId}  </h1>
                        <div className="edit__form">
                            <div className="title">
                                <h1>View</h1>
                            </div>
                            <div className="rows">
                                <div className="row">
                                    <div className="input">
                                        <label htmlFor="firstName">First Name</label>
                                        <span className="view__field"> {employee.firstName == null ? "" : employee.firstName}</span>
                                    </div>
                                    <div className="input">
                                        <label htmlFor="lastName">Last Name</label>
                                        <span className="view__field">{employee.lastName == null ? "" : employee.lastName}</span>
                                    </div>
                                    <div className="input">
                                        <label htmlFor="email">Email</label>
                                        <span className="view__field">{employee.email == null ? "" : employee.email}</span>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input">
                                        <label htmlFor="address">Address</label>
                                        <span className="view__field">{employee.address == null ? "" : employee.address}</span>
                                    </div>
                                    <div className="input">
                                        <label htmlFor="city">City</label>
                                        <span className="view__field">{employee.city == null ? "" : employee.city}</span>
                                    </div>
                                    <div className="input">
                                        <label htmlFor="state">State</label>
                                        <span className="view__field">{employee.state == null ? "" : employee.state}</span>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input">
                                        <label htmlFor="zip">Zip Code</label>
                                        <span className="view__field">{employee.zip == null ? "" : employee.zip}</span>
                                    </div>
                                    <div className="input">
                                        <label htmlFor="cellPhone">Cell Phone</label>
                                        <span className="view__field">{employee.cellPhone == null ? "" : employee.cellPhone}</span>
                                    </div>
                                    <div className="input">
                                        <label htmlFor="homePhone">Home Phone</label>
                                        <span className="view__field">{employee.homePhone == null ? "" : employee.homePhone}</span>
                                    </div>
                                </div>
                                <button onClick={redirectToEdit} id="confirm_changes_btn" type="submit">Edit Employee</button>
                            </div>
                        </div>
                        <button onClick={returnToList} id="list_return_btn">Back to list</button>
                    </div>
                </>
            )}
        </>
    )
}
