import Navbar from "../components/ui/Navbar";
import Footer from "../components/ui/Footer";
import ContactCard from "../components/ui/ContactCrad";
import gd from "../assets/services/gd.png"
import Cursor from "../components/ui/Cursor";

function GraphicsDesigningPage() {
    return (
        <>
            <Cursor />

            <div className="bg-[#DFF2EB]">
            <Navbar />
                <div className="flex justify-center items-center flex-col gap-3 h-96">
                    <h1 className="font-bold text-6xl font-fontProtest">Graphics Designing Services</h1>
                    <p className="text-gray-700 text-xl">Bringing your ideas to life with stunning visuals and creative designs</p>
                    <a
                        href="#contact"
                        className="group border-2 font-fontDyan font-light border-black text-lg py-2 px-3 rounded-full bg-black text-white transition-transform duration-300 transform hover:scale-105">
                        Order
                        <i className="fa-solid fa-arrow-right transition-transform duration-300 group-hover:translate-x-2"></i>
                    </a>

                </div>

                <div>
                    <h1 className="text-5xl font-bold text-center">Some Of Our Works</h1>

                    <div className="flex justify-center items-center p-20">
                        <div className="flex flex-col gap-5">
                            <img src={gd} alt="design" className="h-[20vw] rounded-xl" />
                        </div>
                    </div>
                </div>

                <div className="flex justify-between items-center p-20 h-[75vh]">
                    <div className="flex flex-col gap-2">
                        <h1 className="text-5xl font-bold">Why Choose FusionPixel?</h1>

                        <div className="flex flex-col gap-1 text-lg text-gray-700">
                            <p><i className="fa-solid fa-pen-nib text-2xl"></i>  Creative and unique designs tailored to your brand</p>
                            <p><i className="fa-solid fa-palette text-2xl"></i>  Expert use of color theory and visual hierarchy</p>
                            <p><i className="fa-solid fa-bolt text-2xl"></i>  Quick turnaround times without compromising quality</p>
                            <p><i className="fa-solid fa-layer-group text-2xl"></i>  Versatile team capable of various design styles</p>
                        </div>
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
                        <p className="text-gray-700 text-xl">Let's create stunning graphics that capture your brand's essence and resonate with your audience</p>
                    </div>
                </div>

            </div>

            {/*Footer*/}
            <Footer />
        </>
    )
}

export default GraphicsDesigningPage;