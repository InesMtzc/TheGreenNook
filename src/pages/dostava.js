import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/stilovi.css";
import Header from "../components/header";
import Footer from "../components/footer";

function Dostava() {
    return (
        <div>
            <Header />
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
                <section className="dostava-section">
                    <h1>Dostava</h1>
                    <p>
                        Dostavu vršimo širom Bosne i Hercegovine. Za narudžbe iznad 50KM dostava je potpuno besplatna!
                    </p>
                    <p>
                        Sve narudžbe obrađujemo unutar 24 sata, a isporuka se vrši u roku od 2 do 5 radnih dana.
                    </p>
                    <p>
                        Radimo s pouzdanim partnerima kako bismo osigurali da vaši proizvodi stignu sigurno i na vrijeme.
                    </p>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default Dostava;
