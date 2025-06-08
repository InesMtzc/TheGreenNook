import React, { useState, useEffect } from "react";
import "../assets/styles/dodajproizvod.css";

function DodajProizvod() {
    const [naziv, setNaziv] = useState("");
    const [opis, setOpis] = useState("");
    const [cijena, setCijena] = useState("");
    const [kategorija, setKategorija] = useState("");
    const [slika, setSlika] = useState("");
    const [proizvodi, setProizvodi] = useState([]);

    // Dohvati proizvode iz baze
    useEffect(() => {
        fetch("http://localhost:3000/proizvodi")
            .then((res) => res.json())
            .then((data) => setProizvodi(data))
            .catch((err) => console.error(err));
    }, []);

    // Dodaj proizvod
    const handleSubmit = (e) => {
        e.preventDefault();
        const noviProizvod = {
            naziv,
            opis,
            cijena: parseFloat(cijena),
            kategorija,
            slika,
            slike: [slika],
        };

        fetch("http://localhost:3000/proizvodi", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(noviProizvod),
        })
            .then((res) => res.json())
            .then((data) => {
                setProizvodi([...proizvodi, data]);
                setNaziv("");
                setOpis("");
                setCijena("");
                setKategorija("");
                setSlika("");
            })
            .catch((err) => console.error(err));
    };

    // Obrisi proizvod
    const handleDelete = (id) => {
        fetch(`http://localhost:3000/proizvodi/${id}`, {
            method: "DELETE",
        })
            .then(() => {
                setProizvodi(proizvodi.filter((p) => p.id !== id));
            })
            .catch((err) => console.error(err));
    };

    return (
        <div className="dodaj-proizvod-stranica">
            <form className="dodaj-proizvod-forma" onSubmit={handleSubmit}>
                <h2>Dodaj novi proizvod</h2>
                <input
                    type="text"
                    placeholder="Naziv"
                    value={naziv}
                    onChange={(e) => setNaziv(e.target.value)}
                    required
                />
                <textarea
                    placeholder="Opis"
                    value={opis}
                    onChange={(e) => setOpis(e.target.value)}
                    required
                />
                <input
                    type="number"
                    placeholder="Cijena"
                    value={cijena}
                    onChange={(e) => setCijena(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Kategorija"
                    value={kategorija}
                    onChange={(e) => setKategorija(e.target.value)}
                    required
                />
                <label>Slika</label>
                <input
                    type="file"
                    onChange={(e) => setSlika(e.target.files[0])}
                />
                <button type="submit">Dodaj proizvod</button>
            </form>

            <h3>Lista proizvoda</h3>
            <ul className="lista-proizvoda">
                {proizvodi.map((p) => (
                    <li key={p.id}>
                        <strong>{p.naziv}</strong> – {p.kategorija} – {p.cijena} KM
                        <button
                            className="btn-obrisi"
                            onClick={() => handleDelete(p.id)}
                        >
                            Obriši
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default DodajProizvod;
