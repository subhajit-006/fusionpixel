import { Link } from "react-router-dom";
import Footer from "../components/ui/Footer"
import Nabvar from "../components/ui/Navbar"
import Cursor from "../components/ui/Cursor";
import Services from "../components/Services"

function ServicePage() {
    return (
        <>
            <Cursor />
            <div className="h-[100h] flex flex-col justify-center gap-10 pb-16 bg-[#0E3332]">
                <Nabvar />
                <Services />
            </div>
            <Footer />
        </>
    )
}

export default ServicePage;