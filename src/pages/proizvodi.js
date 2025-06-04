import {Link, useNavigate} from "react-router-dom";
import React, { useEffect, useState} from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";
import "../assets/styles/proizvodi.css";
import {FaFacebookF, FaInstagram, FaTwitter} from "react-icons/fa";


    function Proizvodi() {
        const location = useLocation();
        const [showOpis, setShowOpis] = useState(false);
        const [open, setOpen] = useState(false);
        const navigate = useNavigate();
        const handleDropdownClick = (path, sectionId) => {
            navigate(path, { state: { sectionId } });
        };
        const toggleText = () => {
            setOpen(!open);
        };
        const [isMenuOpen, setIsMenuOpen] = useState(false);
        const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
        const [proizvodi, setProizvodi] = useState([]);

        useEffect(() => {
            fetch('http://localhost:3000/proizvodi')
                .then(res => res.json())
                .then(data => setProizvodi(data))
                .catch(error => console.error('Greška prilikom dohvata proizvoda:', error));
        }, []);
        useEffect(() => {
            if (location.state && location.state.sectionId) {
                const section = document.getElementById(location.state.sectionId);
                if (section) {
                    section.scrollIntoView({ behavior: 'smooth' });
                }
            }
        }, [location.state]);


        return (
                <div>
                    <div className="header-box">
                        <div className="logo">
                            <img src="/slike/logo.jpg" alt="The Green Nook Logo"/>
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
                                <li><Link to="/kontakt">Kontakt</Link></li>
                                <li><Link to="/login">Prijava</Link></li>
                            </ul>
                        </nav>
                        <div className="header-right">
                            {/* Pretraga */}
                            <div className="search-box">
                                <input type="text" placeholder="Pretraživanje..."/>
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

                    <main>
                        <section className="proizvodi-section">
                            <h1>Naša ponuda proizvoda</h1>

                            <h4 id="cajevi">Čajevi</h4>
                            <div className="caj-tekst-container" onClick={toggleText}>
                                <div className="naslov-wrapper">
                                    <span className="naslov-tekst">Kako nastaje čaj?</span>
                                    <span className={`toggle-arrow ${open ? "open" : ""}`}>&#8250;</span>
                                </div>
                                <p className={`caj-tekst ${open ? "open" : ""}`}>
                                    Proces počinje berbom pažljivo odabranih biljaka koje se potom prirodno suše. Nakon sušenja, bilje se reže, miješa i pakira kako bi se očuvala njegova ljekovita svojstva. Priprema je jednostavna: 1 kašičicu suhe mješavine prelijte s 2-3 dl vruće vode (ne kipuće!), poklopite i ostavite 5-10 minuta. Procijedite i uživajte.
                                </p>
                            </div>
                            <div className="product-list">
                                {proizvodi.filter(p => p.kategorija === "cajevi").map(proizvod => (
                                    <div className="item" key={proizvod.id}>
                                        <img src={`/slike/${proizvod.slika}`} alt={proizvod.naziv}/>
                                        <h3>{proizvod.naziv}</h3>
                                        <p className="cijena">{proizvod.cijena} KM</p>
                                        <Link to={`/proizvodi/${proizvod.id}`} className="button">Detalji</Link>
                                    </div>
                                ))}
                            </div>

                            <h4 id="kreme">Kreme</h4>
                            <div className="caj-tekst-container" onClick={toggleText}>
                                <div className="naslov-wrapper">
                                    <span className="naslov-tekst">Kako nastaju naše kreme?</span>
                                    <span className={`toggle-arrow ${open ? "open" : ""}`}>&#8250;</span>
                                </div>
                                <p className={`caj-tekst ${open ? "open" : ""}`}>
                                    Naše kreme se izrađuju ručno od pažljivo biranih prirodnih sastojaka poput hladno cijeđenih biljnih ulja, pčelinjeg voska i eteričnih ulja. Bez parabena i vještačkih dodataka, ove kreme njeguju kožu na potpuno prirodan način.
                                </p>
                            </div>
                            <div className="product-list">
                                {proizvodi.filter(p => p.kategorija === "kreme").map(proizvod => (
                                    <div className="item" key={proizvod.id}>
                                        <img src={`/slike/${proizvod.slika}`} alt={proizvod.naziv}/>
                                        <h3>{proizvod.naziv}</h3>
                                        <p className="cijena">{proizvod.cijena} KM</p>
                                        <Link to={`/proizvodi/${proizvod.id}`} className="button">Detalji</Link>
                                    </div>
                                ))}
                            </div>

                            <h4 id="sapuni">Sapuni</h4>
                            <div className="caj-tekst-container" onClick={toggleText}>
                                <div className="naslov-wrapper">
                                    <span className="naslov-tekst">Tajna ručno rađenih sapuna?</span>
                                    <span className={`toggle-arrow ${open ? "open" : ""}`}>&#8250;</span>
                                </div>
                                <p className={`caj-tekst ${open ? "open" : ""}`}>
                                    Izrada počinje pažljivim izborom prirodnih ulja i biljnih sastojaka. Smjesa se miješa ručno, uz dodatak eteričnih ulja i biljnih ekstrakata. Nakon izlijevanja u kalupe, sapuni se suše i sazrijevaju nekoliko sedmica kako bi postali nježni, mirisni i potpuno prirodni.
                                </p>
                            </div>
                            <div className="product-list">
                                {proizvodi.filter(p => p.kategorija === "sapuni").map(proizvod => (
                                    <div className="item" key={proizvod.id}>
                                        <img src={`/slike/${proizvod.slika}`} alt={proizvod.naziv}/>
                                        <h3>{proizvod.naziv}</h3>
                                        <p className="cijena">{proizvod.cijena} KM</p>
                                        <Link to={`/proizvodi/${proizvod.id}`} className="button">Detalji</Link>
                                    </div>
                                ))}
                            </div>

                            <h4 id="ulja">Ulja</h4>
                            <div className="caj-tekst-container" onClick={toggleText}>
                                <div className="naslov-wrapper">
                                    <span className="naslov-tekst">Od biljke do bočice – proizvodnja ulja?</span>
                                    <span className={`toggle-arrow ${open ? "open" : ""}`}>&#8250;</span>
                                </div>
                                <p className={`caj-tekst ${open ? "open" : ""}`}>
                                    Naša ulja se dobijaju tradicionalnim metodama – hladnim cijeđenjem i dugotrajnim maceriranjem biljaka u prirodnim baznim uljima. Bez termičke obrade i hemikalija, sačuvana su sva blagotvorna svojstva biljaka. Svako ulje dozrijeva na prirodan način, uz pažljivo birane sastojke i puno strpljenja.
                                </p>
                            </div>
                            <div className="product-list">
                                {proizvodi.filter(p => p.kategorija === "ulja").map(proizvod => (
                                    <div className="item" key={proizvod.id}>
                                        <img src={`/slike/${proizvod.slika}`} alt={proizvod.naziv}/>
                                        <h3>{proizvod.naziv}</h3>
                                        <p className="cijena">{proizvod.cijena} KM</p>
                                        <Link to={`/proizvodi/${proizvod.id}`} className="button">Detalji</Link>
                                    </div>
                                ))}
                            </div>
                        </section>

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
                    </main>
                </div>
            );
        };
export default Proizvodi;



