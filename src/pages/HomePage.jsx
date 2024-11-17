import Navbar from "../components/ui/Navbar";
import HeroElement from "../components/HeroElement"
import Services from "../components/Services";
import Contact from "../components/Contact"

function HomePage() {
    return (
        <>
            <Navbar />
            <HeroElement />
            <Services />
            <Contact />
        </>
    )
}

export default HomePage;