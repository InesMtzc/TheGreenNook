import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForma from "../components/LoginForma";
import RegisterForma from "../components/RegisterForma";

function Login() {
    const [prikaziRegistraciju, setPrikaziRegistaciju] = useState(false);
    const [ulogovaniKorisnik, setUlogovaniKorisnik] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const spremljeniKorisnik = localStorage.getItem('ulogovaniKorisnik');
        if (spremljeniKorisnik) {
            const korisnik = JSON.parse(spremljeniKorisnik);
            setUlogovaniKorisnik(korisnik);
            // Ako je korisnik već prijavljen, direktno idi na welcome stranicu
            navigate('/welcome');
        }
    }, [navigate]);

    const handleLogin = (korisnik) => {
        console.log('Pokusaj prijave:', korisnik);
        setUlogovaniKorisnik(korisnik);
        navigate('/welcome');
    };

    const handleRegister = (korisnik) => {
        console.log('Pokusaj registracije:', korisnik);
    }

    return (
        <div style={{ padding: '20px' }}>
            {ulogovaniKorisnik ? (
                <div>
                    <h2>Dobro došao, {ulogovaniKorisnik.ime}!</h2>
                    <p>Uspješno ste prijavljeni kao {ulogovaniKorisnik.role}</p>
                </div>
            ) : (
                <>
                    <div style={{ marginBottom: '20px' }}>
                        <button onClick={() => setPrikaziRegistaciju(false)}>Prijava</button>
                        <button onClick={() => setPrikaziRegistaciju(true)}>Registracija</button>
                    </div>
                    {prikaziRegistraciju ? (
                        <RegisterForma onRegister={handleRegister} />
                    ) : (
                        <LoginForma onLogin={handleLogin} />
                    )}
                </>
            )}
        </div>
    );
}

export default Login;
