import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/stilovi.css";
import Header from "../components/header";
import Footer from "../components/footer";

const Proizvodi = () => {
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
            <Footer />
        </div>
    );
};

export default Proizvodi;
