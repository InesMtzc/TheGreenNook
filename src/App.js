import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from 'react-router-dom';
import Login from "./pages/LoginAutentifikacija";
import Pocetna from "./pages/pocetna";
import Onama from "./pages/onama";
import Proizvodi from "./pages/proizvodi";
import ProizvodiDetalji from './pages/ProizvodiDetalji';
import Kontakt from "./pages/kontakt";
import Dostava from "./pages/dostava";
import { useEffect, useState } from "react";
import './App.css';
import './assets/styles/stilovi.css';
import RegisterForma from "./components/RegisterForma";
import Header from "./components/header";
import Footer from './components/footer';


function App() {
    const [ulogovaniKorisnik, setUlogovaniKorisnik] = useState(null);
    const [showScrollButton, setShowScrollButton] = useState(false);
    useEffect(() => {
        const spremljeniKorisnik = localStorage.getItem('ulogovaniKorisnik');
        if (spremljeniKorisnik) {
            setUlogovaniKorisnik(JSON.parse(spremljeniKorisnik));
        }

    const handleScroll = () => {
        setShowScrollButton(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
}, []);
    const handleLogout = () => {
        localStorage.removeItem('ulogovaniKorisnik');  // obriši iz localStorage
        setUlogovaniKorisnik(null);
    };
const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};


    return (
        <Router>
            <div className="App">
                <Header />
                <main>
                    <Routes>
                        <Route path="/login" element={<Login />} />
                        <Route path="/signup" element={<RegisterForma />} />
                        <Route path="/" element={<Pocetna />} />
                        <Route path="/onama" element={<Onama />} />
                        <Route path="/proizvodi" element={<Proizvodi />} />
                        <Route path="/proizvodi/:id" element={<ProizvodiDetalji />} />
                        <Route path="/kontakt" element={<Kontakt />} />
                        <Route path="/dostava" element={<Dostava />} />
                        <Route path="/login" element={<Login setUlogovaniKorisnik={setUlogovaniKorisnik} />}/>


                    </Routes>
                </main>
                {showScrollButton && (
                    <button
                        onClick={scrollToTop}
                        style={{
                            position: 'fixed',
                            bottom: '40px',
                            right: '30px',
                            fontSize: '30px',
                            color: 'black',
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            zIndex: 999,
                        }}
                    >
                        ↑
                    </button>
                )}

                <Footer />
            </div>

        </Router>
    );
}

export default App;

