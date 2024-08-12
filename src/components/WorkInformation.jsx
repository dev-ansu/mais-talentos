import { useData } from "../contexts/DataContext";
import { useFormContext } from "react-hook-form";
const WorkInformation = ()=>{
    const {register, setValue, formState:{errors}} = useFormContext();
    
    return (
        <div className="form-group">
            <div className="w-100 d-flex flex-column gap-2">
                <label className="fs-4" htmlFor="">Objetivo profissional:*</label>
                <span>Com o que você gostaria de trabalhar? Exemplo: administração, TI, comercial, RH</span>
                <select {...register('objetivo_profissional', {required:true})} className="form-select">
                    <option value="Administração">Administração</option>
                    <option value="Comercial/Vendas">Comercial/Vendas</option>
                    <option value="TI">TI</option>
                    <option value="Logística">Logística</option>
                    <option value="RH">RH</option>
                    <option value="Gastronomia">Gastronomia</option>
                    <option value="Construção civil">Construção civil</option>
                    <option value="Serviços gerais">Serviços gerais</option>
                    <option value="Contábil, finanças, economia">Contábil, finanças, economia</option>
                    <option value="Saúde">Saúde</option>
                    <option value="Industrial, Produção, Fábrica">Industrial, Produção, Fábrica</option>
                </select>
                {errors?.objetivo_profissional && <span>{errors.objetivo_profissional.message}</span>}
            </div>
            <div className="w-100 d-flex flex-column gap-2">
                <label className="fs-4" htmlFor="">Você trabalha atualmente?*</label>
                <select {...register('trabalha_atualmente', {required:true})} name="trabalha_atualmente" id="" className="form-select">
                    <option value="">Selecione uma opção</option>
                    <option value="S">Sim</option>
                    <option value="N">Não</option>
                </select>
                {errors?.trabalha_atualmente && <span>{errors.trabalha_atualmente.message}</span>}

            </div>
        </div>
    );
}


export default WorkInformation;