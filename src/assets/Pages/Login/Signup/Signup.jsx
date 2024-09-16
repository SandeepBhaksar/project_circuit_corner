import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom"; // Import NavLink and useNavigate
import { auth, db } from "../firebase";
import { setDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";

const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            const user = auth.currentUser;
            console.log(user);
            if (user) {
                await setDoc(doc(db, "User", user.uid), {
                    email: email,
                    firstName: fname,
                    lastName: lname,
                });
            }
            console.log("User Registered Successfully!!!");
            navigate("/login");
            toast.success("User Registered Successfully!!!", { position: "top-center" });
        } catch (error) {
            setError(error.message);
            toast.error(error.message, { position: "bottom-center" });
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
