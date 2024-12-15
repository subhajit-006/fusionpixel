import Navbar from "../components/ui/Navbar";
import { Link } from "react-router-dom";
import Services from "../components/Services";
import Contact from "../components/Contact";
import Footer from "../components/ui/Footer";
import Cursor from "../components/ui/Cursor";
import bgVid from "../assets/background/bgVid.mp4";

function HomePage() {
    return (
        <>
            <Cursor />
            <div className="relative">
                <video
                    className="absolute top-0 left-0 w-full h-full object-cover -z-10"
                    src={bgVid}
                    autoPlay
                    loop
                    muted
                />
                <div className="relative z-10">
                    <Navbar />
                    <div className="flex flex-col items-center justify-center gap-6 h-[88vh] px-4 text-center">
                        <h1 className="text-4xl sm:text-6xl font-bold text-white font-fontProtest">
                            Welcome to FushionPixellab
                        </h1>
                        <p className="text-sm sm:text-xl text-gray-300 font-fontDyan font-thin">
                            Transform your digital imagery with our cutting-edge pixel manipulation services.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="w-full sm:w-auto border-[2px] border-black p-2 font-fontDyan font-thin rounded bg-black text-white transition-transform duration-300 transform hover:scale-105 hover:bg-black/80 hover:border-black/80">
                                <Link to="/AuthPage">Get Started</Link>
                            </button>
                            <button className="w-full sm:w-auto border-[2px] border-white font-fontDyan font-thin text-white p-2 rounded transition-transform duration-300 transform hover:scale-105 hover:bg-black/5">
                                <Link to="/AboutUsPage">Learn More</Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <Services />
            <Contact />
            <Footer />
        </>
    );
}

export default HomePage;
