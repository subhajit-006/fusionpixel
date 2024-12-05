import Navbar from "../components/ui/Navbar";
import Footer from "../components/ui/Footer";
import Services from "../components/Services";
import contactBg from "../assets/contactBg.png";
import Contact from "../components/Contact"

function AboutUsPage() {
    return (
        <>
            <Navbar />
                <div className="h-[45vh] flex justify-center items-center flex-col gap-2 bg-gray-100">
                    <h1 className="text-6xl font-bold">About FusionPixel</h1>
                    <p className="text-2xl text-gray-500">Transforming ideas into visual masterpieces since 2020</p>
                </div>

                <div className="pb-20">
                    <div className="pt-32 pb-20 px-40 flex flex-col gap-10">
                        <h1 className="text-5xl font-bold">Our Mission</h1>
                        <p className="text-2xl text-gray-500">At FusionPixel, we're on a mission to empower creators, businesses, and visionaries with cutting-edge digital solutions. We believe in the power of visual storytelling and its ability to transform ideas into impactful realities.
Our team of passionate professionals is dedicated to pushing the boundaries of creativity and technology, delivering exceptional results that exceed expectations.</p>
                    </div>

                    <div className="size-[500px] flex justify-center w-[98.9vw]">
                        <img src={contactBg} alt="refImg" />
                    </div>
                </div>

                <Services />

                <Contact />

                <Footer />
        </>
    )
}

export default AboutUsPage;