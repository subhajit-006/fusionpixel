import { Link } from "react-router-dom";
import Footer from "../components/ui/Footer"
import Nabvar from "../components/ui/Navbar"

function ServicePage() {
    return (
        <>
            <Nabvar />
            <div className="h-[100h] flex flex-col justify-center gap-10 py-16">
                <div>
                    <h1 className="text-5xl text-center font-bold">Our Services</h1>
                </div>
                <div className="flex flex-col gap-5">
                    <div className="flex text-center p-2 items-center justify-evenly gap-5">

                        <Link to="/PhotoShootPage">
                            <div className="w-[25vw] h-[35vh] border-2 rounded-lg border-black/35 text-center flex flex-col justify-center p-4 gap-2 hover:shadow-[18px_18px_15px_-7px_#9ABF80] hover:border-[#9ABF80] hover:border-2 hover:transition duration-300 ease-in-out
">
                                <i className="fa-solid fa-camera text-4xl"></i>
                                <h2 className="font-bold text-xl">Photo Shoot</h2>
                                <p className="text-sm text-black/60 font-normal">Capture your moments with our professional photo shoot services.</p>
                            </div></Link>

                        <Link to='/VideoShootPage'>
                            <div className="w-[25vw] h-[35vh] border-2 rounded-lg border-black/35 text-center flex flex-col justify-center p-4 gap-2 hover:shadow-[18px_18px_15px_-7px_#9ABF80] hover:border-[#9ABF80] hover:border-2 hover:transition duration-300 ease-in-out">
                                <i className="fa-solid fa-video text-4xl"></i>
                                <h2 className="font-bold text-xl">Video Shoot</h2>
                                <p className="text-sm text-black/60 font-normal">Capture your moments with our professional video shoot services.</p>
                            </div>
                        </Link>

                        <Link to='/PhotoAndVideoEditingPage'>
                            <div className="w-[25vw] h-[35vh] border-2 rounded-lg border-black/35 text-center flex flex-col justify-center p-4 gap-2 hover:shadow-[18px_18px_15px_-7px_#9ABF80] hover:border-[#9ABF80] hover:border-2 hover:transition duration-300 ease-in-out">
                                <i className="fa-solid fa-paintbrush text-4xl"></i>
                                <h2 className="font-bold text-xl">Photo & Video Editing</h2>
                                <p className="text-sm text-black/60 font-normal">Transform your photos and videos with our professional editing services.</p>
                            </div>
                        </Link>

                    </div>

                    <div className="flex text-center p-2 items-start justify-evenly gap-5">

                        <Link to='/GraphicsDesigningPage'>
                            <div className="w-[25vw] h-[35vh] border-2 rounded-lg border-black/35 text-center flex flex-col justify-center p-4 gap-2 hover:shadow-[18px_18px_15px_-7px_#9ABF80] hover:border-[#9ABF80] hover:border-2 hover:transition duration-300 ease-in-out">
                                <i className="fa-solid fa-pen-nib text-4xl"></i>
                                <h2 className="font-bold text-xl">Graphics Designing</h2>
                                <p className="text-sm text-black/60 font-normal">Bring your ideas to life with our creative graphic design solutions.</p>
                            </div></Link>

                        <Link to='/WebDevPage'>
                            <div className="w-[25vw] h-[35vh] border-2 rounded-lg border-black/35 text-center flex flex-col justify-center px-4 gap-2 mb-5 hover:shadow-[18px_18px_15px_-7px_#9ABF80] hover:border-[#9ABF80] hover:border-2 hover:transition duration-300 ease-in-out">
                                <i className="fa-solid fa-code text-4xl"></i>
                                <h2 className="font-bold text-xl">Website Making</h2>
                                <p className="text-sm text-black/60 font-normal">Build responsive and functional websites tailored to your needs.</p>
                            </div>
                        </Link>

                        <Link to='/WebDesigningPage'>
                            <div className="w-[25vw] h-[35vh] border-2 rounded-lg border-black/35 text-center flex flex-col justify-center px-4 gap-2 mb-5 hover:shadow-[18px_18px_15px_-7px_#9ABF80] hover:border-[#9ABF80] hover:border-2 hover:transition duration-300 ease-in-out">
                                <i className="fa-solid fa-palette text-4xl"></i>
                                <h2 className="font-bold text-xl">Web Designing</h2>
                                <p className="text-sm text-black/60 font-normal">Create visually appealing and user-friendly web designs.</p>
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