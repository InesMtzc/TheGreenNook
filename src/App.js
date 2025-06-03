import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginForma from "./components/LoginForma";
import RegisterForma from "./components/RegisterForma";
import Pocetna from "./pages/pocetna";
import Onama from "./pages/onama";
import Proizvodi from "./pages/proizvodi";
import ProizvodiDetalji from './pages/ProizvodiDetalji';
import Kontakt from "./pages/kontakt";
import Header from "./components/header";
import Footer from './components/footer';
import { useEffect, useState } from "react";
import './App.css';
import './assets/styles/stilovi.css';

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
        localStorage.removeItem('ulogovaniKorisnik');
        setUlogovaniKorisnik(null);
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <Router>
            <div className="App">
                <Routes>
                    {/* Login ruta sa LoginForma i prop onLogin */}
                    <Route path="/login" element={<LoginForma onLogin={setUlogovaniKorisnik} />} />

                    <Route path="/signup" element={<RegisterForma />} />

                    <Route path="/" element={<Pocetna />} />
                    <Route path="/onama" element={
                        <>
                            <Header />
                            <Onama />
                            <Footer />
                        </>
                    } />
                    <Route path="/proizvodi" element={
                        <>
                            <Header />
                            <Proizvodi />
                            <Footer />
                        </>
                    } />
                    <Route path="/proizvodi/:id" element={
                        <>
                            <Header />
                            <ProizvodiDetalji />
                            <Footer />
                        </>
                    } />
                    <Route path="/kontakt" element={
                        <>
                            <Header />
                            <Kontakt />
                            <Footer />
                        </>
                    } />


                </Routes>

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
            </div>
        </Router>
    );
}

export default App;