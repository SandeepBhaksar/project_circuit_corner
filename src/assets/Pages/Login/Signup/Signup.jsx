import React, { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom"; // Import NavLink and useNavigate

const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSignup = (e) => {
        e.preventDefault();

        // Simulate a successful signup without backend logic
        try {
            // For now, we simply check that all fields are filled in
            if (!email || !password || !fname || !lname) {
                throw new Error("Please fill in all fields.");
            }

            // Simulate a successful registration
            console.log("User Registered Successfully!!!");
            alert("User Registered Successfully!!!");

            // Navigate to login after a successful signup
            navigate("/login");
        } catch (error) {
            // Handle error by showing it in an alert or state
            setError(error.message);
            alert(error.message);
        }
    };

    return (
        <form onSubmit={handleSignup}>
            <h3>Sign Up</h3>

            <div className="mb-3">
                <label>First Name</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="First Name"
                    value={fname}
                    onChange={(e) => setFname(e.target.value)}
                    required
                />
            </div>

            <div className="mb-3">
                <label>Last Name</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Last Name"
                    value={lname}
                    onChange={(e) => setLname(e.target.value)}
                    required
                />
            </div>

            <div className="mb-3">
                <label>Email</label>
                <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
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
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </div>

            {error && <div className="alert alert-danger">{error}</div>} {/* Show error if any */}

            <div className="sbm-btn">
                <button className="btn btn-primary" type="submit">Sign Up</button>
            </div>

            <p className="text-right">
                Already a member? <NavLink to="/login">Login here</NavLink>
            </p>
        </form>
    );
};

export default Signup;
