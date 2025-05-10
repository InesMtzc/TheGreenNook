import React from "react";
import { Link } from "react-router-dom";
import "../stilovi.css";

const Proizvodi = () => {
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
                <section className="proizvodi-section">
                    <h1>Naša ponuda proizvoda</h1>
                    <div className="product-list">
                        {[
                            { naziv: "Eterično ulje lavande", slika: "ulje3.png" },
                            { naziv: "Organski sapun od ruže", slika: "sapun6.png" },
                            { naziv: "Prirodni čaj od kamilice", slika: "caj5.png" },
                            { naziv: "Krema s nevenom", slika: "krema1.png" }
                        ].map((proizvod, i) => (
                            <div className="item" key={i}>
                                <img src={`/slike/${proizvod.slika}`} alt={proizvod.naziv} />
                                <h3>{proizvod.naziv}</h3>
                                <p>Kratki opis proizvoda ide ovdje.</p>
                                <button className="button">Dodaj u korpu</button>
                            </div>
                        ))}
                    </div>
                </section>
            </main>

            <footer>
                <p>© 2024 The Green Nook. Sva prava zadržana.</p>
            </footer>
        </div>
    );
};

export default Proizvodi;
