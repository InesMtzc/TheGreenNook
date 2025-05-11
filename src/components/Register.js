import React from "react";
import { Link } from "react-router-dom";
import './style.css';

const Register = () => {
    return (
        <div className="background">
            <div className="form-box">
                <h2>SIGN UP</h2>
                <input type="text" placeholder="Ime" />
                <input type="text" placeholder="Prezime" />
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Lozinka" />
                <input type="password" placeholder="Potvrdi lozinku" />
                <button>Registruj se</button>
                <p>Imate račun? <Link to="/login">Uloguj se</Link></p>
            </div>
        </div>
    );
};

export default Register;
