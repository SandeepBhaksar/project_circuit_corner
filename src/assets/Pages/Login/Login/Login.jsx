import React, { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { toast } from "react-toastify";
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {

            await signInWithEmailAndPassword(auth, email, password);
            toast.success("Login successful!", { position: "top-center" });
            navigate("/");
        } catch (error) {
            console.log("Login error object:", error);
            console.log("Error code:", error.code); 
            

            if (error.code === 'auth/invalid-email') {
                toast.error("Invalid email address. Please check your email format.", { position: "top-center" });
            } else if (error.code === 'auth/invalid-credential') {
                toast.error("No user found with this email. Please sign up.", { position: "top-center" });
            } else if (error.code === 'auth/invalid-credential') {
                toast.error("Incorrect password. Please try again.", { position: "top-center" });
            } else {

                toast.error("An unexpected error occurred. Please try again.", { position: "top-center" });
            }
        }
    };

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
