import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../assets/styles/kontakt.css";
import Header from '../components/header';
import Footer from '../components/footer';

function Kontakt() {

    const navigate = useNavigate();

    const handleDropdownClick = (path, sectionId) => {
        navigate(path, { state: { sectionId } });
    };

    return (
        <div>
            <div className="header-box">
                <div className="logo">
                    <img src="/slike/logo.jpg" alt="The Green Nook Logo" />
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

                        <form>
                            <input type="text" placeholder="Vaše ime" required />
                            <input type="email" placeholder="Vaš email" required />
                            <textarea placeholder="Vaša poruka" rows="5" required></textarea>
                            <button type="submit">Pošalji</button>
                        </form>

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