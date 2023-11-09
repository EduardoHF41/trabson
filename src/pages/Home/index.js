import { Link } from "react-router-dom";
import './style.css'
function Home(){
    return(
        <div className="content">
            <h1>Sejam Bem-vindos(s)</h1>
            <span>Edu :3</span>
            <hr/>
            <Link to="/sobre" className="links">Sobre</Link>
            <br/>
            <Link to="/contato" className="links">Contato</Link>

            <hr/>
            
            <Link to="/produto" className="links" >Acessar Produto</Link>
        </div>
    );
}

export default Home;