import Navbar from "../components/ui/Navbar";
import Footer from "../components/ui/Footer";
import Services from "../components/Services";
import contactBg from "../assets/contactBg.png";
import Contact from "../components/Contact";
import Cursor from "../components/ui/Cursor";

function AboutUsPage() {
    return (
        <>
            <Cursor />
            <div className="bg-[#0E3332]">
                <Navbar />
                {/* Hero Section */}
                <div className="h-[45vh] flex justify-center items-center flex-col gap-2 bg-[#0E3332] px-4 sm:px-10">
                    <h1 className="text-4xl sm:text-6xl font-bold font-fontProtest text-center text-[#DFF2EB]">
                        About FushionPixellab
                    </h1>
                    <p className="text-lg sm:text-xl text-[#bef8e4] font-fontDyan font-thin text-center">
                        Transforming ideas into visual masterpieces since 2024
                    </p>
                </div>

                {/* Mission Section */}
                <div className="pb-20 bg-[#0E3332]">
                    <div className="pt-16 sm:pt-32 pb-10 sm:pb-20 px-4 sm:px-20 lg:px-40 flex flex-col gap-4 sm:gap-10">
                        <h1 className="text-3xl sm:text-5xl font-bold font-fontProtest  text-[#DFF2EB]">Our Mission</h1>
                        <p className="text-lg sm:text-xl  text-[#bef8e4] font-thin font-fontDyan">
                            Welcome to a world where your imagination takes center stage! At Fushin Pixel Labs, we’re not just a service provider; we’re your creative partner, committed to bringing your ideas to life with unmatched precision and care. Our mission is simple: to empower you to create a website or design that’s truly yours—crafted entirely by skilled hands, not by AI.
                        </p>
                        <p className="text-lg sm:text-xl  text-[#bef8e4] font-thin font-fontDyan">
                            Unlike automated solutions, we take pride in offering 100% manual customization. This means every element, from the layout to the colors and features, is shaped to align perfectly with your vision. Need a tweak here, a change there, or something entirely new? It’s all possible because we put you in control.
                        </p>
                        <p className="text-lg sm:text-xl  text-[#bef8e4] font-thin font-fontDyan">
                            We’re here to help you dream big and see those dreams come to life—whether you need a stunning design, a captivating website, or professional edits for your photography and videography. And the best part? You’ll experience the joy of working with a team that values your creativity and ensures every detail is exactly as you envisioned.
                        </p>
                        <p className="text-lg sm:text-xl  text-[#bef8e4] font-thin font-fontDyan">
                            At Fushin Pixel Labs, it’s not just about what we create—it’s about what you imagine. Let’s craft something extraordinary, together!
                        </p>
                    </div>

                    {/* Image Section */}
                    <div className="flex justify-center w-full">
                        <img
                            src={contactBg}
                            alt="refImg"
                            className="w-full xl:max-w-[35vw] max-w-[98.9vw] object-cover"
                        />
                    </div>
                </div>
            </div>

            {/* Services Section */}
            <Services />

            {/* Contact Section */}
            <Contact />

            <Footer />
        </>
    );
}

export default AboutUsPage;
