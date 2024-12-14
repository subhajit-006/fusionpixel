import Navbar from "../components/ui/Navbar";
import Footer from "../components/ui/Footer";
import ContactCard from "../components/ui/ContactCrad";
import portfolio from "../assets/services/portfolio.png";
import TrackWay from "../assets/services/TrackWay.png";
import Cursor from "../components/ui/Cursor";
import wdev from "../assets/serviceContent/wdev.webp";

function WebDevPage() {
    return (
        <>
            <Cursor />
            {/*Navbar*/}

            <div className="bg-[#DFF2EB]">
                <Navbar />

                <div className="flex justify-center items-center flex-col gap-3 h-auto px-5 py-10 md:h-96">
                    <h1 className="font-bold text-4xl md:text-6xl font-fontProtest text-center">Web Development Services</h1>
                    <p className="text-gray-700 text-lg md:text-xl font-fontDyan font-light text-center">
                        Crafting digital experiences that captivate, engage, and convert
                    </p>
                    <a
                        href="#contact"
                        className="group border-2 font-fontDyan font-light border-black text-lg py-2 px-3 rounded-full bg-black text-white transition-transform duration-300 transform hover:scale-105">
                        Order
                        <i className="fa-solid fa-arrow-right transition-transform duration-300 group-hover:translate-x-2"></i>
                    </a>

                </div>

                <div>
                    <h1 className="text-4xl md:text-5xl font-bold text-center font-fontProtest mb-10">Some Of Our Works</h1>

                    <div className="flex flex-col md:flex-row justify-center items-center p-5 md:p-20 gap-10">
                        <div className="flex flex-col gap-5 items-center">
                            <img src={portfolio} alt="portfolio" className="h-[40vw] md:h-[20vw] rounded-xl" />
                            <a href="https://sanjoypaul.vercel.app/" target="_blank" className="w-[75px] text-xl font-fontDyan font-thin bg-black text-white border-2 border-black px-3 py-2 rounded-full transition-transform duration-300 transform hover:scale-110">
                                Visit!
                            </a>
                        </div>
                        <div className="flex flex-col gap-5 items-center">
                            <img src={TrackWay} alt="TrackWay AI" className="h-[40vw] md:h-[20vw] rounded-xl" />
                            <a
                                href="https://prototype-cgqg7pi5i-sanjoy-paul-0981s-projects.vercel.app/"
                                target="_blank"
                                className="w-[75px] text-xl font-fontDyan font-thin bg-black text-white border-2 border-black px-3 py-2 rounded-full transition-transform duration-300 transform hover:scale-110">
                                Visit!
                            </a>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center p-5 md:p-20 h-auto md:h-[75vh]">
                    <div className="flex flex-col gap-2 w-full md:w-1/2">
                        <h1 className="text-4xl md:text-5xl font-bold font-fontProtest mb-5">Why Choose FusionPixel?</h1>

                        <div className="flex flex-col gap-3 text-lg text-gray-700 font-fontDyan font-light">
                            <p><i className="fa-solid fa-check text-green-400 font-bold text-2xl"></i>  Expert team of developers and designers</p>
                            <p><i className="fa-solid fa-check text-green-400 font-bold text-2xl"></i>  Cutting-edge technologies and best practices</p>
                            <p><i className="fa-solid fa-check text-green-400 font-bold text-2xl"></i>  Tailored solutions to meet your unique requirements</p>
                            <p><i className="fa-solid fa-check text-green-400 font-bold text-2xl"></i>  Ongoing support and maintenance</p>
                        </div>
                    </div>

                    <div className="w-full md:w-[40vw] h-auto md:h-[40vh] text-center mt-5 md:mt-0">
                        <img src={wdev} alt="wdev" className="rounded-2xl w-full h-full object-cover" />
                    </div>
                </div>

                <div id="contact" className="flex flex-col md:flex-row justify-between items-center p-5 md:p-20">
                    {/*ContactUsCard*/}
                    <ContactCard />
                    <div className="flex flex-col gap-2 w-full md:w-[40vw]">
                        <h1 className="text-4xl md:text-5xl font-bold font-fontProtest">Ready to Start Your Project?</h1>
                        <p className="text-gray-700 text-lg md:text-xl font-fontDyan font-light">
                            Let's discuss how we can bring your web development vision to life
                        </p>
                    </div>
                </div>

            </div>

            {/*Footer*/}
            <Footer />
        </>
    );
}

export default WebDevPage;
