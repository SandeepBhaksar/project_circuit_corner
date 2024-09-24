import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <form onSubmit={handleLogin}> 
            <h3>Login</h3>

            <div className="mb-3">
                <label>Email Address</label>
                <input 
                    type="email" 
                    className="form-control" 
                    placeholder="Enter Email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    required
                />
            </div>

            <div className="mb-3">
                <label>Password</label>
                <input 
                    type="password" 
                    className="form-control" 
                    placeholder="Enter Password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    required
                />
            </div>

            <div className="mb-3">
                <button className="btn btn-primary" type="submit">
                    Login
                </button>
            </div>

            <p className="text-right">
                New User? <NavLink to="/signup">Register here</NavLink>
            </p>
        </form>
    );
}

export default Login;
