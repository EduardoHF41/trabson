import { Link } from "react-router-dom";
import './style.css'
function Produto(){
    return(
        <div className="content">
            <h1>Página de Produto!</h1>
            <span>Meu produto!</span>
            <br/>

            <Link to="/" className="links">Home</Link>
            <br/>
            <Link to="/sobre" className="links">Sobre</Link>

            <br/>
            <Link to="/contato" className="links">Contato</Link>   
            <hr/>
            
        </div>
    );
}

export default Produto;