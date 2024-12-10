import Navbar from "../components/ui/Navbar";
import Footer from "../components/ui/Footer";
import ContactCard from "../components/ui/ContactCrad";
import ph1 from "../assets/services/ph1.jpg"
import ph2 from "../assets/services/ph2.jpg"
import ph3 from "../assets/services/ph3.jpg"

function PhotoShootPage() {
    return (
        <>
            {/*Navbar*/}
            <Navbar />

            <div>

                <div className="flex justify-center items-center flex-col gap-3 h-96">
                    <h1 className="font-bold text-6xl">Professional Photo Editing Services
                    </h1>
                    <p className="text-gray-700 text-xl">Transform your photos with our expert editing techniques</p>
                    <a href="#contact" className="border-2 border-black text-lg font-semibold py-2 px-3 rounded-full bg-black text-white">Order <i className="fa-solid fa-arrow-right"></i></a>
                </div>

                <div>
                    <h1 className="text-5xl font-bold text-center">Some Of Our Works</h1>

                    <div className="flex justify-between items-center p-20">
                        <div className="flex flex-col gap-5">
                            <img src={ph1} alt="ph1" className="h-[20vw] rounded-3xl" />
                        </div>
                        <div className="flex flex-col gap-5">
                            <img src={ph2} alt="ph2" className="h-[20vw] rounded-xl" />
                        </div>
                        <div className="flex flex-col gap-5">
                            <img src={ph3} alt="ph3" className="h-[20vw] rounded-xl" />
                        </div>
                    </div>
                </div>

                <div className="flex justify-between items-center p-20 h-[75vh]">
                    <div className="flex flex-col gap-2">
                        <h1 className="text-5xl font-bold">Why Choose FusionPixel?</h1>

                        <div className="flex flex-col gap-1 text-lg text-gray-700">
                            <p className="flex gap-2 items-center"><i className="fa-regular fa-star text-2xl"></i>  Expert editors with years of experience</p>
                            <p className="flex gap-3 items-center"><i className="fa-solid fa-bolt text-2xl"></i>  Quick turnaround times without compromising quality</p>
                            <p className="flex gap-2 items-center"><i className="fa-solid fa-layer-group text-2xl"></i>  Customized editing to match your style and preferences</p>
                            <p className="flex gap-3 items-center"><i className="fa-regular fa-image text-2xl"></i>  High-quality output suitable for print and digital use</p>
                        </div>
                    </div>

                    <div className="w-[40vw] border-2 border-black h-[40vh] rounded-2xl text-center">
                        ANY IMAGE
                    </div>
                </div>

                <div id="contact" className="flex justify-between items-center p-20">
                    {/*ContactUsCard*/}
                    <ContactCard />
                    <div className="flex flex-col gap-2">
                        <h1 className="text-5xl font-bold">Ready to Start Your Project?</h1>
                        <p className="text-gray-700 text-xl">Let our expert editors bring out the best in your images</p>
                    </div>
                </div>

            </div>

            {/*Footer*/}
            <Footer />
        </>
    )
}

export default PhotoShootPage;