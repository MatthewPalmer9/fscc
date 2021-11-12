import React, { useEffect, useState } from 'react';
import validation from '../validation.js';
import { useHistory } from 'react-router-dom';
import { api } from '../../services/api.js';
import '../../styles/employee/employee.css';

export default function EmployeeEdit(props) {
    const ID = props.match.url.split("/")[2];
    const [employee, setEmployee] = useState([]);
    const [errors, setErrors] = useState();
    const history = useHistory();
    
    useEffect(() => {
        api.employee_service.employeeById(ID)
        .then(data => setEmployee(data));
    }, [ID]);

    const handleChange = e => {
        const { name, value } = e.target;
        setErrors(prevState => ({...prevState, [name]: ""}));
        setEmployee(prevState => ({...prevState, [name]: value }));
    }

    const handleConfirmChanges = () => {
        const err = validation(employee);
        setErrors(err)

        if(Object.keys(err).length > 0) {
            return null;
        } else {
            api.employee_service.updateEmployee(employee)
            .then(resp => console.log(resp));
            
            setTimeout(() => {
                history.push("/employee/all");
            }, 500);
        };
    };

    const handleDelete = () => {
        api.employee_service.deleteEmployee(employee)
        .then(resp => console.log(resp))
        .then(
            setTimeout(() => {
                history.push("/employee/all")
            }, 500)
        );
    };

    const returnToList = () => {
        history.push("/employee/all");
    };

    return (
        <div class="form_container">
            <h1>{employee.firstName + " " + employee.lastName} -- UID: {employee.userId}  </h1>
            <div class="edit__form">
                <div class="title">
                    <h1>Edit</h1>
                </div>
                <div class="rows">
                    <div class="row">
                        <div class="input">
                            <label for="firstName">First Name</label>
                            <input name="firstName" value={employee.firstName == null ? "" : employee.firstName}/>
                            <p class="errors">{errors?.firstName}</p>
                        </div>
                        <div class="input">
                            <label for="lastName">Last Name</label>
                            <input name="lastName" value={employee.lastName == null ? "" : employee.lastName} />
                            <p class="errors">{errors?.lastName}</p>
                        </div>
                        <div class="input">
                            <label for="email">Email</label>
                            <input name="email" value={employee.email == null ? "" : employee.email} />
                            <p class="errors">{errors?.email}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input">
                            <label for="address">Address</label>
                            <input name="address" value={employee.address == null ? "" : employee.address} />
                            <p class="errors">{errors?.address}</p>
                        </div>
                        <div class="input">
                            <label for="city">City</label>
                            <input name="city" value={employee.city == null ? "" : employee.city} />
                            <p class="errors">{errors?.city}</p>
                        </div>
                        <div class="input">
                            <label for="state">State</label>
                            <select name="state" id="state">
                                <option defaultValue={employee.state}>{employee.state}</option>
                                <option value="Alabama">Alabama</option>
                                <option value="Alaska">Alaska</option>
                                <option value="Arizona">Arizona</option>
                                <option value="Arkansas">Arkansas</option>
                                <option value="California">California</option>
                                <option value="Colorado">Colorado</option>
                                <option value="Connecticut">Connecticut</option>
                                <option value="Delaware">Delaware</option>
                                <option value="Florida">Florida</option>
                                <option value="Georgia">Georgia</option>
                                <option value="Hawaii">Hawaii</option>
                                <option value="Idaho">Idaho</option>
                                <option value="Illinois">Illinois</option>
                                <option value="Indiana">Indiana</option>
                                <option value="Iowa">Iowa</option>
                                <option value="Kansas">Kansas</option>
                                <option value="Kentucky">Kentucky</option>
                                <option value="Louisiana">Louisiana</option>
                                <option value="Maine">Maine</option>
                                <option value="Maryland">Maryland</option>
                                <option value="Massachusetts">Massachusetts</option>
                                <option value="Michigan">Michigan</option>
                                <option value="Minnesota">Minnesota</option>
                                <option value="Mississippi">Mississippi</option>
                                <option value="Missouri">Missouri</option>
                                <option value="Montana">Montana</option>
                                <option value="Nebraska">Nebraska</option>
                                <option value="Nevada">Nevada</option>
                                <option value="New Hampshire">New Hampshire</option>
                                <option value="New Jersey">New Jersey</option>
                                <option value="New Mexico">New Mexico</option>
                                <option value="New York">New York</option>
                                <option value="North Carolina">North Carolina</option>
                                <option value="Ohio">Ohio</option>
                                <option value="Oklahoma">Oklahoma</option>
                                <option value="Oregon">Oregon</option>
                                <option value="Pennsylvania">Pennsylvania</option>
                                <option value="Rhode Island">Rhode Island</option>
                                <option value="South Carolina">South Carolina</option>
                                <option value="South Dakota">South Dakota</option>
                                <option value="Tennessee">Tennessee</option>
                                <option value="Texas">Texas</option>
                                <option value="Utah">Utah</option>
                                <option value="Vermont">Vermont</option>
                                <option value="Virginia">Virginia</option>
                                <option value="Washington">Washington</option>
                                <option value="West Virginia">West Virginia</option>
                                <option value="Wisconsin">Wisconsin</option>
                                <option value="Wyoming">Wyoming</option>
                                {/* <option value="Alabama">Alabama</option> */}
                            </select>
                            <p class="errors">{errors?.state}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input">
                            <label for="zip">Zip Code</label>
                            <input name="zip" value={employee.zip == null ? "" : employee.zip} />
                            <p class="errors">{errors?.zip}</p>
                        </div>
                        <div class="input">
                            <label for="cellPhone">Cell Phone</label>
                            <input name="cellPhone" value={employee.cellPhone == null ? "" : employee.cellPhone} />
                            <p class="errors">{errors?.cellPhone}</p>
                        </div>
                        <div class="input">
                            <label for="homePhone">Home Phone</label>
                            <input name="homePhone" value={employee.homePhone == null ? "" : employee.homePhone} />
                            <p class="errors">{errors?.homePhone}</p>
                        </div>
                    </div>
                    <div class="choices">
                        <button onClick={handleConfirmChanges} id="confirm_changes_btn" type="submit">Confirm Changes</button>
                        <button onClick={handleDelete} id="delete_btn" type="submit">Delete Employee</button>
                    </div>
        
                </div>
            </div>
            <button onClick={returnToList} id="list_return_btn">Back to list</button>
        </div>
    )
}
