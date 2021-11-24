import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import HandleBadCredentials from '../../helpers/HandleBadCredentials.jsx';
import { api } from '../../services/api.js';
import validation from '../validation.js';

export default function EmployeeCreate(props) {
    const { state } = props;

    const history = useHistory();
    const [errors, setErrors] = useState();
    const [auth, setAuth] = useState();
    const [employee, setEmployee] = useState([{
        "firstName": "",
        "lastName": "",
        "email": "",
        "address": "",
        "city": "",
        "state": "",
        "zip": "",
        "cellPhone": "",
        "homePhone": "",
    }]);

    useEffect(() => {
        
    }, []);

    const handleChange = e => {
        const { name, value } = e.target;
        setErrors(prevState => ({...prevState, [name]: ""})) // erases error field while editing input field
        setEmployee(prevState => ({...prevState, [name]: value })); // updates employee field
    };

    const handleSubmit = () => {
        const err = validation(employee);

        if(Object.keys(err).length > 0) {
            console.log("ERRORS: ", err);
            console.log("EMP OBJ: ", employee);
            setErrors(err)
            return null;
        } else {
            api.employee_service.createEmployee(employee)
            .then(resp => console.log(resp))

            setTimeout(() => {
                history.push("/employee/all")
            }, 500);
        };
    };

    const returnToDashboard = () => {
        history.push("/dashboard");
    };

    return (
        <>
        {state.username.length > 0 ? (
                <>
                    {auth === 401 ? (
                        <HandleBadCredentials />
                    ) : (
                        <div className="form_container">
                            <div className="edit__form">
                                <div className="title">
                                    <h1>Create</h1>
                                </div>
                                <div className="rows">
                                    <div className="row">
                                        <div class="input">
                                            <label htmlFor="firstName">First Name</label>
                                            <input onChange={handleChange} minLength="4" maxLength="35" name="firstName" value={employee.firstName}/>
                                            <p className="errors">{errors?.firstName}</p>
                                        </div>
                                        <div className="input">
                                            <label htmlFor="lastName">Last Name</label>
                                            <input onChange={handleChange} minLength="4" maxLength="35" name="lastName" value={employee.lastName} />
                                            <p classname="errors">{errors?.lastName}</p>
                                        </div>
                                        <div className="input">
                                            <label htmlFor="email">Email</label>
                                            <input onChange={handleChange} type="email" name="email" value={employee.email} />
                                            <p className="errors">{errors?.email}</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="input">
                                            <label fhtmlFor="address">Address</label>
                                            <input onChange={handleChange} name="address" value={employee.address} />
                                            <p className="errors">{errors?.address}</p>
                                        </div>
                                        <div className="input">
                                            <label htmlFor="city">City</label>
                                            <input onChange={handleChange} name="city" value={employee.city} />
                                            <p className="errors">{errors?.city}</p>
                                        </div>
                                        <div className="input">
                                            <label htmlFor="state">State</label>
                                            <select onChange={handleChange} name="state" id="state">
                                                <option defaultValue="--SELECT--" disabled>--SELECT--</option>
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
                                            <p className="errors">{errors?.state}</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="input">
                                            <label htmlFor="zip">Zip Code</label>
                                            <input onChange={handleChange} name="zip" value={employee.zip} />
                                            <p className="errors">{errors?.zip}</p>
                                        </div>
                                        <div className="input">
                                            <label htmlFor="cellPhone">Cell Phone</label>
                                            <input onChange={handleChange} name="cellPhone" value={employee.cellPhone} type="tel"/>
                                            <p className="errors">{errors?.cellPhone}</p>
                                        </div>
                                        <div className="input">
                                            <label for="homePhone">Home Phone</label>
                                            <input onChange={handleChange} name="homePhone" value={employee.homePhone} type="tel" />
                                            <p className="errors">{errors?.homePhone}</p>
                                        </div>
                                    </div>
                                    <button onClick={handleSubmit} id="confirm_changes_btn" type="submit">Confirm</button>
                                </div>
                            </div>
                            <button onClick={returnToDashboard} id="list_return_btn">Back to Dashboard</button>
                        </div>
                    )}
                </>
            ) : (
                <HandleBadCredentials />
            )}
        </>
    )
}
