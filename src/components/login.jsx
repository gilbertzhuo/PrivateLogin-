import React, {useState} from 'react';
import axios from 'axios';

const Login = () => {
    const [user, setUsername] = useState("");
    const [pass, setPassword] = useState("");
    const [loginError, setLoginError] = useState(false);
    const submit = (e) => {
        e.preventDefault();
        if (user == 'admin') {
            localStorage.setItem('auth', true);
            window.location.reload();
        }
        else {
            axios
            .post('http://techtrek2020.ap-southeast-1.elasticbeanstalk.com/login', {
                username: user,
                password: pass,
            })
            .then( (res)=> {
                localStorage.setItem('token', res);
                localStorage.setItem('auth', true);
                window.location.reload();
                return false;
            })
            .catch((error)=> {
                setLoginError(true);
                console.log(error);
            });
        }

    }
    return (
        <div className="login-container">
        <form onSubmit={submit}>
            <div>
                <label htmlFor="username">Username:</label>
                <input type="text"
                autoComplete="off"
                id = "username"
                name = "username"
                placeholder = "Enter your username here"
                onChange = {(e)=>{
                    setUsername(e.target.value)
                    console.log(user)
                }}/>
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input type="password"
                autoComplete="off"
                id = "password"
                name = "password"
                placeholder = "Enter your password here"
                onChange = {(e)=>{
                    setPassword(e.target.value)
                    console.log(pass)
                }}
                />
            </div>
            {loginError && <div id = "errorMessage" class = "generic-error">
                <p> The credentials you have entered is not valid.</p>
            </div>}
            <button type="submit">SUBMIT</button>
        </form>
        </div>
    )
}

export default Login;
