import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from "../components/header";
import Footer from "../components/footer";
import '../assets/styles/welcome.css';

function Welcome() {
    const [korisnik, setKorisnik] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const spremljeniKorisnik = localStorage.getItem('ulogovaniKorisnik');
        if (spremljeniKorisnik) {
            setKorisnik(JSON.parse(spremljeniKorisnik));
        } else {
            navigate('/login');
        }
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem('ulogovaniKorisnik');
        navigate('/login');
    };

    const handleNavigation = () => {
        if (korisnik && korisnik.role === 'admin') {
            navigate('/dashboard');
        } else {
            navigate('/');
        }
    };

    return (
        <div className="welcome-container">
            <Header />

            {korisnik && (
                <div className="welcome-content">
                    <h2>Dobro došao/la, {korisnik.ime}!</h2>
                    <p>Uspješno ste prijavljeni kao <b>{korisnik.role}</b>.</p>
                    <div className="welcome-buttons">
                        <button onClick={handleNavigation}>
                            {korisnik.role === 'admin' ? 'Dashboard' : 'Idi na početnu'}
                        </button>
                        <button onClick={handleLogout}>Odjavi se</button>
                    </div>
                </div>
            )}

            <Footer />
        </div>
    );
}

export default Welcome;
