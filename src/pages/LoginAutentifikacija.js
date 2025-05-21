import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForma from "../components/LoginForma";
import RegisterForma from "../components/RegisterForma";
import '../assets/styles/autentifikacija.css';

function Login() {
        const [prikaziRegistraciju, setPrikaziRegistaciju] = useState(false);
        const [ulogovaniKorisnik, setUlogovaniKorisnik] = useState(null);
        useEffect(() => {
            const spremljeniKorisnik = localStorage.getItem('ulogovaniKorisnik');
            if (spremljeniKorisnik) {
                setUlogovaniKorisnik(JSON.parse(spremljeniKorisnik));
            }
        }, []);
        const navigate = useNavigate();


const handleLogin = (korisnik) => {
    console.log('Pokusaj prijave:', korisnik);
    setUlogovaniKorisnik(korisnik);
    localStorage.setItem('ulogovaniKorisnik', JSON.stringify(korisnik));

    // Sačekaj 3 sekunde, pa idi na home (ili admin dashboard)
    setTimeout(() => {
        if (korisnik.role === 'admin') {
            navigate('/admin-dashboard');  // ako napravimo admin stranicu
        } else {
            navigate('/home');  // gost ide na home
        }
    }, 3000);
};



    const handleRegister = (korisnik) => {
        // 1. Sačuvaj korisnika u localStorage i state
        localStorage.setItem('ulogovaniKorisnik', JSON.stringify(korisnik));
        setUlogovaniKorisnik(korisnik);

        // 2. Sačekaj 3 sekunde pa idi na home
        setTimeout(() => {
            navigate('/home');
        }, 3000); // 3000ms = 3 sekunde
    };






    const handleLogout = () => {
        localStorage.removeItem('ulogovaniKorisnik'); // ukloni korisnika iz localStorage
        setUlogovaniKorisnik(null); // resetuj stanje
        navigate('/login'); // preusmjeri nazad na login stranicu
    };

    return (
        <div style={{padding: '20px'}}>
            {ulogovaniKorisnik ? (
                <div>
                    <h3>Dobro došla, {ulogovaniKorisnik.ime}!</h3>
                    <p>Uspješno ste prijavljeni kao {ulogovaniKorisnik.role}</p>
                    <button onClick={handleLogout}>Odjavi se</button>  {/* dugme za odjavu */}
                </div>
            ) : (
                <>

                    {prikaziRegistraciju ? (
                        <div>
                            <h3>Dobro došla, {ulogovaniKorisnik.ime}!</h3>
                            <p>Uspješno ste prijavljeni kao {ulogovaniKorisnik.role}</p>
                            <button onClick={handleLogout}>Odjavi se</button>  {/* dugme za odjavu */}
                        </div>
                    ) : (
                <LoginForma onLogin={handleLogin}/>
                    )}
                </>
            )}
        </div>
    );
}

export default Login;