import React, { useEffect, useState } from 'react';
import {Link, useParams} from 'react-router-dom';
import "../assets/styles/proizvodi.css";
import Header from "../components/header";
import Footer from "../components/footer";
import {FaFacebookF, FaInstagram, FaTwitter} from "react-icons/fa";

function ProizvodDetalji() {
    const { id } = useParams();  // dohvaća id iz URL-a
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const [trenutnaSlika, setTrenutnaSlika] = useState(0);
    const [kolicina, setKolicina] = useState(1);
    const [poruka, setPoruka] = useState("");
    const [proizvod, setProizvod] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:3000/proizvodi/${id}`)
            .then(res => res.json())
            .then(data => setProizvod(data))
            .catch(err => console.error("Greška kod dohvata proizvoda:", err));
    }, [id]);
    if (!proizvod) return <p>Proizvod nije pronađen.</p>;

    const imaViseSlika = Array.isArray(proizvod.slike) && proizvod.slike.length > 0;
    const slike = imaViseSlika ? proizvod.slike : [proizvod.slika];
    const prethodna = () => {
        setTrenutnaSlika((prev) => (prev - 1 + slike.length) % slike.length);
    };
    const sljedeca = () => {
        setTrenutnaSlika((prev) => (prev + 1) % slike.length);
    };

    const povecajKolicinu = () => setKolicina(k => k + 1);
    const smanjiKolicinu = () => setKolicina(k => (k > 1 ? k - 1 : 1));


    const handleDodajUKorpu = (proizvod) => {
        setPoruka(`Proizvod "${proizvod.naziv}" je dodat u korpu, količina: ${kolicina}.`);
        // Poruka nestaje posle 3 sekunde
        setTimeout(() => {
            setPoruka("");
        }, 3000);
    };
    if (!proizvod) {
        return <p>Učitavanje proizvoda...</p>;
    }

    return (
        <div>
            {poruka && (
                <div className="notifikacija">
                    {poruka}
                </div>
            )}
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
                        <li><Link to="/onama">O nama</Link></li>
                        <li><Link to="/kontakt">Kontakt</Link></li>
                        <li><Link to="/login">Prijava</Link></li>
                    </ul>
                </nav>
                <div className="header-right">
                    <div className="search-box">
                        <input type="text" placeholder="Pretraživanje..." />
                        <button className="search-btn" aria-label="Pretraži">🔍</button>
                    </div>
                    <Link to="/favoriti" className="icon-btn" aria-label="Omiljeni proizvodi">❤</Link>
                    <Link to="/korpa" className="icon-btn" aria-label="Korpa">🛒</Link>
                </div>
            </div>

            <main className="proizvod-detalji-container">
                <div className="proizvod-detalji">
                    <div className="slika-container" style={{ position: 'relative' }}>
                        <img
                            src={`/slike/${slike[trenutnaSlika]}`}
                            alt={proizvod.naziv}
                            style={{ width: '300px', borderRadius: '10px' }}
                        />
                        {imaViseSlika && (
                            <>
                                <button onClick={prethodna} className="custom-arrow left-arrow">&#8592;</button>
                                <button onClick={sljedeca} className="custom-arrow right-arrow">&#8594;</button>
                            </>
                        )}
                    </div>
                    <div className="detalji-tekst">
                        <h1>{proizvod.naziv}</h1>
                        <p className="cijena-proizvoda">{proizvod.cijena} KM</p>
                        <p className="opis-proizvoda">{proizvod.opis}</p>
                        <div
                            className="kolicina-container"
                            style={{ display: 'flex', alignItems: 'center', gap: '10px', margin: '1rem 0' }}
                        >
                            <button onClick={smanjiKolicinu} style={{ padding: '5px 10px' }}>-</button>
                            <span className="kolicina-broj">{kolicina}</span>
                            <button onClick={povecajKolicinu} style={{ padding: '5px 10px' }}>+</button>
                        </div>
                        <button onClick={() => handleDodajUKorpu(proizvod)} className="button">
                            Dodaj u korpu
                        </button>
                    </div>
                </div>

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
                        <p style={{ marginTop: "60px" }}>✨ Biljni rituali</p>
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
                            <a href="https://www.instagram.com/thegreennook" target="_blank" rel="noreferrer" style={{ marginTop: "10px", marginLeft: "125px" }}>
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
                            <li style={{ marginTop: "60px" }}><Link to="/onama">O nama</Link></li>
                            <li><Link to="/proizvodi">Proizvodi</Link></li>
                            <li><Link to="/kontakt">Kontakt</Link></li>
                            <li><Link to="/login">Prijava</Link></li>
                        </ul>
                    </div>
                </footer>
            </main>
        </div>
    );
}

export default ProizvodDetalji;