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
        setTimeout(() => {
            history.push("/dashboard")
        }, 500);
    }

    return (
        <>
            {state.username.length > 0 ? (
                history.push("/dashboard")
            ) : (
                <div class="login-container">
                    <div class="login-form">
                        <div class="title">
                            <h1>Login</h1>
                        </div>
                        <div class="form">
                        <span id="error">Incorrect email or password. Please try again. </span>
                            <div class="input">
                                <div class="field">
                                    <div class="email-icon">＠</div>
                                    <input name="email" type="text" placeholder="Email" required />
                                </div>
                            </div>
                            <div class="input">
                                <div class="field">
                                    <div class="password-icon">🔑</div>
                                    <input name="password" type="password" placeholder="Password" required />
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
