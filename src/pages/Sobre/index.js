import { Link } from "react-router-dom";
import './style.css'
function Sobre(){
    return(
        <div className="content">
            <h1>About me</h1>
            <p>lorem lorem</p>
            <Link to="/" className="links">Home</Link>
            <br/>
            <Link to="/contato" className="links">Contato</Link>

            <hr/>
            
            <Link to="/produto" className="links">Acessar Produto</Link>
        </div>
    );
}

export default Sobre;
