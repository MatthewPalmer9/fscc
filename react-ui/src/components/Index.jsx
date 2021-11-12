import React from 'react';
import { useHistory } from 'react-router-dom';
import '../styles/index/index.css';

export default function Index(props) {
    const {state} = props;
    const history = useHistory();

    return (
        <>
            {state.username.length > 0 ? (
                history.push("/dashboard")
            ) : (
                <div class="container">
                    <div class="header">
                        <h1>Welcome to EmployeeBuddy!</h1>
                        <h3><em>The best place to manage your employees!</em></h3>
                    </div>
                </div>
            )}
        </>
    )
}
