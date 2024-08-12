import { FormProvider, useForm } from "react-hook-form";
import { useState } from "react"
import Container from "@/components/Container";
import PersonalInformation from "@/components/PersonalInformation"
import AcademicInformation from "@/components/AcademicInformation"
import ContactInformation from "@/components/ContactInformation"
import BreadCrumb from "@/components/BreadCrumb/BreadCrumb";
import "@/style.css";
import WorkInformation from "@/components/WorkInformation"
import {zodResolver} from "@hookform/resolvers/zod"
import {z} from "zod";
import { toast } from 'react-toastify';
import ListSteps from "@/components/ListSteps/ListSteps"
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import {db} from "../../../services/api";
const phoneRegex = /^\(?\d{2}\)?[\s-]?(\d{4,5})[\s-]?(\d{4})$/;

const schema = z.object({
  nome: z.string().min(1, "O campo é obrigatório"),
  sexo:z.string().min(1, "O campo é obrigatório").refine((data) => data.toUpperCase() === "M" || data.toUpperCase() === "F", {
    message: "Escolha entre masculino e feminino."
  }),
  estado_civil:z.string().refine((data)=> {
    const options ='SOLTEIRO(A),CASADO(A),DIVORCIADO(A),VIÚVO(A)'.split(",");
    if(options.includes(data.toUpperCase())){
      return data;
    }
  }, 'Escolha uma das opções'),
  data_nascimento: z.string().date('Preencha com uma data válida.'),
  sobrenome: z.string().min(1, "O campo sobrenome é obrigatório."),
  whatsapp: z.string().regex(phoneRegex, 'O número digitado não é válido.'),
  telefone: z.string().regex(phoneRegex, 'O número digitado não é válido.'),
  email: z.string().email("Digite um e-mail válido"),
  escolaridade: z.string().min("1", 'Escolha uma das opções.'),
  objetivo_profissional: z.string().min(1, "Escolha uma das opções abaixo."),
  trabalha_atualmente: z.string().min(1, "Este campo é obrigatório").refine( data => data.toUpperCase() === 'S' || data.toUpperCase() === 'N' ? data:false),
  curso: z.string().min(1, "Digite o nome do curso")
});

const FormCandidato = ()=>{

    const [data, setData] = useState();
    
    const methods = useForm({
    resolver: zodResolver(schema),
    });


    const { handleSubmit, setValue, reset,watch, trigger, formState: { errors }, clearErrors, register } = methods;

    const [steps, setAllStep] = useState([
    {
        title:"Informações pessoais",
        icon:<i className="bi bi-person-circle"></i>,
        validations:['nome', 'sobrenome','data_nascimento','estado_civil','sexo'],
        element: <PersonalInformation />
    },
    {
        title:"Informações de contato",
        icon:<i className="bi bi-telephone-fill"></i>,
        validations:['whatsapp', 'telefone','email'],
        element: <ContactInformation  />
    },
    {
        title:"Informações acadêmicas",
        icon:<i className="bi bi-mortarboard-fill"></i>,
        validations:['escolaridade', 'curso'],
        element: <AcademicInformation />
    },
    {
        title:"Informações profissionais",
        icon:<i className="bi bi-suitcase-lg-fill"></i>,
        validations:['trabalha_atualmente', 'objetivo_profissional'],
        element: <WorkInformation />
    }
    ]);

    const [step, setStep] = useState(0);
    const [ableSave, setAbleSave] = useState(false);


    const nextStep = async ()=>{
        let test = await trigger(steps[step].validations);
        if(test){
        if(step < steps.length - 1){
            setStep(step + 1);
        }else{
            setAbleSave(true);
        }
        }else{
        toast.error("Por favor, verifique os campos obrigatórios antes de continuar")
        }
        
    }  

    const prevStep = ()=>{
    if(step >= 1){
        setStep(step - 1);
    }
    } 


    const onSubmit = async(data)=>{
    const candidatos = collection(db, 'candidatos')
    data.data_cadastro = new Date().toLocaleDateString('pt-BR').split("/").reverse().join("-")
    if(data){
        try{
        // Adicionar um documento a coleção
        const newDocRef = await addDoc(candidatos, data);
        if(newDocRef.id){
            toast.success("Sua inscrição foi recebida com sucesso! Fique atento ao seu e-mail e WhatsApp para receber novas informações.", {
            autoClose: 7000
            })
            setStep(0);
            reset();
        }else{
            toast.error("Não foi possível realizar a inscrição neste momento. Tente novamente mais tarde!")
        }
        }catch(error){
        toast.error("Erro ao realizar a inscrição.")
        // Erro ao tentar adicionar um novo documento
        // console.log(error);
        }
    }
    }

    const handleSetStepByClick = async(step)=>{
        setStep(step);
    }

    return(
        <Container>
          <BreadCrumb title="Aqui você é um talento!" subTitle="Conquiste a vaga dos seus sonhos com a +Talentos." />
          <hr></hr>
          <FormProvider {...methods}>
            <div id="container-form-steps" className="d-flex flex-column gap-4">
              <ListSteps  handleSetStepByClick={handleSetStepByClick} steps={steps} actualStep={step} />
              <form onSubmit={methods.handleSubmit(onSubmit)} className="steps">
                <div className="d-flex flex-column gap-1">
                  {step + 1}/{steps.length}
                  <span>{steps[step].title} {steps[step].icon}</span>
                </div>  
                {steps[step].element}
                <div className="d-flex gap-2 mt-4">
                  {!(step >= 1) || <span className="btn btn-secondary"  onClick={prevStep}><i className="bi fs-5 bi-caret-left-fill"></i></span>}
                  {(steps.length - 1 <= step) || <span className="btn btn-primary justify-content-center align-items-center d-flex" onClick={nextStep}>Próximo<i className="bi fs-5 bi-caret-right-fill"></i></span>}
                  {(!ableSave && steps.length - 1 > step) || <button className="btn btn-success btn-lg">Salvar <i className="bi bi-floppy2"></i></button>}
                </div>
              </form>
              <div className="text-white">
              {!data || JSON.stringify(data, null, 4)}
              </div>
            </div>
          </FormProvider>
        </Container>
    )
}

export default FormCandidato;