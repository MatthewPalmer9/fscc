import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../styles/login/login.css';

export default function Login(props) {
    const {state} = props;
    const [loginState, setLoginState] = useState({"email": "", "password": ""});
    const history = useHistory();

    const handleChange = e => {
        const { name, value } = e.target;
        setLoginState(prevState => ({...prevState, [name]: value}))
    }

    const onSubmit = e => {
        props.login(loginState)
        .catch(err => {
            const errorMsg = document.getElementById("error");
            errorMsg.style.display = "inline";
        })
    }

    return (
        <>
            {state.username.length > 0 ? (
                history.push("/dashboard")
            ) : (
                <div className="login-container">
                    <div className="login-form">
                        <div className="title">
                            <h1>Login</h1>
                        </div>
                        <div className="form">
                        <span id="error">Incorrect email or password. Please try again. </span>
                            <div className="input">
                                <div className="field">
                                    <div className="email-icon">＠</div>
                                    <input onChange={handleChange} name="email" type="text" placeholder="Email" required />
                                </div>
                            </div>
                            <div className="input">
                                <div className="field">
                                    <div className="password-icon">🔑</div>
                                    <input onChange={handleChange} name="password" type="password" placeholder="Password" required />
                                </div>
                            </div>
                            <button onClick={onSubmit} id="submit-btn" type="submit">Submit</button>
                        </div>
                    </div>
                </div>
            )}
        </>
        
    )
}
