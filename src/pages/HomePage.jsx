import Navbar from "../components/ui/Navbar";
import HeroElement from "../components/HeroElement";
import Services from "../components/Services";
import Contact from "../components/Contact";
import Footer from "../components/ui/Footer";

function HomePage() {
    return (
        <>
            <Navbar />
            <HeroElement />
            <Services />
            <Contact />
            <Footer />
        </>
    )
}

export default HomePage;