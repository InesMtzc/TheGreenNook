import { Link, useNavigate } from "react-router-dom";
import "../assets/styles/stilovi.css";
import { FaTruck, FaHeart, FaShieldAlt } from 'react-icons/fa';
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";
import Header from '../components/header';
import Footer from '../components/footer';
import React, { useState } from 'react';

function Pocetna() {

    const proizvodi = [
        {
            slika: "ulje10.png",
            naziv: "Eterična ulja",
            opis: "Prirodna ulja dobijena destilacijom biljaka, idealna za aromaterapiju."
        },
        {
            slika: "sapun6.png",
            naziv: "Organski sapuni",
            opis: "Ručno rađeni sapuni sa organskim sastojcima, nežni za kožu."
        },
        {
            slika: "caj5.png",
            naziv: "Prirodni čajevi",
            opis: "Mješavine ljekovitih biljaka za zdrav i ukusan napitak."
        },
        {
            slika: "krema1.png",
            naziv: "Organske kreme",
            opis: "Hidratantne kreme sa prirodnim ekstraktima za negu kože."
        }
    ];

    const najtrazenijiProizvodi = [
        {
            slika: "ulje3.png",
            naziv: "Ulje ruzmarina",
            opis: "Prirodno ulje ruzmarina za osveženje i opuštanje.",
            cijena: "13.95 "
        },
        {
            slika: "sapun2.png",
            naziv: "Sapun od divljeg meda",
            opis: "Hranljivi sapun sa medom iz prirode, nežan za kožu.",
            cijena: "4.95 "
        },
        {
            slika: "caj4.png",
            naziv: "Čaj od lavande i valerijane",
            opis: "Smirujuća mešavina lavande i valerijane za bolji san.",
            cijena: "5.95 "
        },
        {
            slika: "krema4.png",
            naziv: "Krema sa uljem masline",
            opis: "Hidratantna krema sa hranljivim uljem masline.",
            cijena: "17.95 "
        }
    ];

    const noviProizvodi = [
        {
            slika: "ulje6.png",
            naziv: "Ulje lavande",
            opis: "Čisto eterično ulje lavande, idealno za aromaterapiju.",
            cijena: "17.95 "
        },
        {
            slika: "sapun6.png",
            naziv: "Vrtni sapun",
            opis: "Ručno rađeni sapun sa mirisom cveća iz vrta.",
            cijena: "5.95 "
        },
        {
            slika: "caj5.png",
            naziv: "Čaj od kamilice",
            opis: "Prirodni čaj sa kamilicom za opuštanje i smirenje.",
            cijena: "4.95 "
        },
        {
            slika: "krema1.png",
            naziv: "Krema od slatke naranče",
            opis: "Osvježavajuća krema sa ekstraktom slatke naranče.",
            cijena: "11.95 "
        }
    ];

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
                <div style={{position: "fixed", top: 0, left: 0, width: "100%", backgroundColor: "#4caf50", color: "white", padding: "10px", textAlign: "center", zIndex: 1000}}>
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
                            {proizvodi.map(({ slika, naziv, opis }, i) => (
                                <div className="item" key={`najtrazeniji-${i}`}>
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
                            {najtrazenijiProizvodi.map((proizvod, i) => (
                                <div className="item" key={`najtrazeniji-${i}`}>
                                    <img src={`/slike/${proizvod.slika}`} alt={proizvod.naziv} />
                                    <h3
                                        style={{
                                            textAlign: "center",
                                            fontSize: "35px",
                                            fontFamily: "Sacramento, cursive",
                                            color: "darkolivegreen",
                                        }}
                                    >
                                        {proizvod.naziv}
                                    </h3>
                                    <p style={{ color: "#333", fontSize: "16px", textAlign: "center" }}>{proizvod.opis}</p>
                                    <p
                                        style={{
                                            fontWeight: "bold",
                                            fontSize: "1.2rem",
                                            color: "darkgreen",
                                            textAlign: "center",
                                            margin: "0 0 15px",
                                        }}
                                    >
                                        {proizvod.cijena} KM
                                    </p>
                                    <button className="button" onClick={() => handleDodajUKorpu(proizvod)}>
                                        Dodaj u korpu
                                    </button>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className="featured">
                        <h2>Novi proizvodi</h2>
                        <div className="featured-items">
                            {noviProizvodi.map((proizvod, i) => (
                                <div className="item" key={`novi-${i}`}>
                                    <img src={`/slike/${proizvod.slika}`} alt={proizvod.naziv} />
                                    <h3
                                        style={{
                                            textAlign: "center",
                                            fontSize: "35px",
                                            fontFamily: "Sacramento, cursive",
                                            color: "darkolivegreen",
                                        }}
                                    >
                                        {proizvod.naziv}
                                    </h3>
                                    <p style={{ color: "#333", fontSize: "16px", textAlign: "center" }}>{proizvod.opis}</p>
                                    <p
                                        style={{
                                            fontWeight: "bold",
                                            fontSize: "1.2rem",
                                            color: "darkgreen",
                                            textAlign: "center",
                                            margin: "0 0 15px",
                                        }}
                                    >
                                        {proizvod.cijena} KM
                                    </p>
                                    <button className="button" onClick={() => handleDodajUKorpu(proizvod)}>
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

