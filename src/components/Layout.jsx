import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import "./layout.module.css"

const Layout = ({children})=>{
    return (
    <div className="container-fluid">
        <Header />
            {children}
        <Footer />
    </div>
    )
}

export default Layout;