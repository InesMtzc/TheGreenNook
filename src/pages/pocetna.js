import React from "react";
import { Link } from "react-router-dom";
import "../stilovi.css"; // Ako se stilovi nalaze u 'src' folderu

const Pocetna = () => {
    return (
        <div>
            <header>
                <p>Besplatna poštarina za narudžbe iznad 50KM.</p>
            </header>

            <div className="header-box">
                <div className="logo">
                    <img src="/slike/logo.jpg" alt="The Green Nook Logo" />
                </div>
                <nav>
                    <ul className="menu" id="menu">
                        <li><Link to="/">Početna</Link></li>
                        <li><Link to="/onama">O nama</Link></li>
                        <li><Link to="/proizvodi">Proizvodi</Link></li>
                        <li><Link to="/kontakt">Kontakt</Link></li>
                        <li><Link to="/dostava">Dostava</Link></li>
                    </ul>
                </nav>
            </div>

            <main>
                <section className="hero-section">
                    <div className="hero-overlay">
                        <img src="/slike/pocetna1.png" alt="Slika 1" />
                        <img src="/slike/pocetna2.png" alt="Slika 2" />
                        <img src="/slike/pocetna3.png" alt="Slika 3" />
                        <h1>Dobrodošli u The Green Nook</h1>
                        <h2>Tu smo za vaše tijelo, duh i dom</h2>
                    </div>
                </section>

                {["Naša ponuda", "Najtraženiji proizvodi", "Novi proizvodi"].map((naslov, i) => (
                    <section id="featured" key={i}>
                        <h1>{naslov}</h1>
                        <div className="featured-items">
                            {["ulje3.png", "sapun6.png", "caj5.png", "krema1.png"].map((slika, j) => (
                                <div className="item" key={j}>
                                    <img src={`/slike/${slika}`} alt="Proizvod" />
                                    <h3> {
                                        slika.includes("ulje") ? "Eterična ulja" :
                                            slika.includes("sapun") ? "Organski sapuni" :
                                                slika.includes("caj") ? "Prirodni čajevi" :
                                                    "Organske kreme"
                                    }</h3>
                                    <Link to="/proizvodi" className="button">Pogledaj ponudu</Link>
                                </div>
                            ))}
                        </div>
                    </section>
                ))}

                <h2>🌿 Pridruži se nam se i na Instagramu 🌿</h2>
                <img src="/slike/logo.jpg" alt="The Green Nook Logo" />
                <li>
                    <a
                        href="https://www.instagram.com/thegreennook"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Instagram
                    </a>
                </li>
                <p>Zavirite iza zavjese, otkrijte biljne rituale, recepte i trenutke stvaranja.</p>

                {[...Array(5)].map((_, i) => (
                    <img key={i} src="/slike/krema1.png" alt="Organske kreme" />
                ))}

                <p>Kontaktirajte nas putem e-maila: <a href="mailto:info@fashionflair.com">info@fashionflair.com</a></p>

                <ul className="form-box">
                    <li><h2>Naša obećanja kupcima</h2></li>
                    <li><p>Prirodni sastojci bez kompromisa</p></li>
                    <li><p>Ručna izrada s ljubavlju</p></li>
                    <li><p>Transparentnost u sastavu</p></li>
                    <li><p>Održivost i poštovanje prirode</p></li>
                    <li><p>Podrška i povjerenje</p></li>
                    <li><p>Zadovoljstvo zagarantovano</p></li>
                    <li>
                        <a
                            href="https://twitter.com/fashionflair"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Twitter
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.facebook.com/fashionflair"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Facebook
                        </a>
                    </li>
                </ul>
            </main>

            <footer>
                <p>© 2024 The Green Nook. Sva prava zadržana.</p>
            </footer>
        </div>
    );
};

export default Pocetna;
