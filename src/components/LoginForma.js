import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import '../assets/styles/loginstil.css';

function LoginForma({ onLogin }){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch(`http://localhost:5000/users?email=${email}&password=${password}`);
            const podaci = await res.json();
            if(podaci.length > 0){
                const korisnik = podaci[0];
                localStorage.setItem('ulogovaniKorisnik', JSON.stringify(korisnik));
                onLogin(korisnik);
                navigate('/');
            }else{
                console.log('Pogresan email ili lozinka');
            }
        }catch(error) {
            console.log('Server nije dostupan!');
        }
    }
    return (


        <div className="login-wrapper">
            <form onSubmit={handleSubmit}>
                    <h2>LOGIN</h2>
                    <label>Email</label>
                    <input
                        type='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <label>Lozinka</label>
                    <input
                        type='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                <button type="submit" style={{ color: 'white' }}>Prijavi se</button>
                <p style={{ color: 'white', marginTop: '10px' }}>Nemate račun?
                        <Link to="/signup" style={{ color: 'white', textDecoration: 'underline' }}>
                            Registruj se
                        </Link></p>

            </form>
        </div>
    );
}

export default LoginForma;

