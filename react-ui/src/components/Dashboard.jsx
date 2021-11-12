import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { api } from '../services/api';
import HandleBadCredentials from '../helpers/HandleBadCredentials';

export default function Dashboard(props) {
    const {state} = props;
    const history = useHistory();

    const [auth, setAuth] = useState();

    useEffect(() => {
        api.login_service.authcheck()
        .then(data => setAuth(data.status))
    }, [])

    const redirectToView = () => {
        history.push("/employee/all");
    };

    const redirectToCreate = () => {
        history.push("/employee/create");
    };

    return (
        <>
            {auth === 401 ? (
                <HandleBadCredentials />
            ) : (
                <>
                    <div class="container">
                        <div class="header">
                            <h1>Welcome to your dashboard!</h1>
                            <div class="dashboard-choices">
                                <button onClick={redirectToView} id="dash_view_btn">View Employees</button>
                                <button onClick={redirectToCreate} id="dash_create_btn">Create Employee</button>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    )
}
