
import { Link } from "react-router-dom";
import "./style.css"
const Home = ()=>{
    return(
        <>
            <div id="home" className="my-container">
                <div className="header bg-primary-color">
                    <div className="disclaimer w-50">
                        <h1 className="">Conquiste seu estágio dos sonhos com a 
                        <span className="primary-color detalhe-talentos">+Talentos.</span></h1>
                        <Link className="btn btn-cadastrar" to="/candidato">Cadastre-se</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;