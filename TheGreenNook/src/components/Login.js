import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="background">
            <div className="form-box">
                <h2>LOGIN</h2>
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Lozinka" />
                <button>Prijavi se</button>
                <p>Zaboravljena lozinka?</p>
                <p>Nemate račun? <Link to="/register">Registruj se</Link></p>
            </div>
        </div>
    );
};

export default Login;
