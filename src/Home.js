import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <>
            <header>
                <p>Besplatna poštarina za narudžbe iznad 50KM.</p>
            </header>

            <div className="header-box">
                <div className="logo">
                    <img src="/assets/pozadina.jpg" alt="The Green Nook Logo" />
                </div>
                <nav>
                    <ul className="menu" id="menu">
                        <li><Link to="/pocetna">Početna</Link></li>
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
                        <img src="/assets/pozadina.jpg" alt="Slika 1" />
                        <img src="/assets/pozadina.jpg" alt="Slika 2" />
                        <img src="/assets/pozadina.jpg" alt="Slika 3" />
                        <h1>Dobrodošli u The Green Nook</h1>
                        <h2>Tu smo za vaše tijelo, duh i dom</h2>
                    </div>
                </section>

                <section id="featured">
                    <h1>Naša ponuda</h1>
                    <div className="featured-items">
                        {[
                            ['ulje3.png', 'Eterična ulja'],
                            ['sapun6.png', 'Organski sapuni'],
                            ['caj5.png', 'Prirodni čajevi'],
                            ['krema1.png', 'Organske kreme'],
                        ].map(([img, title], i) => (
                            <div className="item" key={i}>
                                <img src={`/slike/${img}`} alt={title} />
                                <h3>{title}</h3>
                                <Link to="/products" className="button">Pogledaj ponudu</Link>
                            </div>
                        ))}
                    </div>
                </section>

                <section id="featured">
                    <h1>Najtraženiji proizvodi</h1>
                    <div className="featured-items">
                        {['krema1.png', 'ulje3.png', 'sapun6.png', 'caj5.png', 'krema1.png'].map((img, i) => (
                            <div className="item" key={i}>
                                <img src={`/slike/${img}`} alt="Proizvod" />
                                <h3>{img.includes('ulje') ? 'Eterična ulja' : img.includes('sapun') ? 'Organski sapuni' : img.includes('caj') ? 'Prirodni čajevi' : 'Organske kreme'}</h3>
                                <Link to="/products" className="button">Pogledaj ponudu</Link>
                            </div>
                        ))}
                    </div>
                </section>

                <section id="featured">
                    <h1>Novi proizvodi</h1>
                    <div className="featured-items">
                        {[1, 2, 3, 4, 5].map((_, i) => (
                            <div className="item" key={i}>
                                <img src="/assets/krema1.png" alt="Organske kreme" />
                                <h3>Organske kreme</h3>
                                <Link to="/products" className="button">Pogledaj ponudu</Link>
                            </div>
                        ))}
                    </div>
                </section>

                <h2>🌿 Pridruži se nam se i na instagramu 🌿</h2>
                <img src="/assets/logo.jpg" alt="The Green Nook Logo" />
                <li>
                    <a href="https://www.instagram.com/thegreennook" target="_blank" rel="noopener noreferrer">
                        Instagram
                    </a>
                </li>
                <p>Zavirite iza zavjese, otkrijte biljne rituale, recepte i trenutke stvaranja.</p>

                {[...Array(5)].map((_, i) => (
                    <img key={i} src="/assets/krema1.png" alt="Organske kreme" />
                ))}

                <p>
                    Kontaktirajte nas putem e-maila:{' '}
                    <a href="mailto:info@fashionflair.com">info@fashionflair.com</a>
                </p>

                <ul className="forme-box">
                    <li><h3>Naša obećanja kupcima</h3></li>
                    <li><p>Prirodni sastojci bez kompromisa</p></li>
                    <li><p>Ručna izrada s ljubavlju</p></li>
                    <li><p>Transparentnost u sastavu</p></li>
                    <li><p>Održivost i poštovanje prirode</p></li>
                    <li><p>Podrška i povjerenje</p></li>
                    <li><p>Zadovoljstvo zagarantovano</p></li>
                    <li><a href="https://twitter.com/fashionflair" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                    <li><a href="https://www.facebook.com/fashionflair" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                </ul>
            </main>

            <footer>
                <p>© 2024 The Green Nook. Sva prava zadržana.</p>
            </footer>
        </>
    );
}

export default Home;
