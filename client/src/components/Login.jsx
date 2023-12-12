import React, { useState, useEffect } from 'react';
import "./Register.css";
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        const auth = localStorage.getItem('user');
        if (auth) {
            navigate("/")
        }
    }, []); 

    const handleLogin = async (e) => {
        e.preventDefault()
       
            let result = await fetch("http://localhost:2500/api/Login", { 
                method:"POST",
                body:JSON.stringify({email,password}),
                headers:{
                    "Content-Type" : "application/json"

                },
            });

          result= await result.json()
          console.log(result)
          if(result.auth){
            localStorage.setItem("user",JSON.stringify(result.user));
            localStorage.setItem("token",JSON.stringify(result.auth));

            navigate("/")
          }

        }

    return (
        <>
            <div className="container">
                <form className="registration-form">
                    <h2>Login</h2>
                    
                    <div className="form-group">
                        <label For="email">Email:</label>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} name="email" required />
                    </div>
                    <div className="form-group">
                        <label For="password">Password:</label>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} name="password" required />
                    </div>
                    <button type="button" onClick={handleLogin}>Register</button>
                </form>
            </div>
        </>
    );
}

export default Login;
