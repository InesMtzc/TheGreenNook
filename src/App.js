import {Routes, Route } from "react-router-dom";
import Pocetna from "./pages/pocetna";
import Onama from "./pages/onama";
import Proizvodi from "./pages/proizvodi";
import Kontakt from "./pages/kontakt";
import Dostava from "./pages/dostava";

function App() {
    return (

        <Routes>
            <Routes>
                <Route path="/" element={<Pocetna />} />
                <Route path="/onama" element={<Onama />} />
                <Route path="/proizvodi" element={<Proizvodi />} />
                <Route path="/kontakt" element={<Kontakt />} />
                <Route path="/dostava" element={<Dostava />} />
            </Routes>
        </Routes>
    );
    <Pocetna></Pocetna>
}

export default App;
