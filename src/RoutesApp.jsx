import {createBrowserRouter} from "react-router-dom";
import FormCandidato from "@/components/pages/FormCandidato/FormCandidato"
import Home from "@/components/pages/Home/Home";
import Layout from "./components/Layout";
import Private from "./components/pages/admin/Private";
import Admin from "./components/pages/admin";
import Login from "./components/pages/Login";

export const router = createBrowserRouter([
    {
        path:"/",
        element:<Layout> <Home /> </Layout>,
    },
    {
        path:"/candidato",
        element: <Layout> <FormCandidato /> </Layout>
    },
    {
        path:"/empresa",
        element: <Layout> <h1>Empresa</h1> </Layout>
    },
    {
        path:"/login",
        element: <Layout><Login /></Layout>
    },
    {
        path:"/admin",
        children:[
            {
                index: true,
                element:
                <Private>
                    <Admin />
                </Private>,
            },
            {
                path:"candidatos",
                element:
                <Private>
                    <h1>Candidatos</h1>
                </Private>
            }
        ]
    },
    {
        path:"*",
        element:<h1>Não encontrado</h1>
    }
]);