import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from 'react-router-dom';
import Login from "./pages/LoginAutentifikacija";
import Pocetna from "./pages/pocetna";
import Onama from "./pages/onama";
import Proizvodi from "./pages/proizvodi";
import Kontakt from "./pages/kontakt";
import Dostava from "./pages/dostava";
import { useEffect, useState } from "react";
import './App.css';
import './assets/styles/stilovi.css';
import RegisterForma from "./components/RegisterForma";

function App() {
    const [ulogovaniKorisnik, setUlogovaniKorisnik] = useState(null);

    useEffect(() => {
        const spremljeniKorisnik = localStorage.getItem('ulogovaniKorisnik');
        if (spremljeniKorisnik) {
            setUlogovaniKorisnik(JSON.parse(spremljeniKorisnik));
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('ulogovaniKorisnik');  // obriši iz localStorage
        setUlogovaniKorisnik(null);
    };



    return (
        <Router>
            <div className="App">
                <main>
                    <Routes>
                        <Route path="/login" element={<Login />} />
                        <Route path="/signup" element={<RegisterForma />} />
                        <Route path="/" element={<Pocetna />} />
                        <Route path="/onama" element={<Onama />} />
                        <Route path="/proizvodi" element={<Proizvodi />} />
                        <Route path="/kontakt" element={<Kontakt />} />
                        <Route path="/dostava" element={<Dostava />} />
                        <Route path="/login" element={<Login setUlogovaniKorisnik={setUlogovaniKorisnik} />}/>


                    </Routes>
                </main>
            </div>

        </Router>
    );
}

export default App;

