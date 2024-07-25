import "./style.css";
import talentos from "@/assets/talentos.png"
import {Link} from "react-router-dom"

const Footer = ()=>{

    return (
        <footer id="footer" className="mt-4">
            <div className="d-flex align-items-center gap-4 justify-content-around">
                <img className="logo" src={talentos} alt="Logo do mais talentos" />
                <div className="d-flex gap-2 redes-sociais">
                    <div className="d-flex flex-column justify-content-center align-items-center text-white">
                        <a target="_blank" className="fs-1 p-0 m-0 text-white" href="https://www.instagram.com/faprecarlito/"><i className="bi bi-instagram"></i></a>
                        <small>Instagram</small>
                    </div>
                </div>
                
            </div>
            <hr />
            <div className="d-flex align-items-start gap-4 justify-content-around">
                <div className="institucional d-flex flex-column gap-1">
                    <h4 className="text-white">Institucional</h4>
                    <ul className="text-white">
                        <li>Lorem</li>
                        <li>Lorem</li>
                        <li>Lorem</li>
                        <li>Lorem</li>
                        <li>Lorem</li>
                    </ul>
                </div>   
                <div className="candidato d-flex flex-column gap-1">
                    <h4 className="text-white">Candidato</h4>
                    <ul className="text-white">
                        <li><Link className="nav-link" to="/candidato">Cadastro</Link></li>
                    </ul>
                </div>   
                <div className="empresa d-flex flex-column gap-1">
                    <h4 className="text-white">Empresa</h4>
                    <ul className="text-white">
                        <li><Link className="nav-link" to="/empresa">Cadastro</Link></li>
                    </ul>
                </div>             
            </div>
        </footer>
    )
}

export default Footer;