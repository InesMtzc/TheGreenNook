import { useParams } from 'react-router-dom';
import proizvodi from './proizvodi'; // ili iz fajla gdje imaš listu proizvoda

function SearchResults() {
    const { query } = useParams();
    const searchTerm = query.toLowerCase();

    // Filtriranje proizvoda po nazivu ili kategoriji
    const filtriraniProizvodi = proizvodi.filter(p =>
        p.naziv.toLowerCase().includes(searchTerm) ||
        (p.kategorija && p.kategorija.toLowerCase().includes(searchTerm)) // ako imaš kategoriju
    );

    if (filtriraniProizvodi.length === 0) {
        return <p>Nema proizvoda za "{query}".</p>;
    }

    return (
        <div>
            <h2>Rezultati pretrage za: "{query}"</h2>
            <ul>
                {filtriraniProizvodi.map(p => (
                    <li key={p.naziv}>{p.naziv} - {p.cijena} KM</li>
                ))}
            </ul>
        </div>
    );
}

export default SearchResults;
