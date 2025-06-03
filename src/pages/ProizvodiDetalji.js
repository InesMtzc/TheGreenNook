import React, { useState } from 'react';
import {Link, useParams} from 'react-router-dom';
import "../assets/styles/proizvodi.css";
import Header from "../components/header";
import Footer from "../components/footer";
import {FaFacebookF, FaInstagram, FaTwitter} from "react-icons/fa";


const proizvodi = [
    { id: 1, naziv: "Prirodni čaj od divlje ruže i hibiskusa", slike: ["caj1.png","caj1a.webp"], opis: "Ovaj čaj predstavlja savršen spoj divlje ruže bogate vitaminom C i hibiskusa poznatog po svojim antioksidativnim svojstvima. " +
            "Pomaže u jačanju imuniteta, poboljšava cirkulaciju i doprinosi hidrataciji tijela. " +
            "Njegov voćni i blago kiselkast ukus čini ga idealnim za osvježenje tokom dana, i topao i hladan.", cijena:"3.95" },
    { id: 2, naziv: "Čaj od metvice i nane", slike: ["caj2.png","caj2a.webp"], opis: "Osvježavajući biljni napitak koji smiruje probavni sistem i opušta tijelo. Nana i metvica poznate su po svojim umirujućim i rashlađujućim svojstvima – idealne su kod osjećaja nadutosti, mučnine i stresa. Blagi, osvježavajući ukus savršen je nakon obroka ili u trenucima relaksacije.",cijena:"4.95" },
    { id: 3, naziv: "Osvježavajući čaj limuna i đumbira", slike: ["caj3.png","caj3a.webp"], opis: "Kombinacija limuna bogatog antioksidansima i đumbira poznatog po svom protuupalnom djelovanju čini ovaj čaj snažnim saveznikom u jačanju imuniteta. Pomaže u detoksikaciji organizma, ublažava mučninu i podstiče probavu. Pogodan za jutarnje buđenje i podizanje energije tokom dana.\n" +
            "\n" ,cijena:"3.95"},
    { id: 4, naziv: "Umirujući čaj lavande i valerijane", slike: ["caj4.png","caj4a.webp"], opis: "Formulisan da pomogne kod nesanice, stresa i napetosti, ovaj čaj sadrži lavandu koja opušta tijelo i um, te valerijanu koja blagotvorno djeluje na kvalitet sna. Blagi cvjetni miris i opuštajući efekat čine ga savršenim za večernje sate ili trenutke smirenja.",cijena:"5.95" },
    { id: 5, naziv: "Prirodni čaj od kamilice", slike: ["caj5.png","caj5a.webp"], opis: "Kamilica je poznata po svojim umirujućim i protuupalnim svojstvima. Pomaže kod nesanice, probavnih problema i grčeva. Njen blag i prijatan ukus čini je pogodnom i za djecu i za odrasle, a može se konzumirati i više puta dnevno." ,cijena:"4.95"},
    { id: 6, naziv: "Čisti zeleni čaj", slike: ["caj6.png","caj6a.webp"], opis: "Bogat antioksidansima, zeleni čaj podržava detoksikaciju, ubrzava metabolizam i poboljšava koncentraciju. Njegov svjež, travnat ukus oživljava tijelo i um. Preporučuje se ujutro ili popodne kao zdravija alternativa kafi." ,cijena:"4.95"},
    { id: 7, naziv: "Začinski čaj kurkume i cimeta", slike: ["caj7.png","caj7a.webp"],cijena:"3.95", opis: "Topao i aromatičan napitak koji sadrži moćnu kombinaciju kurkume sa protuupalnim svojstvima i cimeta koji pomaže u regulaciji šećera u krvi. Odličan za jačanje imuniteta i poboljšanje cirkulacije. Idealan za hladnije dane ili oporavak organizma." },
    { id: 8, naziv: "Zeleni čaj s jasminom", slike: ["caj8.png","caj8a.webp"], cijena:"7.95",opis: "Ovaj čaj spaja benefite zelenog čaja i nježni, cvjetni miris jasmina. Deluje umirujuće na um i tijelo, smanjuje stres i doprinosi osjećaju balansa. Savršen je za pauzu tokom dana, meditaciju ili čitanje." },

    { id: 21, naziv: "Hidratantna obnavljajuća krema",cijena:"11.95", slika: "krema1.png", opis: "Višenamjenski čudesni proizvod, legendarni Trevarno Rehydrating Face Balm može se koristiti i kao intenzivan tretman preko noći ili kao dubinski njegujuća maska za lice.S nevjerovatnim mirisom ylang-ylanga i slatke narandže, ova potpuno prirodna formulacija blaga prema koži sadrži ulja i biljne ekstrakte odabrane zbog svojih obnavljajućih i hranjivih svojstava. Ova mast također umiruje kožu, pa je savršena za korištenje nakon izlaganja suncu, vjetru ili hladnoći.Pogodna za sve tipove kože, ali posebno za suhu ili zreliju kožu."},
    { id: 22, naziv: "Noćna obnavljajuća krema", cijena:"8.95",slika: "krema2.png", opis: "Nezaobilazni saveznik za noćnu njegu, ova bogata i raskošna krema formulirana je da obnovi, hidratizira i njeguje vašu kožu koristeći najfinije prirodne sastojke.\n" +
            "\n" +
            "Uz umirujuće djelovanje lavande i poseban spoj prirodnih eteričnih ulja poput tamjana i cedrovine, ova intenzivna krema za lice i vrat hrani i regenerira kožu dok spavate.\n" +
            "\n" +
            "Prikladna za sve tipove kože, uključujući kombinovanu, suhu i zreliju kožu." },
    { id: 23, naziv: "Krema za ruke", cijena:"15.95",slika: "krema3.png" , opis: "Luksuzna, dubinski hidratantna krema za ruke dizajnirana da njeguje, omekša i zaštiti kožu, čak i najsušu. Obogaćena prirodnim biljnim uljima i maslacima, brzo se upija i ostavlja ruke glatkim, nahranjenim i zaštićenim od vanjskih utjecaja.\n" +
            "\n" +
            "Idealan izbor za svakodnevnu upotrebu, posebno u hladnijim mjesecima ili kod čestog pranja ruku"},
    { id: 24, naziv: "Hranjiva Krema za Ruke", cijena:"17.95",slika: "krema4.png" , opis: "Bogata, hranjiva krema za svakodnevnu njegu ruku, osmišljena da ih održi mekim, podatnim i savršeno hidratiziranim.\n" +
            "\n" +
            "Sadrži luksuznu mješavinu organskih sastojaka pažljivo odabranih zbog svojih blagotvornih svojstava za kožu. Cvjetna vodica lavande kombinira se s maslinovim uljem infuziranim gavezom, bademovim uljem bogatim vitaminima, jojobinim uljem, kakao maslacem, vitaminom E i eteričnim uljima geranije, grejpa i borovice.\n" +
            "\n" +
            "Nježne cvjetne note u kombinaciji sa slatkim citrusnim podtonovima daju kremi božanstven miris, dok se kombinacija ulja i maslaca topi na koži, njegujući i štiteći ruke.\n" +
            "\n" +
            "Prikladna za sve tipove kože."},
    { id: 25, naziv: "TLC krema", cijena:"10.95",slika: "krema5.png", opis: "Ovo je univerzalna tretmanska krema koja pomaže u liječenju nepravilnosti na koži, ogrebotina, umiruje ubode insekata i smiruje svrbež. Nazvana je po svojim aktivnim sastojcima – čajevcu, limunskoj travi i kamilici. Nosite ovaj mali lončić uvijek sa sobom, naročito na putovanjima. Gotovo je kao prirodni antiseptik i zaista djeluje!\n" +
            "\n" +
            "Ova krema se može koristiti i kao hidratantna njega za kožu sklonu aknama jer umiruje iritirane dijelove, pomaže u smanjenju crvenila i pruža koži potrebnu hidrataciju.\n" +
            "\n" +
            "Eterična ulja čajevca, limunske trave i kamilice su aktivni sastojci ove lagane kreme koja pomaže umiriti, izliječiti i smiriti kožu."},
    { id: 26, naziv: "Krema za područje oko očiju", cijena:"9.95",slika: "krema6.png", opis: "Naša Krema za posvjetljivanje područja oko očiju štiti od vanjskih utjecaja i pomaže u prevenciji ranih bora. U Organic Trevarno vjerujemo da je svakodnevna uporaba kvalitetne kreme za oči neophodna, a kad jednom pronađete najbolju kremu, više je nećete mijenjati.\n" +
            "\n" +
            "Ova iznimna i najprodavanija krema za oči izrađena je od predivne mješavine organskih sastojaka. Dizajnirana je za smanjenje tamnih podočnjaka i borbu protiv natečenosti, a lagana tekstura lako se upija, pružajući savršenu ravnotežu hidratacije i njege za osjetljivo područje oko očiju."},
    { id: 27, naziv: "Dnevni hidratantni losion", cijena:"11.95",slika: "krema7.png", opis: "Naš lagani dnevni hidratantni losion savršen je za svakodnevnu njegu kože. Brzo se upija, ne ostavlja masni trag i pruža optimalnu hidrataciju tijekom cijelog dana.\n" +
            "\n" +
            "Formuliran s prirodnim sastojcima koji njeguju i štite kožu, ovaj losion je idealan za sve tipove kože, uključujući osjetljivu i mješovitu kožu. Pomaže u održavanju ravnoteže vlage, ostavljajući kožu mekom, glatkom i blistavom.\n" +
            "\n" +
            "Savršena baza za šminku ili samostalna njega za blistav, zdrav izgled." },

    { id: 31, naziv: "Sapun od lavande i jojobe",cijena:"3.95", slike: ["sapun1.png","sapun1.jpeg", "sapun1a.png"], opis: "Ovaj prirodni sapun kombinuje umirujuća svojstva lavande i hranjivu moć ulja jojobe. Lavanda djeluje antiseptički, pomaže u opuštanju i smanjuje stres, dok jojobino ulje dubinski hidrira i balansira prirodna ulja kože. Savršen je za osjetljivu, suhu i normalnu kožu, čineći je mekom, njegovanom i osvježenom. Blagi, cvjetni miris lavande pruža osjećaj smirenosti nakon svakog korištenja." +
            "Težina: 75g"},
    { id: 32, naziv: "Sapun od kajsije, divljeg meda i timijana", cijena:"4.95",slike: ["sapun2.png","sapun2a.jpeg"] , opis: "Ovaj nježni sapun kombinuje prirodnu slatkoću kajsije, njegujuća svojstva divljeg meda i osvježavajući biljni miris timijana. Pomaže u hidrataciji, umiruje kožu i ostavlja je glatkom i mirisnom nakon svakog pranja.\n" +
            "\n" +
            "Težina: 75g"},
    { id: 33, naziv: "Sapun s lavandom", slike: ["sapun3.png","sapun3a.jpeg"],cijena:"4.95", opis: "Prirodni sapun sa eteričnim uljem lavande pruža umirujuće i opuštajuće dejstvo na kožu i um. Blaga, ali bogata pjena nježno čisti kožu, dok lavanda djeluje antibakterijski i pomaže u smirivanju iritacija. Idealan je za svakodnevnu upotrebu, posebno prije spavanja.\n" +
            "\n" +
            "Težina: 75g"},
    { id: 34, naziv: "Sapun sa nanom, grejpfrutom i đumbirom\n" +
            "\n", slike: ["sapun4.png","sapun4a.jpeg"], cijena:"3.95",opis: "Osvježavajući sapun koji kombinuje hladni i mentolasti miris nane, citrusnu notu grejpfruta i toplinu đumbira. Ova kombinacija energizira kožu, dubinski je čisti i pruža ugodan osećaj svežine i vitalnosti nakon svakog pranja.\n" +
            "\n" +
            "Težina: 75g"},
    { id: 35, naziv: "Sapun sa morskom algom, limetom i lovorom",cijena:"4.95", slike: ["sapun5.png","sapun5a.jpeg"], opis: "Ovaj sapun sadrži hranjivu morsku algu, osvežavajuću limetu i aromatični lovor. Idealna kombinacija koja dubinski čisti, hrani i tonira kožu, ostavljajući je mekom, osveženom i blago mirisnom. Savršen za svakodnevnu upotrebu.\n" +
            "\n" +
            "Težina: 75g"},
    { id: 36, naziv: "Baštenski sapun", slike: ["sapun6.png","sapun6a.jpeg"],cijena:"5.95", opis: "Ovaj sapun je posebno formulisan za ruke baštovana. Efikasno uklanja prljavštinu, zemlju i ostatke biljaka, dok istovremeno neguje kožu i sprečava njeno isušivanje. Sadrži prirodne sastojke koji umiruju i štite ruke nakon napornog rada u bašti.\n" +
            "\n" +
            "Težina: 75g"},
    { id: 37, naziv: "Sapun od citrusa i morske soli", cijena:"4.95",slike: ["sapun7.png","sapun7a.jpeg"], opis: "Ovaj osvežavajući sapun kombinuje energiju citrusnih aroma sa blagim piling efektom morske soli. Pomaže u uklanjanju mrtvih ćelija kože, ostavljajući je glatkom i osveženom. Idealno za toniranje kože i podizanje raspoloženja.\n" +
            "\n" +
            "Težina: 75g"},
    { id: 38, naziv: "Sapun od avokada i čajevca", cijena:"3.95",slike: ["sapun8.png","sapun8a.png"], opis: "Ovaj hranljivi sapun spaja bogatstvo avokada, poznatog po svojoj hidratantnoj moći, i antiseptička svojstva ulja čajevca. Idealno je za čišćenje i njegu kože, pomažući u smirivanju iritacija i održavanju prirodne ravnoteže kože.\n" +
            "\n" +
            "Težina: 75g"},
    {id: 39, naziv: "Sapun od vanile, badema i kakao maslaca",cijena:"6.95", slike: ["sapun9.png","sapun9a.jpeg"], opis: "Ovaj bogati sapun kombinuje slatke note vanile i hranjivih badema sa duboko hidratantnim kakao maslacem. Savršen je za njegujuće i blago čišćenje kože, ostavljajući je mekanom, glatkom i ugodno mirisnom.\n" +
            "\n" +
            "Težina: 75g"},
    {id: 310, naziv: "Organski sapun od kamilice", cijena:"3.95",slike: ["sapun10.png","sapun10a.jpeg"], opis: "Nježan sapun napravljen od organske kamilice, poznate po svojim umirujućim i protivupalnim svojstvima. Idealno za osjetljivu i iritiranu kožu, ovaj sapun pomaže u smirivanju crvenila i pruža blagu, prirodnu njegu.\n" +
            "\n" +
            "Težina: 75g"},
    { id: 41, naziv: "Ulje jojobe", cijena:"11.95",slike: ["ulje1a.png","ulje1.png", "ulje1b.png"],opis: "Biljno ulje jojobe je savršeno za sve tipove kože i široko se koristi u tretmanima lica, jer je pogodno i za mešovitu ili masnu kožu.\n" +
            "Ne zapušava pore (nekomedogeno je). Njegov sastav je sličan prirodnom sebumu kože, pa je njegova kompatibilnost s kožom i kosom izuzetna.\n" +
            "Pomaže u jačanju hidrolipidnog sloja kože i predstavlja odličan hidratantni agens.\n" +
            "Hrani kožu i prodire duboko, a da pri tom ne ostavlja mastan trag.\n" +
            "Izdvaja se po svojim anti-age svojstvima, sposobnosti regulacije sebuma i odličan je saveznik u borbi protiv akni."},
    { id: 42, naziv: "Ulje nevena", cijena:"16.95",slike: [ "ulje2.png","ulje2a.png","ulje2b.png" ], opis: "Ulje nevena je izuzetno blago i umirujuće ulje, pogodno za sve tipove kože, uključujući i veoma osetljivu kožu, kožu beba i iritiranu kožu.\n" +
            "Poznato je po svojim antiinflamatornim, regenerativnim i antiseptičkim svojstvima.\n" +
            "Pomaže u smirivanju crvenila, iritacija, opekotina od sunca, ekcema i manjih povreda kože.\n" +
            "Intenzivno neguje, hidrira i podstiče obnavljanje kože.\n" +
            "Zahvaljujući svojim prirodnim aktivnim sastojcima, odličan je izbor za svakodnevnu negu, kao i za upotrebu nakon izlaganja suncu ili kod ispucale i suve kože."},
    { id: 43, naziv: "Organsko ulje ruzmarina ",cijena:"13.95", slike:[ "ulje3.png","ulje3a.png","ulje3b.png"], opis: "Organsko etarsko ulje ruzmarina poznato je po svojim stimulišućim, osvežavajućim i tonirajućim svojstvima.\n" +
            "Često se koristi u aromaterapiji za poboljšanje koncentracije, pamćenja i mentalne bistrine.\n" +
            "Ima antibakterijska i protivupalna svojstva, pa je odličan za negu problematične kože i vlasišta.\n" +
            "Podstiče cirkulaciju, jača kosu i sprečava opadanje, pa se često koristi u tretmanima za rast kose.\n" +
            "Može se koristiti razblaženo u baznom ulju za masažu, kupke ili kao dodatak prirodnoj kozmetici."},
    { id: 44, naziv: "Ulje eukaliptusa", cijena:"11.95",slike: ["ulje4.png","ulje4a.png","ulje4b.png"], opis: "Ulje eukaliptusa ima jaka antiseptička, antibakterijska i antivirusna svojstva, zbog čega je veoma cenjeno u prirodnoj medicini i aromaterapiji.\n" +
            "Najčešće se koristi za olakšavanje respiratornih problema poput prehlade, kašlja, bronhitisa i zapušenog nosa – u vidu inhalacija ili balzama.\n" +
            "Osvežava, rashlađuje i pomaže u oslobađanju disajnih puteva.\n" +
            "Deluje i protivupalno, pa se koristi i kod bolova u mišićima i zglobovima, često u masažama.\n" +
            "Može doprineti mentalnoj jasnoći i povećati koncentraciju, zahvaljujući svom prodornom, čistom mirisu."},
    { id: 45, naziv: "Ulje mandarine", cijena:"15.95",slike: ["ulje5.png","ulje5a.png","ulje5b.png"], opis: "Ulje mandarine deluje umirujuće, opuštajuće i osvežavajuće, pa je odlično za ublažavanje stresa, nervoze i nesanice.\n" +
            "Posebno je pogodno za decu i osobe sa osetljivom kožom, jer je jedno od najblažih etarskih ulja.\n" +
            "Podstiče regeneraciju kože, ujednačava ten i koristi se u borbi protiv strija i ožiljaka.\n" +
            "Ima blago antiseptičko i detoksikujuće dejstvo, pa se često koristi i u masažnim uljima za podsticanje cirkulacije i limfne drenaže.\n" +
            "Savršeno se uklapa u večernje aromaterapijske rituale zbog svog prijatnog i toplog mirisa."},
    { id: 46, naziv: "Ulje lavande", cijena:"17.95",slike: ["ulje6.png","ulje6a.png","ulje6b.png"], opis: "Etarsko ulje lavande deluje opuštajuće na um i telo, pomaže kod stresa, nesanice, anksioznosti i glavobolje.\n" +
            "Blagotvorno deluje na kožu – ubrzava regeneraciju, ublažava iritacije, opekotine, ubode insekata, akne i manje posekotine.\n" +
            "Zahvaljujući svom antibakterijskom i protivupalnom dejstvu, koristi se u prirodnoj kozmetici, nezi problematične kože i kod osetljivog vlasišta.\n" +
            "Odlično je i u masažama, kupkama i aromaterapiji – stvara osećaj smirenosti i emocionalne ravnoteže.\n" +
            "Može se koristiti direktno na koži u malim količinama, za razliku od većine etarskih ulja."},
    { id: 47, naziv: "Ulje za opuštanje i protiv stresa ",cijena:"13.95", slike: ["ulje7.png","ulje7a.png","ulje7b.png"], opis: "Hranljivo i dermoprotektivno ulje za telo sa umirujućim svojstvima. Idealno kao anti-stres preparat jer smiruje i pomaže pri uspavljivanju.\n" +
            "Savršeno za hidrataciju kože pre spavanja ili za dodavanje nekoliko kapi u kupku.\n" +
            "\n" +
            "Sadrži organska ulja nevena, susama i lanenog semena — izvrsne sastojke za zaštitu, regeneraciju, protivupalno dejstvo i umirenje kože, posebno pogodne za osetljivu ili delikatnu kožu, kao i za kožu sa dermatitisom, svrabom, ekcemom ili atopijskim pogoršanjima.\n" +
            "\n" +
            "Zaljubićete se u njen nežan i obavijajući miris, spoj lavande, narandže i bergamota, koji pomaže u stvaranju osećaja opuštenosti i mira."},


];


function ProizvodDetalji() {
    const { id } = useParams();  // dohvaća id iz URL-a

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const proizvod = proizvodi.find(p => p.id === Number(id));
    const [trenutnaSlika, setTrenutnaSlika] = useState(0);
    const [kolicina, setKolicina] = useState(1);
    const [poruka, setPoruka] = useState("");

    if (!proizvod) return <p>Proizvod nije pronađen.</p>;

    const ostaliProizvodi = proizvodi
        .filter(p => p.kategorija === proizvod.kategorija && p.id !== proizvod.id)
        .slice(0, 4);

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

    // Nova funkcija sa porukom na vrhu
    const handleDodajUKorpu = (proizvod) => {
        setPoruka(`Proizvod "${proizvod.naziv}" je dodat u korpu, količina: ${kolicina}.`);
        // Poruka nestaje posle 3 sekunde
        setTimeout(() => {
            setPoruka("");
        }, 3000);
    };

    return (
        <div>
            {poruka && (
                <div style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100%",
                    backgroundColor: "#4caf50",
                    color: "white",
                    padding: "10px",
                    textAlign: "center",
                    zIndex: 1000
                }}>
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