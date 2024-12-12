import { Link } from "react-router-dom";
import Footer from "../components/ui/Footer"
import Nabvar from "../components/ui/Navbar"
import Cursor from "../components/ui/Cursor";
import photoEd from "../assets/background/photoEd.mp4"
import webDes from "../assets/background/webDes.mp4"
import grapDes from "../assets/background/grapDes.mp4"
import webDev from "../assets/background/webDev.mp4"
import photoShoot from "../assets/background/photoShoot.mp4"
import videoShoot from "../assets/background/videoShoot.mp4"

function ServicePage() {
    return (
        <>
            <Cursor />
            <Nabvar />
            <div className="h-[100h] flex flex-col justify-center gap-10 py-16">
                <div>
                    <h1 className="text-5xl text-center font-bold">Our Services</h1>
                </div>
                <div className="flex flex-col gap-5">
                    <div className="flex text-center p-2 items-center justify-evenly gap-5">

                        <Link to="/PhotoShootPage">
                            <div className="relative w-[25vw] h-[35vh] hover:text-white text-center flex flex-col justify-center p-4 gap-2 border-2 rounded-lg border-black/35 hover:shadow-[18px_18px_15px_-7px_#636363] hover:border-[#636363] transition-transform duration-300 hover:scale-105 overflow-hidden group">
                                {/* Background Video */}
                                <video
                                    className="absolute top-0 left-0 w-full h-full opacity-0 object-cover -z-10 transition-opacity duration-300 group-hover:opacity-100"
                                    autoPlay
                                    loop
                                    muted
                                >
                                    <source src={photoShoot} type="video/mp4" />
                                </video>

                                {/* Card Content */}
                                <div className="relative z-10">
                                    <i className="fa-solid fa-camera text-4xl"></i>
                                    <h2 className="font-bold text-xl">Photo Shoot</h2>
                                    <p className="text-sm font-normal">
                                        Capture your moments with our professional photo shoot services.
                                    </p>
                                </div>
                            </div>
                        </Link>

                        <Link to="/VideoShootPage">
                            <div className="relative w-[25vw] h-[35vh] hover:text-white text-center flex flex-col justify-center p-4 gap-2 border-2 rounded-lg border-black/35 hover:shadow-[18px_18px_15px_-7px_#636363] hover:border-[#636363] transition-transform duration-300 hover:scale-105 overflow-hidden group">
                                {/* Background Video */}
                                <video
                                    className="absolute top-0 left-0 w-full h-full opacity-0 object-cover -z-10 transition-opacity duration-300 group-hover:opacity-100"
                                    autoPlay
                                    loop
                                    muted
                                >
                                    <source src={videoShoot} type="video/mp4" />
                                </video>

                                {/* Card Content */}
                                <div className="relative z-10">
                                    <i className="fa-solid fa-video text-4xl"></i>
                                    <h2 className="font-bold text-xl">Video Shoot</h2>
                                    <p className="text-sm font-normal">
                                        Capture your moments with our professional video shoot services.
                                    </p>
                                </div>
                            </div>
                        </Link>

                        <Link to="/PhotoAndVideoEditingPage">
                            <div className="relative w-[25vw] h-[35vh] hover:text-white text-center flex flex-col justify-center p-4 gap-2 border-2 rounded-lg border-black/35 hover:shadow-[18px_18px_15px_-7px_#636363] hover:border-[#636363] transition-transform duration-300 hover:scale-105 overflow-hidden group">
                                {/* Background Video */}
                                <video
                                    className="absolute top-0 left-0 w-full h-full opacity-0 object-cover -z-10 transition-opacity duration-300 group-hover:opacity-100"
                                    autoPlay
                                    loop
                                    muted
                                >
                                    <source src={photoEd} type="video/mp4" />
                                </video>

                                {/* Card Content */}
                                <div className="relative z-10">
                                    <i className="fa-solid fa-paintbrush text-4xl"></i>
                                    <h2 className="font-bold text-xl">Photo & Video Editing</h2>
                                    <p className="text-sm font-normal">
                                        Transform your photos and videos with our professional editing
                                        services.
                                    </p>
                                </div>
                            </div>
                        </Link>
                    </div>

                    <div className="flex text-center p-2 items-center justify-evenly gap-5">
                        <Link to="/GraphicsDesigningPage">
                            <div className="relative w-[25vw] h-[35vh] hover:text-white text-center flex flex-col justify-center p-4 gap-2 border-2 rounded-lg border-black/35 hover:shadow-[18px_18px_15px_-7px_#636363] hover:border-[#636363] transition-transform duration-300 hover:scale-105 overflow-hidden group">
                                {/* Background Video */}
                                <video
                                    className="absolute top-0 left-0 w-full h-full opacity-0 object-cover -z-10 transition-opacity duration-300 group-hover:opacity-100"
                                    autoPlay
                                    loop
                                    muted
                                >
                                    <source src={grapDes} type="video/mp4" />
                                </video>

                                {/* Card Content */}
                                <div className="relative z-10">
                                    <i className="fa-solid fa-pen-nib text-4xl"></i>
                                    <h2 className="font-bold text-xl">Graphics Designing</h2>
                                    <p className="text-sm font-normal">
                                        Bring your ideas to life with our creative graphic design solutions.
                                    </p>
                                </div>
                            </div>
                        </Link>

                        <Link to="/WebDevPage">
                            <div className="relative w-[25vw] h-[35vh] hover:text-white text-center flex flex-col justify-center px-4 gap-2 mb-5 border-2 rounded-lg border-black/35 hover:shadow-[18px_18px_15px_-7px_#636363] hover:border-[#636363] transition-transform duration-300 hover:scale-105 overflow-hidden group">
                                {/* Background Video */}
                                <video
                                    className="absolute top-0 left-0 w-full h-full opacity-0 object-cover -z-10 transition-opacity duration-300 group-hover:opacity-100"
                                    autoPlay
                                    loop
                                    muted
                                >
                                    <source src={webDev} type="video/mp4" />
                                </video>

                                {/* Card Content */}
                                <div className="relative z-10">
                                    <i className="fa-solid fa-code text-4xl"></i>
                                    <h2 className="font-bold text-xl">Website Making</h2>
                                    <p className="text-sm font-normal">
                                        Build responsive and functional websites tailored to your needs.
                                    </p>
                                </div>
                            </div>
                        </Link>

                        <Link to="/WebDesigningPage" aria-label="Navigate to Web Designing Page">
                            <div className="relative w-[25vw] h-[35vh] hover:text-white border-2 rounded-lg border-black/35 text-center flex flex-col justify-center px-4 gap-2 mb-5 hover:shadow-[18px_18px_15px_-7px_#636363] hover:border-[#636363] overflow-hidden group transition-transform duration-300 hover:scale-105">
                                {/* Background Video */}
                                <video
                                    className="absolute top-0 left-0 w-full h-full opacity-0 object-cover -z-10 transition-opacity duration-300 group-hover:opacity-100"
                                    autoPlay
                                    loop
                                    muted
                                >
                                    <source src={webDes} type="video/mp4" />
                                </video>

                                {/* Card Content */}
                                <div className="relative z-10">
                                    <i className="fa-solid fa-palette text-4xl"></i>
                                    <h2 className="font-bold text-xl">Web Designing</h2>
                                    <p className="text-sm font-normal">
                                        Create visually appealing and user-friendly web designs.
                                    </p>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default ServicePage;