import { Link } from "react-router-dom";

import './style.css';

function Header(){
    return(
        <header>
            <h2>Aplicação exemplo</h2>
            
            <div >
                <Link to="/" className="link">Home</Link>
                <Link to="/sobre" className="link">Sobre</Link>
                <Link to="/produto" className="link">Produto</Link>
                <Link to="/contato" className="link">Contato</Link>
            </div>

        </header>
        
    );
}

export default Header;