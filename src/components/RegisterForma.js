import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/registracijastil.css';

function RegisterForma({ onRegister }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [ime, setIme] = useState('');

    // RegisterForma.js
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Provjeri da li već postoji korisnik s tim emailom
            const provjera = await fetch(`http://localhost:3000/users?email=${email}`);
            const postojeci = await provjera.json();
            if (postojeci.length > 0) {
                alert('Već postoji korisnik s ovim emailom!');
                return;
            }

            // Upis novog korisnika
            const noviKorisnik = { ime, email, password, role: "gost" };
            const res = await fetch('http://localhost:3000/users', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(noviKorisnik),
            });
            if (res.ok) {
                setIme('');
                setEmail('');
                setPassword('');
                alert('Uspješno ste registrovani. Možete se prijaviti.');
                if (onRegister) onRegister(noviKorisnik);
            } else {
                console.log('Greška prilikom registracije');
            }
        } catch (error) {
            console.log('Server nije dostupan!');
        }
    };


    return (
        <div className="login-wrapper" style={{
            backgroundImage: "url('/slike/kontakt.jpg')",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center"
        }}>
            <form onSubmit={handleSubmit}>
                <h2>SIGN UP</h2>
                <input
                    type='text'
                    placeholder="Vaše ime"
                    value={ime}
                    onChange={(e) => setIme(e.target.value)}
                    required
                />
                <input
                    type='email'
                    placeholder="Vaš email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type='password'
                    placeholder="Vaša lozinka"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit" style={{ color: 'white' }}>Registruj se</button>

                <p style={{ color: 'white', marginTop: '10px' }}>
                    Imate račun?{' '}
                    <Link to="/login" style={{ color: 'white', textDecoration: 'underline' }}>
                        Uloguj se
                    </Link>
                </p>
            </form>
        </div>
    );
}

export default RegisterForma;
