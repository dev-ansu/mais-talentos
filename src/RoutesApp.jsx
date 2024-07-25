import {Routes, Route} from "react-router-dom";
import FormCandidato from "@/components/pages/FormCandidato/FormCandidato"
import Home from "@/components/pages/Home/Home";
const RoutesApp = ()=>{

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/candidato" element={<FormCandidato />} />
            <Route path="/empresa" element={<h1>Empresa</h1>} />
            <Route path="*" element={<h1>Não encontrado</h1>} />
        </Routes>
    )
}


export default RoutesApp;