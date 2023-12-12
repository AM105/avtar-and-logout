import React, { useState, useEffect } from 'react';
import "./Register.css";
import { useNavigate } from 'react-router-dom';

function Register() {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        const auth = localStorage.getItem('user');
        if (auth) {
            navigate("/")
        }
    }, []); 

    const handleRegister = async (e) => {
        e.preventDefault()
        if (!name || !email || !password) {
            console.log("Please fill in all the required fields");
            return;
        }
       
            let result = await fetch("http://localhost:2500/api/register", { 
                method:"POST",
                body:JSON.stringify({name,email,password}),
                headers:{
                    "Content-Type" : "application/json"

                },
            });

          result= await result.json()
          console.log(result)
          if(result){
            navigate("/login")
          }

        }

    return (
        <>
            <div className="container">
                <form className="registration-form">
                    <h2>Register</h2>
                    <div className="form-group">
                    <label for="username">Username:</label>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} name="username" required/>
                    </div>
                    <div className="form-group">
                    <label for="email">Email:</label>
                        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} name="email" required/>
                    </div>
                    <div className="form-group">
                    <label for="password">Password:</label> 
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} name="password" required/>
                    </div>
                    <button type="button" onClick={handleRegister}>Register</button>
                </form>
            </div>
        </>
    );
}

export default Register;
