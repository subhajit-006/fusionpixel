import { Link } from "react-router-dom";
import photoEd from "../assets/background/photoEd.mp4";
import webDes from "../assets/background/webDes.mp4";
import grapDes from "../assets/background/grapDes.mp4";
import webDev from "../assets/background/webDev.mp4";
import photoShoot from "../assets/background/photoShoot.mp4";
import videoShoot from "../assets/background/videoShoot.mp4";

function Services() {
    return (
        <div className="flex justify-center pt-20 bg-[#0E3332]">
            <div className="p-5 h-auto lg:h-[100vh] rounded-2xl w-[95vw] bg-[#103130] flex flex-col justify-center items-center gap-16 shadow-[0_20px_50px_rgba(10,_57,_129,_0.7)]">
                <h1 className="text-3xl lg:text-5xl font-bold text-center font-fontProtest text-[#DFF2EB]">Our Services</h1>
                <div className="flex flex-col gap-10">
                    {/* Row 1 */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:justify-evenly gap-5 lg:gap-20">
                        {/* Photo Shoot Card */}
                        <Link to="/PhotoShootPage">
                            <div className="relative w-full sm:w-[40vw] lg:w-[25vw] h-[25vh] sm:h-[35vh] bg-[#34605e] hover:text-white text-center flex flex-col justify-center p-4 gap-2 rounded-lg border-black/35 hover:shadow-[0_20px_50px_rgba(10,_57,_129,_0.7)] hover:border-[#636363] transition-transform duration-300 hover:scale-105 overflow-hidden group">
                                <video
                                    className="absolute top-0 left-0 w-full h-full opacity-0 object-cover -z-10 transition-opacity duration-300 group-hover:opacity-100"
                                    autoPlay
                                    loop
                                    muted
                                >
                                    <source src={photoShoot} type="video/mp4" />
                                </video>
                                <div className="relative z-10">
                                    <i className="fa-solid fa-camera text-3xl sm:text-4x text-[#bef8e4]"></i>
                                    <h2 className="text-lg sm:text-xl font-thin font-fontDyan text-[#DFF2EB]">Photo Shoot</h2>
                                    <p className="text-xs sm:text-sm font-normal text-[#bef8e4]">
                                        Capture your moments with our professional photo shoot services.
                                    </p>
                                </div>
                            </div>
                        </Link>

                        {/* Video Shoot Card */}
                        <Link to="/VideoShootPage">
                            <div className="relative w-full sm:w-[40vw] lg:w-[25vw] h-[25vh] sm:h-[35vh] bg-[#34605e] hover:text-white text-center flex flex-col justify-center p-4 gap-2 rounded-lg border-black/35 hover:shadow-[0_20px_50px_rgba(10,_57,_129,_0.7)] hover:border-[#636363] transition-transform duration-300 hover:scale-105 overflow-hidden group">
                                <video
                                    className="absolute top-0 left-0 w-full h-full opacity-0 object-cover -z-10 transition-opacity duration-300 group-hover:opacity-100"
                                    autoPlay
                                    loop
                                    muted
                                >
                                    <source src={videoShoot} type="video/mp4" />
                                </video>
                                <div className="relative z-10">
                                    <i className="fa-solid fa-video text-3xl sm:text-4xl text-[#bef8e4]"></i>
                                    <h2 className="text-lg sm:text-xl font-thin font-fontDyan text-[#DFF2EB]">Video Shoot</h2>
                                    <p className="text-xs sm:text-sm font-normal text-[#bef8e4]">
                                        Capture your moments with our professional video shoot services.
                                    </p>
                                </div>
                            </div>
                        </Link>

                        {/* Photo & Video Editing Card */}
                        <Link to="/PhotoAndVideoEditingPage">
                            <div className="relative w-full sm:w-[40vw] lg:w-[25vw] h-[25vh] sm:h-[35vh] bg-[#34605e] hover:text-white text-center flex flex-col justify-center p-4 gap-2 rounded-lg border-black/35 hover:shadow-[0_20px_50px_rgba(10,_57,_129,_0.7)] hover:border-[#636363] transition-transform duration-300 hover:scale-105 overflow-hidden group">
                                <video
                                    className="absolute top-0 left-0 w-full h-full opacity-0 object-cover -z-10 transition-opacity duration-300 group-hover:opacity-100"
                                    autoPlay
                                    loop
                                    muted
                                >
                                    <source src={photoEd} type="video/mp4" />
                                </video>
                                <div className="relative z-10">
                                    <i className="fa-solid fa-paintbrush text-3xl sm:text-4xl text-[#bef8e4]"></i>
                                    <h2 className="text-lg sm:text-xl font-thin font-fontDyan text-[#DFF2EB]">Photo & Video Editing</h2>
                                    <p className="text-xs sm:text-sm font-normal text-[#bef8e4]">
                                        Transform your photos and videos with our professional editing services.
                                    </p>
                                </div>
                            </div>
                        </Link>
                    </div>

                    {/* Row 2 */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:justify-evenly gap-5 lg:gap-20">
                        {/* Graphics Designing Card */}
                        <Link to="/GraphicsDesigningPage">
                            <div className="relative w-full sm:w-[40vw] lg:w-[25vw] h-[25vh] sm:h-[35vh] bg-[#34605e] hover:text-white text-center flex flex-col justify-center p-4 gap-2 rounded-lg border-black/35 hover:shadow-[0_20px_50px_rgba(10,_57,_129,_0.7)] hover:border-[#636363] transition-transform duration-300 hover:scale-105 overflow-hidden group">
                                <video
                                    className="absolute top-0 left-0 w-full h-full opacity-0 object-cover -z-10 transition-opacity duration-300 group-hover:opacity-100"
                                    autoPlay
                                    loop
                                    muted
                                >
                                    <source src={grapDes} type="video/mp4" />
                                </video>
                                <div className="relative z-10">
                                    <i className="fa-solid fa-pen-nib text-3xl sm:text-4xl text-[#bef8e4]"></i>
                                    <h2 className="text-lg sm:text-xl font-thin font-fontDyan text-[#DFF2EB]">Graphics Designing</h2>
                                    <p className="text-xs sm:text-sm font-normal text-[#bef8e4]">
                                        Bring your ideas to life with our creative graphic design solutions.
                                    </p>
                                </div>
                            </div>
                        </Link>

                        {/* Web Development Card */}
                        <Link to="/WebDevPage">
                            <div className="relative w-full sm:w-[40vw] lg:w-[25vw] h-[25vh] sm:h-[35vh] bg-[#34605e] hover:text-white text-center flex flex-col justify-center p-4 gap-2 rounded-lg border-black/35 hover:shadow-[0_20px_50px_rgba(10,_57,_129,_0.7)] hover:border-[#636363] transition-transform duration-300 hover:scale-105 overflow-hidden group">
                                <video
                                    className="absolute top-0 left-0 w-full h-full opacity-0 object-cover -z-10 transition-opacity duration-300 group-hover:opacity-100"
                                    autoPlay
                                    loop
                                    muted
                                >
                                    <source src={webDev} type="video/mp4" />
                                </video>
                                <div className="relative z-10">
                                    <i className="fa-solid fa-code text-3xl sm:text-4xl text-[#bef8e4]"></i>
                                    <h2 className="text-lg sm:text-xl font-thin font-fontDyan text-[#DFF2EB]">Website Making</h2>
                                    <p className="text-xs sm:text-sm font-normal text-[#bef8e4]">
                                        Build responsive and functional websites tailored to your needs.
                                    </p>
                                </div>
                            </div>
                        </Link>

                        {/* Web Designing Card */}
                        <Link to="/WebDesigningPage">
                            <div className="relative w-full sm:w-[40vw] lg:w-[25vw] h-[25vh] sm:h-[35vh] bg-[#34605e] hover:text-white text-center flex flex-col justify-center p-4 gap-2 rounded-lg border-black/35 hover:shadow-[0_20px_50px_rgba(10,_57,_129,_0.7)] hover:border-[#636363] transition-transform duration-300 hover:scale-105 overflow-hidden group">
                                <video
                                    className="absolute top-0 left-0 w-full h-full opacity-0 object-cover -z-10 transition-opacity duration-300 group-hover:opacity-100"
                                    autoPlay
                                    loop
                                    muted
                                >
                                    <source src={webDes} type="video/mp4" />
                                </video>
                                <div className="relative z-10">
                                    <i className="fa-solid fa-palette text-3xl sm:text-4xl text-[#bef8e4]"></i>
                                    <h2 className="text-lg sm:text-xl font-thin font-fontDyan text-[#DFF2EB]">Website Designing</h2>
                                    <p className="text-xs sm:text-sm font-normal text-[#bef8e4]">
                                        Design visually appealing and user-friendly websites with us.
                                    </p>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services;