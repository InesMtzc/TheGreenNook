import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/kontakt.css";
import Header from "../components/header";
import Footer from "../components/footer";

function Kontakt() {
    return (
        <div>

            <div className="header-box">

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
                <section className="kontakt-section">
                    <h1>Kontaktirajte nas</h1>
                    <p>Imate pitanje, sugestiju ili želite da nas pohvalite? Javite nam se!</p>

                    <form className="kontakt-form">
                        <label>
                            Ime:
                            <input type="text" name="ime" required />
                        </label>
                        <label>
                            Email:
                            <input type="email" name="email" required />
                        </label>
                        <label>
                            Poruka:
                            <textarea name="poruka" rows="5" required></textarea>
                        </label>
                        <button type="submit" className="button">Pošalji</button>
                    </form>
                </section>
            </main>

        </div>
    );
};

export default Kontakt;
