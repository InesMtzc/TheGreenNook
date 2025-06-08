import { Link, useNavigate } from "react-router-dom";
import "../assets/styles/stilovi.css";
import { FaTruck, FaHeart, FaShieldAlt } from 'react-icons/fa';
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";
import Header from '../components/header';
import Footer from '../components/footer';
import React, { useState, useEffect } from 'react';

function Dashboard() {
    const navigate = useNavigate();

    // Poruka dobrodošlice (ako je potrebna za admina)
    const [poruka, setPoruka] = useState("Dobrodošli u administratorski dashboard!");

    // Primjer – dashboard sekcija može prikazivati broj proizvoda, korisnika...
    const [brojProizvoda, setBrojProizvoda] = useState(0);
    const [brojKorisnika, setBrojKorisnika] = useState(0);
    const handleLogout = () => {
        // Primjer: obriši podatke o korisniku iz lokalnog storage-a
        localStorage.removeItem("ulogovaniKorisnik");

        // Ako koristiš neki globalni kontekst za autentifikaciju, obriši i tamo

        // Preusmjeri na početnu stranicu
        navigate("/");
    };


    useEffect(() => {
        // Primjer: dohvati broj proizvoda
        fetch("http://localhost:3000/proizvodi")
            .then(res => res.json())
            .then(data => setBrojProizvoda(data.length))
            .catch(err => console.error("Greška prilikom dohvata proizvoda:", err));

        // Primjer: dohvati broj korisnika
        fetch("http://localhost:3000/korisnici")
            .then(res => res.json())
            .then(data => setBrojKorisnika(data.length))
            .catch(err => console.error("Greška prilikom dohvata korisnika:", err));
    }, []);

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <>

            <div>
                <Header />
                <div className="header-box">
                    <div className="logo">
                        <img src="/slike/logo.jpg" alt="The Green Nook Logo" />
                    </div>

                    <button className="burger-btn" onClick={toggleMenu} aria-label="Otvori meni">
                        &#9776;
                    </button>

                    <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
                        <ul className="menu">
                            <li><Link to="/proizvodi">Proizvodi</Link></li>
                            <li><Link to="/onama">O nama</Link></li>
                            <li><Link to="/korisnici">Korisnici</Link></li>
                            <li><Link to="/poruke">Poruke</Link></li>
                            <li><a href="#" onClick={(e) => { e.preventDefault(); handleLogout(); }}>Odjava</a></li>
                            <li><Link to="/dodajproizvod">Dodaj proizvod</Link></li>


                        </ul>
                    </div>

                    <nav>
                        <ul className="menu" id="menu">
                            <li><Link to="/proizvodi">Proizvodi</Link></li>
                            <li><Link to="/onama">O nama</Link></li>
                            <li><Link to="/korisnici">Korisnici</Link></li>
                            <li><Link to="/poruke">Poruke</Link></li>
                            <li><a href="#" onClick={(e) => { e.preventDefault(); handleLogout(); }}>Odjava</a></li>
                            <li><Link to="/dodajproizvod">Dodaj proizvod</Link></li>
                        </ul>
                    </nav>
                </div>

                <main>
                    <section className="hero-section">
                        <div className="hero-overlay">
                            <h1 className="hero-title">Administratorski dashboard</h1>
                            <h4 className="hero-subtitle">Pregled i upravljanje</h4>
                        </div>
                    </section>

                    <section className="featured">
                        <h2>Pregled</h2>
                        <div className="featured-items">
                            <div className="item">
                                <h3>Broj proizvoda</h3>
                                <p>{brojProizvoda}</p>
                            </div>
                            <div className="item">
                                <h3>Broj korisnika</h3>
                                <p>{brojKorisnika}</p>
                            </div>
                        </div>
                    </section>

                    <div className="features-icons">
                        <div className="feature-icon">
                            <FaTruck size={55} color="darkolivegreen" />
                            <p>Brza dostava</p>
                        </div>
                        <div className="feature-icon">
                            <FaHeart size={55} color="crimson" />
                            <p>Zadovoljstvo kupaca</p>
                        </div>
                        <div className="feature-icon">
                            <FaShieldAlt size={55} color="violet" />
                            <p>Sigurna kupovina</p>
                        </div>
                    </div>
                </main>

                <footer className="form-box footer-layout">
                    <div className="footer-left">
                        <h2>Admin sekcija</h2>
                        <p>Upravljanje sadržajem i korisnicima</p>
                    </div>

                    <div className="footer-center">
                        <p>Brzi linkovi</p>
                        <a href="https://www.instagram.com/thegreennook" target="_blank" rel="noreferrer">👉 @thegreennook</a>
                        <div className="social-icons">
                            <a href="https://www.instagram.com/thegreennook" target="_blank" rel="noreferrer"><FaInstagram /></a>
                            <a href="https://www.facebook.com/thegreennook" target="_blank" rel="noreferrer"><FaFacebookF /></a>
                            <a href="https://twitter.com/thegreennook" target="_blank" rel="noreferrer"><FaTwitter /></a>
                        </div>
                    </div>

                    <div className="footer-right">
                        <ul className="footer-menu">
                            <li><Link to="/dashboard">Dashboard</Link></li>
                            <li><Link to="/proizvodi">Proizvodi</Link></li>
                            <li><Link to="/korisnici">Korisnici</Link></li>
                            <li><Link to="/logout">Odjava</Link></li>
                        </ul>
                    </div>
                </footer>
                <Footer />
            </div>
        </>
    );
}

export default Dashboard;
