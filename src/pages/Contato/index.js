import { Link } from "react-router-dom";
import './style.css'
function Contato(){
    return(
        <div className="content">
            <h1>Página de Contato</h1>
            <span>Contato da empresa (dd) xxxx-xxxx</span>
            <hr/>
            <Link to="/" className="links">Home</Link>
            <br/>
            <Link to="/sobre" className="links">Sobre</Link>

            <hr/>
            
            <Link to="/produto" className="links">Acessar Produto</Link>
        </div>
    );
}

export default Contato;