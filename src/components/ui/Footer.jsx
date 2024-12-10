import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import upi from "../../assets/UPI.webp"

function Footer() {
    return (
        <div className="bg-white">
            <div className="h-[1px] bg-black/20"></div>
            <div className="flex items-start justify-evenly p-3 text-black/60">
                <ul className="flex flex-col gap-1">
                    <li className="font-semibold">Services</li>
                    <li className="text-sm"><Link to=''>Photo Shoot</Link></li>
                    <li className="text-sm"><Link to=''>Video Shoot</Link></li>
                    <li className="text-sm"><Link to=''>Photo & Video Editing</Link></li>
                    <li className="text-sm"><Link to=''>Graphics Designing</Link></li>
                    <li className="text-sm"><Link to=''>Website Making</Link></li>
                    <li className="text-sm"><Link to=''>Web Designing</Link></li>
                </ul>

                <ul className="flex flex-col gap-1">
                    <li className="font-semibold">FushinPixelLabs</li>
                    <li className="text-sm"><Link to=''>About Us</Link></li>
                    <li className="text-sm"><Link to=''>Contact Us</Link></li>
                    <li className="text-sm">Made With FushinPixel Labs</li>
                </ul>

                <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-2">
                        <img src={logo} alt="logo" className="w-10 h-10" />
                        <p className="text-3xl font-bold">
                            <Link to="/">FushionPixelLabs</Link>
                        </p>
                    </div>

                    <div className="flex gap-1">
                        <div className="border-[1.6px] border-black/35 px-2 py-1 rounded-md">
                            <a href="mailto:fushionpixellabs@gmail.com">
                                <i className="fa-regular fa-envelope text-2xl"></i>
                            </a>
                        </div>
                        <div className="border-[1.6px] border-black/35 px-[6px] py-1 rounded-md">
                            <a href="">
                                <i className="fa-brands fa-discord text-2xl"></i>
                            </a>
                        </div>
                        <div className="border-[1.6px] border-black/35 px-[10px] py-1 rounded-md">
                            <a href="">
                                <i className="fa-brands fa-instagram text-2xl"></i>
                            </a>
                        </div>
                        <div className="border-[1.6px] border-black/35 px-2 py-1 rounded-md">
                            <a href="">
                                <i className="fa-brands fa-facebook text-2xl"></i>
                            </a>
                        </div>
                        <div className="border-[1.6px] border-black/35 px-2 py-1 rounded-md">
                            <a href="">
                            <i className="fa-brands fa-twitter text-2xl"></i>
                            </a>
                        </div>
                        <div className="border-[1.6px] border-black/35 px-2 py-1 rounded-md">
                            <a href="tel:+91 8240307602">
                                <i className="fa-solid fa-phone text-2xl"></i>
                            </a>
                        </div>
                    </div>

                    <div className="flex flex-col">
                        <p className="text-sm">Accepted Payment Methods</p>
                        <img src={upi} alt="upi" className="size-16" />
                        <div className="text-xs">© 2024 FusionPixelLabs. All rights reserved.</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;