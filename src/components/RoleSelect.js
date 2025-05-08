import Reactfrom  from "react";
import {useNavigate} from "react-router-dom";
import './style.css';

const RoleSelect= ()=> {
    const navigate = useNavigate();

    return (
        <div className="background">
            <div className="role-box">
                <button onClick={()=>navigate("/login")}>Admin</button>
                <button onClick={()=>navigate("/login")}>Gost</button>
            </div>
        </div>
    );
};

export default RoleSelect;