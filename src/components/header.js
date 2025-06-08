import React, { useEffect } from 'react';
import '../assets/styles/header.css';

function Header() {
    useEffect(() => {
        // Ovaj useEffect se poziva kada je komponenta mountovana
        const textElement = document.querySelector('.moving-text');

        // Dodajemo klasu samo ako je element pronađen
        if (textElement) {
            textElement.classList.add('move-in-circle');
        }
    }, []);
    return (
        <header>
            {/* Kratki info bar */}
            <div className="top-banner">
                <p className="moving-text">Besplatna poštarina za narudžbe iznad 50KM.</p>
            </div>


        </header>
    );
}

export default Header;
