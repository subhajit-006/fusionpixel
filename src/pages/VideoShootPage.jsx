import Navbar from "../components/ui/Navbar";
import Footer from "../components/ui/Footer";
import ContactCard from "../components/ui/ContactCrad";
import vh1 from "../assets/services/vh1.mp4"
import vh2 from "../assets/services/vh2.mp4"
import Cursor from "../components/ui/Cursor";
import vs from "../assets/serviceContent/vs.webp"

function VideoShootPage() {
    return (
        <>
            <Cursor />

            <div className="bg-[#DFF2EB]">
                {/*Navbar*/}
                <Navbar />
                <div className="flex justify-center items-center flex-col gap-3 h-96">
                    <h1 className="font-bold text-6xl font-fontProtest">Professional Video Shoot Services</h1>
                    <p className="text-gray-700 text-xl font-fontDyan">Transform your raw footage into captivating visual stories</p>
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
                        <div className="flex flex-col gap-5 hover:shadow-[18px_18px_15px_-7px_#636363] hover:border-[#636363] transition-transform duration-300 hover:scale-105 overflow-hidden group">
                            <video src={vh1} controls className="h-[20vw] rounded-xl"></video>
                        </div>
                        <div className="flex flex-col gap-5 hover:shadow-[18px_18px_15px_-7px_#636363] hover:border-[#636363] transition-transform duration-300 hover:scale-105 overflow-hidden group">
                            <video src={vh2} controls className="h-[20vw] rounded-xl"></video>
                        </div>
                    </div>
                </div>

                <div className="flex justify-between items-center p-20 h-[75vh]">
                    <div className="flex flex-col gap-2">
                        <h1 className="text-5xl font-bold font-fontProtest">Why Choose FusionPixel?</h1>

                        <div className="flex flex-col gap-1 text-lg text-gray-700 font-light font-fontDyan">
                            <p className="flex gap-2 items-center"><i className="fa-regular fa-star text-2xl"></i>  Expert editors with years of industry experience</p>
                            <p className="flex gap-3 items-center"><i className="fa-solid fa-bolt text-2xl"></i>  Fast turnaround times without compromising qualitys</p>
                            <p className="flex gap-2 items-center"><i className="fa-solid fa-layer-group text-2xl"></i>  Customized editing to match your vision and style</p>
                            <p className="flex gap-2 items-center"><i className="fa-solid fa-music text-2xl"></i>  Access to a vast library of royalty-free music and sound effects</p>
                        </div>
                    </div>

                    <div className="w-[40vw] h-[40vh]  text-center">
                        <img src={vs} alt="pve" className="rounded-2xl" />
                    </div>
                </div>

                <div id="contact" className="flex justify-between items-center p-20">
                    {/*ContactUsCard*/}
                    <ContactCard />
                    <div className="flex flex-col gap-2">
                        <h1 className="text-5xl font-bold font-fontProtest">Ready to Start Your Project?</h1>
                        <p className="text-gray-700 text-xl font-light font-fontDyan">Let our expert editors bring your vision to life through professional video editing</p>
                    </div>
                </div>

            </div>

            {/*Footer*/}
            <Footer />
        </>
    )
}

export default VideoShootPage;