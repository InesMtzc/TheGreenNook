import React, { useState } from 'react';
import '../assets/styles/registracijastil.css';
import {Link, useNavigate} from "react-router-dom";

function RegisterForm({ onRegister }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [ime, setIme] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const noviKorisnik = {
            ime,
            email,
            password,
            role: "gost"
        };
        try {
            const res = await fetch('http://localhost:5000/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(noviKorisnik)
            });
            if (res.ok) {
                setIme('');
                setEmail('');
                setPassword('');
                onRegister(noviKorisnik);

            } else {
                console.log('Greška prilikom registracije');
            }
        } catch (error) {
            console.log('Server nije dostupan!');
        }
    };

    return (
        <div className="login-wrapper"> {/* koristi istu klasu kao login da zadržiš stil */}
            <form onSubmit={handleSubmit}>
                <h2>Registracija</h2>
                <label>Ime</label>
                <input
                    type='text'
                    value={ime}
                    onChange={(e) => setIme(e.target.value)}
                    required
                />
                <label>Email</label>
                <input
                    type='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <label>Lozinka</label>
                <input
                    type='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit" style={{ color: 'white' }}>Registruj se</button>
                <p style={{ marginTop: '10px' }}>Imate račun?
                    <Link to="/login" style={{ color: 'white', textDecoration: 'underline' }}>
                        Uloguj se
                    </Link></p>
            </form>
        </div>
    );
}

export default RegisterForm;

