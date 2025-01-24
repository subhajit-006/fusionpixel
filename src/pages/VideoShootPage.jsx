import Navbar from "../components/ui/Navbar";
import Footer from "../components/ui/Footer";
import ContactCard from "../components/ui/ContactCrad";
import vh1 from "../assets/services/vh1.mp4";
import vh2 from "../assets/services/vh2.mp4";
import Cursor from "../components/ui/Cursor";
import vs from "../assets/serviceContent/vs.webp";

function VideoShootPage() {
    return (
        <>
            <Cursor />

            <div className="bg-[#DFF2EB]">
                {/* Navbar */}
                <Navbar />

                {/* Hero Section */}
                <div className="flex flex-col items-center xl:justify-center gap-3 p-6 sm:p-0 sm:h-96 text-center">
                    <h1 className="font-bold text-4xl sm:text-6xl font-fontProtest">Professional Video Shoot Services</h1>
                    <p className="text-gray-700 text-base sm:text-xl font-fontDyan">Transform your raw footage into captivating visual stories</p>
                    <a
                        href="#contact"
                        className="group border-2 font-fontDyan font-light border-black text-base sm:text-lg py-2 px-4 rounded-full bg-black text-white transition-transform duration-300 transform hover:scale-105">
                        Order
                        <i className="fa-solid fa-arrow-right transition-transform duration-300 group-hover:translate-x-2"></i>
                    </a>
                </div>

                {/* Works Section */}
                <div className="p-4 sm:p-20">
                    <h1 className="text-3xl sm:text-5xl font-bold text-center font-fontProtest xl:mb-20 mb-6">
                        Some Of Our Works
                    </h1>
                    <div className="flex flex-wrap justify-center xl:gap-40 gap-8 font-bold">
                        {[
                            { src: vh1, caption: "Wedding Videoshoot - FushionPixel" },
                            { src: vh2, caption: "Wedding Videoshoot - FushionPixel" },
                        ].map((video, index) => (
                            <div key={index} className="w-full sm:w-auto flex flex-col items-center">
                                <video
                                    src={video.src}
                                    controls
                                    className="h-40 sm:h-[20vw] xl:w-full w-[65vw] sm:w-auto rounded-xl transition-transform duration-300 hover:scale-105 hover:shadow-[18px_18px_15px_-7px_#636363] hover:border-[#636363]"
                                ></video>
                                <p className="mt-4 text-sm sm:text-base text-gray-600 text-center">
                                    {video.caption}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>


                {/* Why Choose Section */}
                <div className="flex flex-wrap items-center justify-center gap-8 p-6 sm:p-20 sm:h-[75vh]">
                    <div className="w-full sm:w-1/2 flex flex-col gap-4 text-center sm:text-left">
                        <h1 className="text-3xl sm:text-5xl font-bold font-fontProtest">Why Choose FusionPixel?</h1>
                        <div className="flex flex-col gap-2 text-gray-700 text-sm sm:text-lg font-fontDyan font-thin">
                            <p className="flex gap-2 items-center">
                                <i className="fa-regular fa-star text-xl sm:text-2xl"></i>
                                Expert editors with years of industry experience
                            </p>
                            <p className="flex gap-2 items-center">
                                <i className="fa-solid fa-bolt text-xl sm:text-2xl"></i>
                                Fast turnaround times without compromising quality
                            </p>
                            <p className="flex gap-2 items-center">
                                <i className="fa-solid fa-layer-group text-xl sm:text-2xl"></i>
                                Customized editing to match your vision and style
                            </p>
                            <p className="flex gap-2 items-center">
                                <i className="fa-solid fa-music text-xl sm:text-2xl"></i>
                                Access to a vast library of royalty-free music and sound effects
                            </p>
                        </div>
                    </div>
                    <div className="w-full sm:w-[40vw] h-auto sm:h-[40vh] text-center">
                        <img src={vs} alt="pve" className="rounded-2xl max-w-full h-auto" />
                    </div>
                </div>

                {/* Contact Section */}
                <div id="contact" className="flex xl:flex-row flex-col-reverse items-center justify-center gap-6 p-6 sm:p-20">
                    <ContactCard />
                    <div className="w-full sm:w-auto text-center sm:text-left">
                        <h1 className="text-3xl sm:text-5xl font-bold font-fontProtest">Ready to Start Your Project?</h1>
                        <p className="text-gray-700 text-base sm:text-xl font-fontDyan">
                            Let our expert editors bring your vision to life through professional video editing
                        </p>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <Footer />
        </>
    );
}

export default VideoShootPage;
