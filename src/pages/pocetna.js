import { Link, useNavigate } from "react-router-dom";
import "../assets/styles/stilovi.css";
import { FaTruck, FaHeart, FaShieldAlt } from 'react-icons/fa';
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";
import Header from '../components/header';
import Footer from '../components/footer';
import React, { useState, useEffect} from 'react';
import { useLocation } from "react-router-dom";


function Pocetna() {

    const [nasaponuda, setnasaponuda] = useState([]);
    useEffect(() => {
        fetch("http://localhost:3000/nasaponuda")
            .then(res => res.json())
            .then(data => setnasaponuda(data))
            .catch(err => console.error("Greška prilikom dohvata:", err));
    }, []);

    const [najtrazenijiproizvodi, setnajtrazenijjiproizvodi] = useState([]);
    useEffect(() => {
        fetch("http://localhost:3000/najtrazenijiproizvodi")
            .then(res => res.json())
            .then(data => setnajtrazenijjiproizvodi(data))
            .catch(err => console.error("Greška prilikom dohvata:", err));
    }, []);

    const [noviproizvodi, setnoviproizvodi] = useState([]);
    useEffect(() => {
        fetch("http://localhost:3000/noviproizvodi")
            .then(res => res.json())
            .then(data => setnoviproizvodi(data))
            .catch(err => console.error("Greška prilikom dohvata:", err));
    }, []);

    const instagramSlike = [
        "caj7.png",
        "krema3.png",
        "ulje8.png",
        "sapun5.png",
        "krema4.png",
        "caj6.png",
        "ulje11a.png"
    ];

    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (location.state) {
            if (location.state.loginSuccess) {
                setPoruka(`Dobrodošli nazad, ${location.state.korisnik.username}!`);
            } else if (location.state.registrationSuccess) {
                setPoruka("Registracija uspješna! Možete se prijaviti.");
            }
            // Po želji, resetuj state da se ne bi stalno prikazivalo:
            window.history.replaceState({}, document.title);
        }
    }, [location.state]);

    const [poruka, setPoruka] = useState("");

    const handleDropdownClick = (path, sectionId) => {
        navigate(path, { state: { sectionId } });
    };

    // Funkcija za dodavanje u korpu sa porukom
    const handleDodajUKorpu = (proizvod) => {
        setPoruka(`Proizvod "${proizvod.naziv}" je dodat u korpu.`);
        // Poruka nestaje nakon 3 sekunde
        setTimeout(() => {
            setPoruka("");
        }, 3000);
    };

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <>
            {poruka && (
                <div className="notifikacija">
                    {poruka}
                </div>
            )}
            <div>
                <Header />
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

                            <li><Link to="/kontakt">Kontakt</Link></li>
                            <li><Link to="/login">Prijava</Link></li>
                        </ul>
                    </nav>
                    <div className="header-right">
                        <div className="search-box">
                            <input type="text" placeholder="Pretraživanje..." />
                            <button className="search-btn" aria-label="Pretraži">
                                🔍
                            </button>
                        </div>

                        <Link to="/favoriti" className="icon-btn" aria-label="Omiljeni proizvodi">
                            ❤
                        </Link>

                        <Link to="/korpa" className="icon-btn" aria-label="Korpa">
                            🛒
                        </Link>
                    </div>
                </div>

                <main>
                    <section className="hero-section">
                        <div className="hero-overlay">
                            <h1 className="hero-title">Dobrodošli u The Green Nook</h1>
                            <h4 className="hero-subtitle">Tu smo za vaše tijelo, duh i dom</h4>

                        </div>
                    </section>

                    <section className="extra-image-section">
                        <img src="/slike/dodatnaslika.png" alt="Dodatna slika" />
                    </section>

                    <section className="featured">
                        <h2>Naša ponuda</h2>
                        <div className="featured-items">
                            {nasaponuda.map(({ id,slika, naziv, opis }, i) => (
                                <div className="item" key={id}>
                                    <img src={`/slike/${slika}`} alt={naziv} />
                                    <h3 style={{ textAlign: "center", fontSize: "35px", fontFamily: "Sacramento, cursive", color: "darkolivegreen" }}>
                                        {naziv}
                                    </h3>
                                    <p style={{ fontSize: "1rem", color: "#555", margin: "0 0 20px", textAlign: "center" }}>
                                        {opis}
                                    </p>
                                    <Link to="/proizvodi" className="button">Pogledaj ponudu</Link>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className="featured">
                        <h2>Najtraženiji proizvodi</h2>
                        <div className="featured-items">
                            {najtrazenijiproizvodi.map(({ id,slika, naziv, opis , cijena}, i) => (
                                <div className="item" key={id}>
                                    <img src={`/slike/${slika}`} alt={naziv} />
                                    <h3
                                        style={{
                                            textAlign: "center",
                                            fontSize: "35px",
                                            fontFamily: "Sacramento, cursive",
                                            color: "darkolivegreen",
                                        }}
                                    >
                                        {naziv}
                                    </h3>
                                    <p style={{ color: "#333", fontSize: "16px", textAlign: "center" }}>{opis}</p>
                                    <p
                                        style={{
                                            fontWeight: "bold",
                                            fontSize: "1.2rem",
                                            color: "darkgreen",
                                            textAlign: "center",
                                            margin: "0 0 15px",
                                        }}
                                    >
                                        {cijena} KM
                                    </p>
                                    <button className="button" onClick={() => handleDodajUKorpu({ id, slika, naziv, opis, cijena })}>
                                        Dodaj u korpu
                                    </button>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className="featured">
                        <h2>Novi proizvodi</h2>
                        <div className="featured-items">
                            {noviproizvodi.map(({id,slika, naziv, opis , cijena}, i) => (
                                <div className="item" key={`novi-${i}`}>
                                    <img src={`/slike/${slika}`} alt={naziv} />
                                    <h3
                                        style={{
                                            textAlign: "center",
                                            fontSize: "35px",
                                            fontFamily: "Sacramento, cursive",
                                            color: "darkolivegreen",
                                        }}
                                    >
                                        {naziv}
                                    </h3>
                                    <p style={{ color: "#333", fontSize: "16px", textAlign: "center" }}>{opis}</p>
                                    <p
                                        style={{
                                            fontWeight: "bold",
                                            fontSize: "1.2rem",
                                            color: "darkgreen",
                                            textAlign: "center",
                                            margin: "0 0 15px",
                                        }}
                                    >
                                        {cijena} KM
                                    </p>
                                    <button className="button" onClick={() => handleDodajUKorpu({ id, slika, naziv, opis, cijena })}>
                                        Dodaj u korpu
                                    </button>
                                </div>
                            ))}
                        </div>
                    </section>

                    <div className="features-icons">
                        <div className="feature-icon">
                            <FaTruck size={55} color="darkolivegreen" />
                            <p>Brza dostava širom BiH</p>
                        </div>
                        <div className="feature-icon">
                            <FaHeart size={55} color="crimson" />
                            <p>Zadovoljstvo kupaca je prioritet</p>
                        </div>
                        <div className="feature-icon">
                            <FaShieldAlt size={55} color="violet" />
                            <p>Sigurna i pouzdana kupovina</p>
                        </div>
                    </div>

                    <h4 style={{ textAlign: "center", fontFamily: "Sacramento, cursive", color: "darkolivegreen" }}>🌿 Pridruži nam se i na Instagramu 🌿</h4>
                    <div className="instagram-section">
                        <div className="instagram-info">
                            <img src="/slike/logo.jpg" alt="The Green Nook Logo" className="logo-img" />
                            <div className="instagram-text">
                                <a
                                    href="https://www.instagram.com/thegreennook"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="instagram-link"
                                >
                                    @thegreennook
                                </a>
                                <p>Zavirite iza zavjese, otkrijte biljne rituale, recepte i trenutke stvaranja.</p>
                            </div>
                        </div>

                        <div className="product-images">
                            {instagramSlike.map((slika, i) => (
                                <img
                                    key={i}
                                    src={`/slike/${slika}`}
                                    alt={`Instagram slika ${i + 1}`}
                                    className="mini-product"
                                />
                            ))}
                        </div>
                    </div>
                </main>

                <footer className="form-box footer-layout">
                    <div className="footer-left">
                        <h2>Naša obećanja kupcima 🌿</h2>
                        <p>Prirodni sastojci bez kompromisa</p>
                        <p>Ručna izrada s ljubavlju</p>
                        <p>Transparentnost u sastavu</p>
                        <p>Održivost i poštovanje prirode</p>
                        <p>Podrška i povjerenje</p>
                        <p>Zadovoljstvo zagarantovano</p>
                    </div>

                    <div className="footer-center">
                        <p style={{ marginTop: "60px"}}>✨ Biljni rituali</p>
                        <p>🍵 Čajni trenuci</p>
                        <p>🧼 Njega tijela</p>
                        <a
                            href="https://www.instagram.com/thegreennook"
                            target="_blank"
                            rel="noreferrer"
                        >
                            👉 @thegreennook
                        </a>

                        <div className="social-icons">
                            <a href="https://www.instagram.com/thegreennook" target="_blank" rel="noreferrer" style={{ marginTop: "10px", marginLeft: "125px"}}>
                                <FaInstagram />
                            </a>
                            <a href="https://www.facebook.com/thegreennook" target="_blank" rel="noreferrer">
                                <FaFacebookF />
                            </a>
                            <a href="https://twitter.com/thegreennook" target="_blank" rel="noreferrer">
                                <FaTwitter />
                            </a>
                        </div>

                    </div>

                    <div className="footer-right">
                        <ul className="footer-menu">
                            <li style={{ marginTop: "60px"}}><Link to="/onama">O nama</Link></li>
                            <li><Link to="/proizvodi">Proizvodi</Link></li>
                            <li><Link to="/kontakt">Kontakt</Link></li>
                            <li><Link to="/login">Prijava</Link></li>
                        </ul>
                    </div>
                </footer>
                <Footer />
            </div>
</>
            );
            };

            export default Pocetna;

