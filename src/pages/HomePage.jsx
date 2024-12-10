import Navbar from "../components/ui/Navbar";
import { Link } from "react-router-dom";
import Services from "../components/Services";
import Contact from "../components/Contact";
import Footer from "../components/ui/Footer";

function HomePage() {
    return (
        <>
        
            <div className="bg-gradient-to-l from-[#5170ff] to-[#ff66c4]">
                <Navbar />
                <div className="flex flex-col items-center justify-center gap-4 h-[88vh]">

                    <h1 className="text-6xl font-bold">
                        Welcome to FusionPixelLabs
                    </h1>
                    <p className="text-xl text-gray-700">
                        Transform your digital imagery with our cutting-edge pixel manipulation services.
                    </p>
                    <div className="flex gap-5">
                        <button className="border-[1.5px] border-black p-2 rounded bg-black text-white font-medium hover:bg-black/80 hover:border-black/80">
                            <Link to="/AuthPage">Get Started</Link>
                        </button>
                        <button className="border-[1.5px] border-black/25 p-2 rounded font-medium hover:bg-black/5">
                            <Link to="/AboutUsPage">Learn More</Link>
                        </button>
                    </div>
                </div>
                <Services />
                <Contact />
                <Footer />
            </div>
        </>
    )
}

export default HomePage;