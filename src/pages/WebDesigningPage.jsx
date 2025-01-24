import Navbar from "../components/ui/Navbar";
import Footer from "../components/ui/Footer";
import ContactCard from "../components/ui/ContactCrad";
import portfolio from "../assets/services/portfolio.png";
import intern from "../assets/services/intern.png";
import Cursor from "../components/ui/Cursor";
import wd from "../assets/serviceContent/wd.webp";

function WebDesigningPage() {
    return (
        <>
            <Cursor />

            <div className="bg-[#0E3332]">
                <Navbar />

                <div className="flex justify-center items-center flex-col gap-3 h-auto px-5 py-10 md:h-96">
                    <h1 className="font-bold text-4xl md:text-6xl font-fontProtest text-center text-[#DFF2EB]">Web Designing Services</h1>
                    <p className="text-[#bef8e4] text-lg md:text-xl font-thin font-fontDyan text-center">
                        Crafting digital experiences that captivate, engage, and convert
                    </p>
                    <a
                        href="#contact"
                        className="group border-2 font-fontDyan font-light border-black text-lg py-2 px-3 rounded-full bg-black text-[#DFF2EB] transition-transform duration-300 transform hover:scale-105">
                        Order
                        <i className="fa-solid fa-arrow-right transition-transform duration-300 group-hover:translate-x-2"></i>
                    </a>
                </div>

                <div>
                    <h1 className="text-4xl md:text-5xl font-bold text-center font-fontProtest mb-10 text-[#DFF2EB]">Some Of Our Works</h1>

                    <div className="flex flex-col md:flex-row justify-center items-center p-5 md:p-20 gap-10">
                        <div className="flex flex-col gap-5 items-center">
                            <img src={portfolio} alt="portfolio" className="h-[40vw] md:h-[20vw] rounded-xl" />
                            <a href="https://sanjoypaul.vercel.app/" target="_blank" className="w-[75px] text-xl font-fontDyan font-thin bg-black text-[#bef8e4] border-2 border-black px-3 py-2 rounded-full transition-transform duration-300 transform hover:scale-110">
                                Visit!
                            </a>
                        </div>
                        <div className="flex flex-col gap-5 items-center">
                            <img src={intern} alt="TrackWay AI" className="h-[40vw] md:h-[20vw] rounded-xl" />
                            <a href="https://intern-ship-nine.vercel.app/" target="_blank" className="w-[75px] text-xl font-fontDyan font-thin bg-black text-[#bef8e4] border-2 border-black px-3 py-2 rounded-full transition-transform duration-300 transform hover:scale-110">
                                Visit!
                            </a>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center p-5 md:p-20 h-auto md:h-[75vh]">
                    <div className="flex flex-col gap-2 w-full md:w-1/2">
                            <h1 className="text-4xl md:text-5xl font-bold font-fontProtest mb-5 text-[#DFF2EB]">Why Choose FusionPixel?</h1>

                        <ul className="flex flex-col gap-3 text-lg text-[#bef8e4] font-fontDyan font-light">
                            <li className="flex gap-2 items-center"><i className="fa-solid fa-desktop text-2xl"></i>  Stunning, modern designs that capture your brand essence</li>
                            <li className="flex gap-4 items-center"><i className="fa-solid fa-mobile text-2xl"></i>  Responsive layouts that work seamlessly across all devices</li>
                            <li className="flex gap-3 items-center"><i className="fa-solid fa-bolt text-2xl"></i>  Focus on user experience and conversion optimization</li>
                            <li className="flex gap-2 items-center"><i className="fa-solid fa-pen-nib text-2xl"></i>  Custom illustrations and graphics to make your site unique</li>
                        </ul>
                    </div>

                    <div className="w-full md:w-[40vw] h-auto md:h-[40vh] text-center mt-5 md:mt-0">
                        <img src={wd} alt="wd" className="rounded-2xl w-full h-full object-cover" />
                    </div>
                </div>

                <div id="contact" className="flex flex-col md:flex-row justify-between items-center p-5 md:p-20">
                    {/*ContactUsCard*/}
                    <ContactCard />
                    <div className="flex flex-col gap-2 w-full md:w-[40vw]">
                            <h1 className="text-4xl md:text-5xl font-bold font-fontProtest text-[#DFF2EB]">Ready to Start Your Project?</h1>
                        <p className="text-[#bef8e4] text-lg md:text-xl font-fontDyan font-thin">
                            Let's create a stunning website design that captures your brand and engages your audience
                        </p>
                    </div>
                </div>
            </div>

            {/*Footer*/}
            <Footer />
        </>
    );
}

export default WebDesigningPage;
