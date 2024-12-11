import Navbar from "../components/ui/Navbar";
import Footer from "../components/ui/Footer";
import Services from "../components/Services";
import contactBg from "../assets/contactBg.png";
import Contact from "../components/Contact"
import Cursor from "../components/ui/Cursor";

function AboutUsPage() {
    return (
        <>
            <Cursor />
            <Navbar />
            <div className="h-[45vh] flex justify-center items-center flex-col gap-2 bg-gray-100">
                <h1 className="text-6xl font-bold">About FusionPixellabs</h1>
                <p className="text-2xl text-gray-500">Transforming ideas into visual masterpieces since 2024</p>
            </div>

            <div className="pb-20">
                <div className="pt-32 pb-20 px-40 flex flex-col gap-10">
                    <h1 className="text-5xl font-bold">Our Mission</h1>
                    <p className="text-2xl text-gray-500">
                    Welcome to a world where your imagination takes center stage! At Fushin Pixel Labs, we’re not just a service provider; we’re your creative partner, committed to bringing your ideas to life with unmatched precision and care. Our mission is simple: to empower you to create a website or design that’s truly yours—crafted entirely by skilled hands, not by AI.  </p>
                    <p className="text-2xl text-gray-500">
                    Unlike automated solutions, we take pride in offering 100% manual customization. This means every element, from the layout to the colors and features, is shaped to align perfectly with your vision. Need a tweak here, a change there, or something entirely new? It’s all possible because we put you in control.  
                    </p>
                    <p className="text-2xl text-gray-500">
                    We’re here to help you dream big and see those dreams come to life—whether you need a stunning design, a captivating website, or professional edits for your photography and videography. And the best part? You’ll experience the joy of working with a team that values your creativity and ensures every detail is exactly as you envisioned.  
                    </p>
                    <p className="text-2xl text-gray-500">
                    At Fushin Pixel Labs, it’s not just about what we create—it’s about what you imagine. Let’s craft something extraordinary, together!
                    </p>
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