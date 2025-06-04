import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from 'react';
import "../assets/styles/kontakt.css";
import Header from '../components/header';
import Footer from '../components/footer';

function Kontakt() {

    const navigate = useNavigate();

    const handleDropdownClick = (path, sectionId) => {
        navigate(path, { state: { sectionId } });
    };

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const [ime, setIme] = useState("");
    const [email, setEmail] = useState("");
    const [poruka, setPoruka] = useState("");
    const [obavijest, setObavijest] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!ime || !email || !poruka) {
            setObavijest('Morate popuniti sva polja!');
            return;
        }

        const novaPoruka = {
            ime,
            email,
            poruka,
            datum: new Date().toLocaleString()
        };

        try{
            const res = await fetch('http://localhost:3000/messages', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(novaPoruka)
            });
            if(res.ok){
                console.log('Kontakt forma: ',{ime,email,poruka})
                setObavijest('Poruka uspješno poslana!');
                setIme('');
                setEmail('');
                setPoruka('');
            }else{
                setObavijest('Desila se pogreška prilikom slanja!');
            }
        }catch(error){
            console.log('Server nije dostupan!');
        }

    };

    return (
        <div>
            <div className="header-box">
                <div className="logo">
                    <img src="/slike/logo.jpg" alt="The Green Nook Logo" />
                </div>

                {/* Burger dugme – vidi se samo na mobilnim uređajima */}
                <button className="burger-btn" onClick={toggleMenu} aria-label="Otvori meni">
                    &#9776;
                </button>

                {/* Sidebar meni za mobilni prikaz */}
                <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
                    <ul className="menu">
                        <li><Link to="/">Početna</Link></li>
                        <li><Link to="/onama">O nama</Link></li>
                        <li><Link to="/proizvodi">Proizvodi</Link></li>
                        <li><Link to="/login">Prijava</Link></li>
                    </ul>
                </div>

                <nav>
                    <ul className="menu" id="menu">
                        <li><Link to="/">Početna</Link></li>
                        <li className="dropdown">
                            <Link to="/onama" className="dropdown-trigger">O nama ▾</Link>
                            <ul className="dropdown-menu">
                                <li onClick={() => handleDropdownClick('/onama', 'rani-dani')}>Rani dani</li>
                                <li onClick={() => handleDropdownClick('/onama', 'popularnost')}>Dobijanje popularnosti</li>
                                <li onClick={() => handleDropdownClick('/onama', 'biznis')}>Od hobija do biznisa</li>
                                <li onClick={() => handleDropdownClick('/onama', 'filozofija')}>Naša filozofija</li>
                                <li onClick={() => handleDropdownClick('/onama', 'dostava')}>Dostava</li>
                                <li onClick={() => handleDropdownClick('/onama', 'energija')}>Energija i klima</li>
                            </ul>
                        </li>

                        <li className="dropdown">
                            <Link to="/proizvodi" className="dropdown-trigger">Proizvodi ▾</Link>
                            <ul className="dropdown-menu">
                                <li onClick={() => handleDropdownClick('/proizvodi', 'cajevi')}>Čajevi</li>
                                <li onClick={() => handleDropdownClick('/proizvodi', 'kreme')}>Kreme</li>
                                <li onClick={() => handleDropdownClick('/proizvodi', 'sapuni')}>Sapuni</li>
                                <li onClick={() => handleDropdownClick('/proizvodi', 'ulja')}>Ulja</li>
                            </ul>
                        </li>
                        <li><Link to="/login">Prijava</Link></li>
                    </ul>
                </nav>
                <div className="header-right">
                    {/* Pretraga */}
                    <div className="search-box">
                        <input type="text" placeholder="Pretraživanje..." />
                        <button className="search-btn" aria-label="Pretraži">
                            🔍
                        </button>
                    </div>

                    {/* Srce za omiljene */}
                    <Link to="/favoriti" className="icon-btn" aria-label="Omiljeni proizvodi">
                        ❤
                    </Link>

                    {/* Korpa */}
                    <Link to="/korpa" className="icon-btn" aria-label="Korpa">
                        🛒
                    </Link>
                </div>
            </div>

            {/* Sekcija kontakt */}
            <div
                className="kontakt-wrapper"
                style={{
                    backgroundImage: "url('/slike/pozadina1.png')",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center"
                }}
            >
                <main>
                    <section id="kontakt">
                        <h2>Kontakt</h2>
                        <p>Kontaktirajte nas putem emaila ili popunite formu ispod za dodatne informacije.</p>
                        <form onSubmit={handleSubmit}>
                            <input
                                type="text"
                                placeholder="Vaše ime"
                                value={ime}
                                onChange={(e) => setIme(e.target.value)}
                                required
                            />
                            <input
                                type="email"
                                placeholder="Vaš email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <textarea
                                placeholder="Vaša poruka"
                                rows="5"
                                value={poruka}
                                onChange={(e) => setPoruka(e.target.value)}
                                required
                            ></textarea>
                            <button type="submit">Pošalji</button>
                            {obavijest && <p style={{color:'green'}}>{obavijest}</p>}
                        </form>
                        <p>Možete nas kontaktirati i mobilnim broj: 063 987 322</p>
                        <p>Email: <a href="mailto:info@thegreennook.com">info@thegreennook.com</a></p>
                        <p>Pratite nas i na društvenim mrežama:</p>
                        <div className="social-links">
                            <a href="https://www.instagram.com/thegreennook" target="_blank" rel="noreferrer">Instagram</a>
                            <a href="https://www.facebook.com/thegreennook" target="_blank" rel="noreferrer">Facebook</a>
                            <a href="https://twitter.com/thegreennook" target="_blank" rel="noreferrer">Twitter</a>
                        </div>
                    </section>
                    <div className="mapa-container">
                        <h3>Naša lokacija:</h3>
                        <iframe
                            title="Mapa The Green Nook"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2860.450232214426!2d17.904986715589476!3d44.20582757910402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475ee235f34f2363%3A0x57ad90505c48b94e!2sPolitehni%C4%8Dki%20fakultet%2C%20Univerzitet%20u%20Zenici!5e0!3m2!1shr!2sba!4v1717000000000!5m2!1shr!2sba"
                            width="100%"
                            height="300"
                            style={{ border: 0, borderRadius: '10px', marginTop: '20px' }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default Kontakt;