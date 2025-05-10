import React from "react";
import { Link } from "react-router-dom";
import "../stilovi.css";

const Onama = () => {
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
                <section className="onama-section">
                    <h1>O nama</h1>
                    <p>
                        Dobrodošli u The Green Nook, vaš kutak prirode i balansa. Naša priča je počela iz ljubavi prema biljkama, prirodi i zdravom načinu života. Vjerujemo u moć prirodnih sastojaka i ručne izrade.
                    </p>
                    <p>
                        Svi naši proizvodi nastaju s pažnjom, koristeći najkvalitetnije prirodne sastojke, bez štetnih hemikalija i nepotrebnih dodataka. Naša misija je ponuditi vam proizvode koji ne samo da njeguju vaše tijelo, već i čuvaju prirodu.
                    </p>
                    <p>
                        Hvala vam što ste dio naše zelene priče. 🌿
                    </p>
                </section>
            </main>

            <footer>
                <p>© 2024 The Green Nook. Sva prava zadržana.</p>
            </footer>
        </div>
    );
};

export default Onama;
