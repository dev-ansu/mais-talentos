import {Link} from "react-router-dom"
import mais_talentos from "@/assets/mais_talentos.jpeg"
import "./style.css"

const Header = ()=>{
    return (
        <header>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link to="/"><img id="logo" src={mais_talentos} alt="logo mais talentos" /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="/" className="nav-link" aria-current="page">Início</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/candidato" className="nav-link" aria-current="page">Candidato</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/empresa" className="nav-link" aria-current="page">Empresa</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                </nav>
        </header>
    )
}

export default Header;