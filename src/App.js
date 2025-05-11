import  React from 'react';
import {BrowserRouter as Router , Routes, Route} from 'react-router-dom';
import RoleSelect from './components/RoleSelect';
import Login from './components/Login';
import Register from './components/Register';
import Home from './Home';



function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<RoleSelect /> } />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login/register" element={<RoleSelect />} />
                <Route path="/home" element={<Home />} />

            </Routes>
        </Router>
    );
}

export default App;