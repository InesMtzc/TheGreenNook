import React, { useEffect, useState } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import "../assets/styles/adminstr.css";

function Poruke() {
    const [poruke, setPoruke] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('http://localhost:3000/messages')
            .then(res => {
                if (!res.ok) throw new Error('Greška pri dohvaćanju poruka');
                return res.json();
            })
            .then(data => {
                setPoruke(data);
                setLoading(false);
            })
            .catch(err => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    return (
        <>
            <Header />
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh',
            }}>
                <main style={{ flex: '1 0 auto', padding: '1rem' }}>
                    <h1>Vaše poruke</h1>

                    {loading && <p>Učitavanje poruka...</p>}
                    {error && <p style={{ color: 'red' }}>{error}</p>}

                    {!loading && !error && poruke.length === 0 && <p>Nema poruka.</p>}

                    {!loading && !error && poruke.length > 0 && (
                        <table className="poruke-table">
                            <thead>
                            <tr>
                                <th>Ime</th>
                                <th>Email</th>
                                <th>Poruka</th>
                                <th>Datum</th>
                            </tr>
                            </thead>
                            <tbody>
                            {poruke.map((poruka) => (
                                <tr key={poruka.id}>
                                    <td>{poruka.ime}</td>
                                    <td>{poruka.email}</td>
                                    <td>{poruka.poruka}</td>
                                    <td>{new Date(poruka.datum).toLocaleString()}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    )}
                </main>
                <Footer />
            </div>
        </>
    );
}

export default Poruke;
