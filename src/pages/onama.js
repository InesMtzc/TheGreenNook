import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../assets/styles/onama.css";


function Onama() {
    const [tim, setTim] = useState([]);
    const location = useLocation();
    const navigate = useNavigate();

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);


    function handleDropdownClick(sectionId) {
        navigate(`/proizvodi#${sectionId}`);
    }


    useEffect(() => {
        fetch('http://localhost:3000/tim')
            .then((res) => res.json())
            .then((data) => setTim(data))
            .catch((err) => console.error("Greška pri dohvaćanju tima:", err));
    }, []);


    useEffect(() => {
        const sectionId = location.state?.sectionId;
        if (sectionId) {
            const el = document.getElementById(sectionId);
            if (el) {
                setTimeout(() => {
                    el.scrollIntoView({ behavior: "smooth" });
                }, 100); // da sačeka render
            }
        }
    }, [location.state]);


    return (
        <div>
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
                        <li className="dropdown">
                            <Link to="/proizvodi" className="dropdown-trigger">Proizvodi ▾</Link>
                            <ul className="dropdown-menu">
                                <li onClick={() => handleDropdownClick('cajevi')}>Čajevi</li>
                                <li onClick={() => handleDropdownClick('kreme')}>Kreme</li>
                                <li onClick={() => handleDropdownClick('sapuni')}>Sapuni</li>
                                <li onClick={() => handleDropdownClick('ulja')}>Ulja</li>
                            </ul>
                        </li>
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

            <main>
                <section className="onama-section">
                    <h1 style={{ textAlign: "center", fontSize: "30px" }}>O nama</h1>
                    <p>
                        Dobrodošli u The Green Nook, vaš kutak prirode i balansa. Naša priča je počela iz ljubavi prema biljkama, prirodi i zdravom načinu života. Vjerujemo u moć prirodnih sastojaka i ručne izrade.
                        Svi naši proizvodi nastaju s pažnjom, koristeći najkvalitetnije prirodne sastojke, bez štetnih hemikalija i nepotrebnih dodataka. Naša misija je ponuditi vam proizvode koji ne samo da njeguju vaše tijelo, već i čuvaju prirodu.
                    </p>
                    <p>
                        Hvala vam što ste dio naše zelene priče. 🌿
                    </p>
                </section>

                <section className="nas-tim-section">
                    <h2 style={{ fontFamily: '"Playfair Display SC", serif' }}>
                        Upoznajte naš tim
                    </h2>
                    <div className="kartice-tima">
                        {tim.map((clan) => (
                            <div key={clan.id} className="kartica-clana">
                                <img src={clan.slika.replace("public/", "/")} alt={clan.ime} />
                                <h3>{clan.ime}</h3>
                                <p>{clan.opis}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="prica-section">
                    <div className="tekst-slika" id="rani-dani">
                    <div className="tekst">
                            <h2>Rani dani</h2>
                            <p>
                                Naša priča počinje 2020. godine, kada smo se nas tri, Selma, Ines i Aida, odlučile upustiti u zajednički hobi.
                                Tada smo, kao i mnogi drugi, tražile kreativan i zdrav način da provedemo vrijeme tokom pandemije i da usvojimo novi, prirodniji stil života. Ja sam oduvijek voljela prirodnu kozmetiku, Ines je bila strastvena prema biljnoj aromaterapiji, a Aida je željela naučiti nešto novo i korisno.
                                Često smo zajedno istraživale internet i gledale tutorijale o pravljenju sapuna, aromatičnih ulja i prirodnih proizvoda za njegu kože. Brzo smo primijetile da većina komercijalnih proizvoda sadrži umjetne dodatke i konzervanse, što nam nikako nije imalo smisla.
                                Kao nekadašnji farmaceutski tehničar, znala sam koliko je važno koristiti sigurne i prirodne sastojke. Ines je imala znanja iz botanike, a Aida je donosila organizacijske sposobnosti i iskustvo u vođenju malih projekata. Tako smo spojile naše talente i počele eksperimentisati.
                                Nabavile smo osnovne sastojke: biljna ulja, prirodne mirise i dodatke poput zobi i meda, i bacile se na pravljenje prvih sapuna i mješavina eteričnih ulja. Naravno, bilo je mnogo pokušaja i grešaka, ali ubrzo smo napravile prve kvalitetne proizvode.
                                Najposebniji trenutak za mene bio je kad sam isprobala sapun koji smo napravile i primijetila da mi je koža postala mekša i hidratizovanija. To nas je ohrabrilo da nastavimo i dalje usavršavamo svoje recepte.
                            </p>
                        </div>
                        <img src="/slike/pocetak0.jpg" alt="Rani dani" />
                    </div>

                    <div className="tekst-slika reverse" id="popularnost">
                    <div className="tekst">
                            <h3>Dobijanje popularnosti</h3>
                            <p>
                                Kako su proizvodi postajali sve bolji, počele smo ih dijeliti prijateljima i porodici. S vremenom su narudžbe počele rasti.
                                Naša mala kuhinja i balkon brzo su se pretvorili u malu radionicu, a svaki slobodan trenutak koristile smo za pravljenje novih serija.
                                Ja, Selma, sam proučavala hemijske procese pravljenja sapuna, Ines vodila evidenciju i testirala proizvode, a Aida je kreirala sadržaj za društvene mreže i osmišljavala marketing.
                                Ubrzo smo napravile svoju prvu web stranicu i započele online prodaju. Prva narudžba stigla je već nakon nekoliko nedjelja i to nam je dalo dodatnu motivaciju.
                            </p>
                        </div>
                        <img src="/slike/popularnost1.png" alt="Dobijanje popularnosti" />
                    </div>

                    <div className="tekst-slika" id="biznis">
                    <div className="tekst">
                            <h3>Od hobija do biznisa</h3>
                            <p>
                                Kako je pandemija trajala, a potražnja za prirodnim proizvodima rasla, odlučile smo da naš hobi pretvorimo u mali posao.
                                Osnovale smo zajedničku firmu i proširile ponudu, dodajući organski čajeve, prirodne meleme i aromatične svijeće.
                                Uz podršku porodice i prijatelja, uselile smo se u veći prostor gdje smo mogle organizirati proizvodnju i skladištenje.
                                Do 2023. godine, naše prirodne linije proizvoda bile su dostupne u nekoliko online prodavnica i na lokalnim tržnicama, a broj zadovoljnih kupaca rastao je iz mjeseca u mjesec.
                                Iako posao nije lak, nas tri prijateljice ostajemo vjerne našim vrijednostima: proizvoditi isključivo prirodne, sigurne i ekološki prihvatljive proizvode koji njeguju ljepotu, zdravlje i našu planetu.
                            </p>
                        </div>
                        <img src="/slike/lab-rad.jpg" alt="Od hobija do biznisa" />
                    </div>
                </section>
                {/* Novi dio: Naše obaveze prema zaštiti okoliša */}
                <section className="ekoloska-obaveza-section">
                    <h2>🌱 Naše obaveze prema zaštiti okoliša</h2>
                    <p>
  <span style={{ display: 'block', textAlign: 'center', color: '#4A7C59', fontStyle: 'italic' }}>
    <strong>(Selma, Aida & Ines – održivi tim)</strong>
  </span>
                    </p>

                    <h3 id="filozofija">🌍 Naša filozofija</h3>
                    <p>
                        Zaštita okoliša nije marketinški trik – to je naša iskrena obaveza...
                    </p>

                    <blockquote>
                        "Zemlju nismo naslijedile od svojih roditelja, već smo je posudile od svoje djece."
                    </blockquote>

                    <div className="eko-tekst-slika">
                        <img src="/slike/nasaplaneta.png" alt="Dobijanje popularnosti" />
                        <div className="tekst">
                            <h3>♻️ Naše svakodnevne prakse</h3>
                            <ul>
                                <li>Stalno posuđe i čaše umjesto jednokratnih</li>
                                <li>Krpe i peškire umjesto papirnih ubrusa</li>
                                <li>Filtere za vodu umjesto plastičnih flaša</li>
                                <li>Reciklirane i reciklabilne materijale za pakovanje</li>
                                <li>Ambalažu bez plastike (99%)</li>
                            </ul>
                            <p>Dodatno:</p>
                            <ul>
                                <li>Reciklirani kancelarijski papir koristi se kao materijal za pakovanje</li>
                                <li>Većina našeg namještaja je polovna – spašen iz firmi ili doniran</li>
                            </ul>
                        </div>
                    </div>

                    <h3>🌿 Održiva nabavka i proizvodnja</h3>
                    <p>
                        <span style={{ display: 'block', textAlign: 'center' }}>
                        Koristimo samo certificirano održivo palmino ulje i pažljivo biramo sastojke.
                   </span>
                    </p>

                    <section className="dostava-section" id="dostava">
                    <h2>Dostava</h2>
                        <p>Dostavu vršimo širom Bosne i Hercegovine.</p>
                        <p>Za narudžbe iznad 50KM dostava je potpuno besplatna!</p>
                        <p>
                            Sve narudžbe obrađujemo unutar 24 sata, a isporuka se vrši u roku od 2 do 5 radnih dana.
                        </p>
                        <p>
                            Radimo s pouzdanim partnerima kako bismo osigurali da vaši proizvodi stignu sigurno i na vrijeme.
                        </p>
                    </section>


                    <div className="eko-tekst-slika reverse" id="energija">
                    <div className="tekst">
                            <h3>☀️ Energija i klima</h3>
                            <p><strong>Već urađeno:</strong></p>
                            <ul>
                                <li>LED rasvjeta (smanjenje potrošnje do 65%)</li>
                                <li>Krovni prozori za prirodno svjetlo i grijanje</li>
                                <li>Bijeli reflektujući krov (manje zagrijavanje objekta)</li>
                                <li>Termostati, senzori za svjetlo, energetski efikasni uređaji</li>
                                <li>Površine za oprašivače i insekte u dvorištu</li>
                            </ul>
                        </div>
                        <img src="/slike/energija.jpg" alt="Dobijanje popularnosti" />
                    </div>
                </section>

            </main>
        </div>
    );
}

export default Onama;