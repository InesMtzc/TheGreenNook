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
        <div className="register-wrapper" style={{
            backgroundImage: "url('/slike/pozadina1.png')",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center"
        }}> {/* koristi istu klasu kao login da zadržiš stil */}
            <form onSubmit={handleSubmit}>
                <h2>Registracija</h2>
                <input
                    type='text'
                    placeholder="Ime"
                    value={ime}
                    onChange={(e) => setIme(e.target.value)}
                    required
                />
                <input
                    type='email'
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type='password'
                    placeholder="Lozinka"
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

