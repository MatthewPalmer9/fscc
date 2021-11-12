import React from 'react';
import { useHistory } from 'react-router-dom';
import '../styles/navbar/navbar.css';

export default function Navbar(props) {
    const {state} = props;
    
    const history = useHistory();

    const redirectToLogin = () => {
        history.push("/login");
    }

    const logout = () => {
        props.logout();
        history.push("/login");
    }

    console.log(state)
    return (
        <>
            {state.username ? (
                <>
                    <nav id="navbar">
                        <div>
                            <span><a href="/">EmployeeBuddy</a></span>
                        </div>
                        <div>
                            <span id="current__user">{state.username}</span>
                            <button onClick={logout}>LOGOUT</button>
                        </div>
                    </nav>
                </>
            ) : (
                <>
                    <nav id="navbar">
                        <div>
                        <span><a href="/">EmployeeBuddy</a></span>
                        </div>
                        <div>
                            <button onClick={redirectToLogin}>LOGIN</button>
                        </div>
                    </nav>
                </>
            )}
        </>
    )
}
