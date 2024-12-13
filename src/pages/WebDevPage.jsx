import Navbar from "../components/ui/Navbar";
import Footer from "../components/ui/Footer";
import ContactCard from "../components/ui/ContactCrad";
import portfolio from "../assets/services/portfolio.png"
import TrackWay from "../assets/services/TrackWay.png"
import Cursor from "../components/ui/Cursor";
import wdev from "../assets/serviceContent/wdev.webp"

function WebDevPage() {
    return (
        <>
            <Cursor />
            {/*Navbar*/}

            <div className="bg-[#DFF2EB]">
                <Navbar />

                <div className="flex justify-center items-center flex-col gap-3 h-96">
                    <h1 className="font-bold text-6xl font-fontProtest">Web Development Services</h1>
                    <p className="text-gray-700 text-xl font-fontDyan font-light">Crafting digital experiences that captivate, engage, and convert</p>
                    <a
                        href="#contact"
                        className="group border-2 font-fontDyan font-light border-black text-lg py-2 px-3 rounded-full bg-black text-white transition-transform duration-300 transform hover:scale-105">
                        Order
                        <i className="fa-solid fa-arrow-right transition-transform duration-300 group-hover:translate-x-2"></i>
                    </a>

                </div>

                <div>
                    <h1 className="text-5xl font-bold text-center font-fontProtest">Some Of Our Works</h1>

                    <div className="flex justify-between items-center p-20">
                        <div className="flex flex-col gap-5">
                            <img src={portfolio} alt="portfolio" className="h-[20vw] rounded-xl" />
                            <a href="https://sanjoypaul.vercel.app/" target="_blank" className="w-[75px] text-xl font-fontDyan font-thin bg-black text-white border-2 border-black px-3 py-2 rounded-full transition-transform duration-300 transform hover:scale-110"                            >Visit!</a>
                        </div>
                        <div className="flex flex-col gap-5">
                            <img src={TrackWay} alt="TrackWay AI" className="h-[20vw] rounded-xl" />
                            <a
                                href="https://prototype-cgqg7pi5i-sanjoy-paul-0981s-projects.vercel.app/"
                                target="_blank"
                                className="w-[75px] text-xl font-fontDyan font-thin bg-black text-white border-2 border-black px-3 py-2 rounded-full transition-transform duration-300 transform hover:scale-110">
                                Visit!
                            </a>
                        </div>
                    </div>
                </div>

                <div className="flex justify-between items-center p-20 h-[75vh]">
                    <div className="flex flex-col gap-2">
                        <h1 className="text-5xl font-bold font-fontProtest">Why Choose FusionPixel?</h1>

                        <div className="flex flex-col gap-1 text-lg text-gray-700 font-fontDyan font-light">
                            <p><i className="fa-solid fa-check text-green-400 font-bold text-2xl"></i>  Expert team of developers and designers</p>
                            <p><i className="fa-solid fa-check text-green-400 font-bold text-2xl"></i>  Cutting-edge technologies and best practices</p>
                            <p><i className="fa-solid fa-check text-green-400 font-bold text-2xl"></i>  Tailored solutions to meet your unique requirements</p>
                            <p><i className="fa-solid fa-check text-green-400 font-bold text-2xl"></i>  Ongoing support and maintenance</p>
                        </div>
                    </div>

                    <div className="w-[40vw] h-[40vh] text-center">
                        <img src={wdev} alt="wdev" className="rounded-2xl"/>
                    </div>
                </div>

                <div id="contact" className="flex justify-between items-center p-20">
                    {/*ContactUsCard*/}
                    <ContactCard />
                    <div className="flex flex-col gap-2">
                        <h1 className="text-5xl font-bold font-fontProtest">Ready to Start Your Project?</h1>
                        <p className="text-gray-700 text-xl font-fontDyan font-light">Let's discuss how we can bring your web development vision to life</p>
                    </div>
                </div>

            </div>

            {/*Footer*/}
            <Footer />
        </>
    )
}

export default WebDevPage;
