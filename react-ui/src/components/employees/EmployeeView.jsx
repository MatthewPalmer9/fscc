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
                    <div class="form_container">
                        <h1>{employee.firstName + " " + employee.lastName} -- UID: {employee.userId}  </h1>
                        <div class="edit__form">
                            <div class="title">
                                <h1>View</h1>
                            </div>
                            <div class="rows">
                                <div class="row">
                                    <div class="input">
                                        <label for="firstName">First Name</label>
                                        <span class="view__field"> {employee.firstName == null ? "" : employee.firstName}</span>
                                    </div>
                                    <div class="input">
                                        <label for="lastName">Last Name</label>
                                        <span class="view__field">{employee.lastName == null ? "" : employee.lastName}</span>
                                    </div>
                                    <div class="input">
                                        <label for="email">Email</label>
                                        <span class="view__field">{employee.email == null ? "" : employee.email}</span>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="input">
                                        <label for="address">Address</label>
                                        <span class="view__field">{employee.address == null ? "" : employee.address}</span>
                                    </div>
                                    <div class="input">
                                        <label for="city">City</label>
                                        <span class="view__field">{employee.city == null ? "" : employee.city}</span>
                                    </div>
                                    <div class="input">
                                        <label for="state">State</label>
                                        <span class="view__field">{employee.state == null ? "" : employee.state}</span>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="input">
                                        <label for="zip">Zip Code</label>
                                        <span class="view__field">{employee.zip == null ? "" : employee.zip}</span>
                                    </div>
                                    <div class="input">
                                        <label for="cellPhone">Cell Phone</label>
                                        <span class="view__field">{employee.cellPhone == null ? "" : employee.cellPhone}</span>
                                    </div>
                                    <div class="input">
                                        <label for="homePhone">Home Phone</label>
                                        <span class="view__field">{employee.homePhone == null ? "" : employee.homePhone}</span>
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
