import React from "react";
import { Link, useNavigate } from "react-router-dom";
import './style.css';

const Login = () => {
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate("/home"); // vodi na početnu stranicu nakon prijave
    };

    return (
        <div className="background">
            <div className="form-box">
                <h2>LOGIN</h2>
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Lozinka" />
                <button onClick={()=>navigate("/home")}>Prijavi se</button>
                <p>Zaboravljena lozinka?</p>
                <p>Nemate račun? <Link to="/register">Registruj se</Link></p>
            </div>
        </div>
    );
};

export default Login;

