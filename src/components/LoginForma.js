import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from "react";
import '../assets/styles/loginstil.css';

function LoginForma({ onLogin }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [greska, setGreska] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const spremljeniKorisnik = localStorage.getItem('ulogovaniKorisnik');
        if (spremljeniKorisnik) {
            navigate('/welcome');
        } else {
            // Dozvoli korisniku da se vrati na /
            window.history.pushState(null, '', '/');
        }
    }, [navigate]);



    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch(`http://localhost:3000/users?email=${email}&password=${password}`);
            const podaci = await res.json();
            if (podaci.length > 0) {
                const korisnik = podaci[0];
                localStorage.setItem('ulogovaniKorisnik', JSON.stringify(korisnik));
                if (onLogin) onLogin(korisnik);
                navigate('/welcome');
            } else {
                setGreska('Nemate profil, registrujte se.');
            }
        } catch (error) {
            console.log('Server nije dostupan!');
            setGreska('Greška pri povezivanju s bazom.');
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
                <h2>LOGIN</h2>
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

                <button type="submit" style={{ color: 'white' }}>Prijavi se</button>
                {greska && <p style={{ color: 'red', marginTop: '10px' }}>{greska}</p>}

                <p style={{ color: 'white', marginTop: '10px' }}>Nemate račun?
                    <Link to="/signup" style={{ color: 'white', textDecoration: 'underline' }}>
                        Registruj se
                    </Link></p>
            </form>
        </div>
    );
}

export default LoginForma;
