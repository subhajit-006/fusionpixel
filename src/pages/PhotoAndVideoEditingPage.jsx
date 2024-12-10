import Navbar from "../components/ui/Navbar";
import Footer from "../components/ui/Footer";
import ContactCard from "../components/ui/ContactCrad";
import p3 from "../assets/services/p3.jpg"
import ph3 from "../assets/services/ph3.jpg"
import v1 from "../assets/services/v1.mp4"
import v2 from "../assets/services/v2.mp4"
import ph2 from "../assets/services/ph2.jpg"

function PhotoAndVideoEditingPage() {
    return (
        <>
            {/*Navbar*/}
            <Navbar />

            <div>

                <div className="flex justify-center items-center flex-col gap-3 h-96">
                    <h1 className="font-bold text-6xl">Professional Photo & Video Shoot Services</h1>
                    <p className="text-gray-700 text-xl">Capture your moments and stories with stunning visuals</p>
                    <a href="#contact" className="border-2 border-black text-lg font-semibold py-2 px-3 rounded-full bg-black text-white">Order <i className="fa-solid fa-arrow-right"></i></a>
                </div>

                <div>
                    <h1 className="text-5xl font-bold text-center">Some Of Our Works</h1>

                    <div className="flex justify-between items-center p-20">
                        <div className="flex flex-col gap-5">
                            <img src={p3} alt="p3" className="h-[20vw] rounded-xl" />
                        </div>
                        <div className="flex flex-col gap-5">
                            <img src={ph3} alt="ph3" className="h-[20vw] rounded-xl" />
                        </div>
                        <div className="flex flex-col gap-5">
                            <img src={ph2} alt="ph2" className="h-[20vw] rounded-xl" />
                        </div>
                    </div>

                    <div className="flex justify-between items-center p-20">
                        <div className="flex flex-col gap-5">
                            <video src={v1} controls className="h-[20vw] rounded-xl"></video>
                        </div>
                        <div className="flex flex-col gap-5">
                            <video src={v2} controls className="h-[20vw] rounded-xl"></video>
                        </div>
                    </div>
                </div>

                <div className="flex justify-between items-center p-20 h-[75vh]">
                    <div className="flex flex-col gap-2">
                        <h1 className="text-5xl font-bold">Why Choose FusionPixel?</h1>

                        <div className="flex flex-col gap-1 text-lg text-gray-700">
                            <p className="flex gap-2 items-center"><i className="fa-solid fa-camera text-2xl"></i>  Expert team of developers and designers</p>
                            <p className="flex gap-3 items-center"><i className="fa-solid fa-bolt text-2xl"></i>  Cutting-edge technologies and best practices</p>
                            <p className="flex gap-2 items-center"><i className="fa-regular fa-star text-2xl"></i>  Tailored solutions to meet your unique requirements</p>
                            <p className="flex gap-2 items-center"><i className="fa-regular fa-user text-2xl"></i>  Ongoing support and maintenance</p>
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
                        <p className="text-gray-700 text-xl">Let's create stunning photos and videos that you'll cherish for a lifetime</p>
                    </div>
                </div>

            </div>

            {/*Footer*/}
            <Footer />
        </>
    )
}

export default PhotoAndVideoEditingPage;