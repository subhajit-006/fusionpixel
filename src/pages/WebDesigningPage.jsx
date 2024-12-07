import Navbar from "../components/ui/Navbar";
import Footer from "../components/ui/Footer";
import ContactCard from "../components/ui/ContactCrad";
import portfolio from "../assets/services/portfolio.png"
import intern from "../assets/services/intern.png"

function WebDesigningPage() {
    return (
        <>
            {/*Navbar*/}
            <Navbar />

            <div>

                <div className="flex justify-center items-center flex-col gap-3 h-96">
                    <h1 className="font-bold text-6xl">Web Designing Services</h1>
                    <p className="text-gray-700 text-xl">Crafting digital experiences that captivate, engage, and convert</p>
                    <a href="#contact" className="border-2 border-black text-lg font-semibold py-2 px-3 rounded-full bg-black text-white">Order <i className="fa-solid fa-arrow-right"></i></a>
                </div>

                <div>
                    <h1 className="text-5xl font-bold text-center">Some Of Our Works</h1>

                    <div className="flex justify-between items-center p-20">
                        <div className="flex flex-col gap-5">
                            <img src={portfolio} alt="portfolio" className="h-[20vw] rounded-xl" />
                            <a href="https://sanjoypaul.vercel.app/" target="_blank" className="w-[75px] text-xl font-semibold bg-black text-white border-2 border-black px-3 py-2 rounded-full">Visit!</a>
                        </div>
                        <div className="flex flex-col gap-5">
                            <img src={intern} alt="TrackWay AI" className="h-[20vw] rounded-xl" />
                            <a href="https://intern-ship-nine.vercel.app/" target="_blank" className="w-[75px] text-xl font-semibold bg-black text-white border-2 border-black px-3 py-2 rounded-full">Visit!</a>
                        </div>
                    </div>
                </div>

                <div className="flex justify-between items-center p-20 h-[75vh]">
                    <div className="flex flex-col gap-2">
                        <h1 className="text-5xl font-bold">Why Choose FusionPixel?</h1>

                        <ul className="flex flex-col gap-1 text-lg text-gray-700">
                            <li className="flex gap-2"><i className="fa-solid fa-desktop text-2xl"></i>  Stunning, modern designs that capture your brand essence</li>
                            <li className="flex gap-4"><i className="fa-solid fa-mobile text-2xl"></i>  Responsive layouts that work seamlessly across all devices</li>
                            <li className="flex gap-3"><i className="fa-solid fa-bolt text-2xl"></i>  Focus on user experience and conversion optimization</li>
                            <li className="flex gap-2"><i className="fa-solid fa-pen-nib text-2xl"></i>  Custom illustrations and graphics to make your site unique</li>
                        </ul>
                    </div>

                    <div className="w-[40vw] border-2 border-black h-[40vh] rounded-2xl text-center">
                        ANY IMAGE
                    </div>
                </div>

                <div id="contact" className="flex justify-between items-center p-20">
                    {/*ContactUsCard*/}
                    <ContactCard />
                    <div className="flex flex-col gap-2 w-[40vw]">
                        <h1 className="text-5xl font-bold">Ready to Start Your Project?</h1>
                        <p className="text-gray-700 text-xl">Let's create a stunning website design that captures your brand and engages your audience</p>
                    </div>
                </div>
            </div>

            {/*Footer*/}
            <Footer />
        </>
    )
}

export default WebDesigningPage;