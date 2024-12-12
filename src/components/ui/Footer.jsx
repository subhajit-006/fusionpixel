import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import upi from "../../assets/UPI.webp"

function Footer() {
    return (
        <div className="bg-white">
            <div className="h-[1px] bg-black/20"></div>
            <div className="flex items-start justify-evenly p-3 text-black/60">
                <div>
                    <p className="flex items-end text-xs h-[23vh] underline"><Link to='/PrivacyPolicyPage'>Privacy & Policies</Link></p>
                </div>
                <ul className="flex flex-col gap-1">
                    <li className="font-semibold">Services</li>
                    <li className="text-sm hover:underline"><Link to='/PhotoShootPage'>Photo Shoot</Link></li>
                    <li className="text-sm hover:underline"><Link to='/VideoShootPage'>Video Shoot</Link></li>
                    <li className="text-sm hover:underline"><Link to='/PhotoAndVideoEditingPage'>Photo & Video Editing</Link></li>
                    <li className="text-sm hover:underline"><Link to='/GraphicsDesigningPage'>Graphics Designing</Link></li>
                    <li className="text-sm hover:underline"><Link to='/WebDevPage'>Website Making</Link></li>
                    <li className="text-sm hover:underline"><Link to='/WebDesigningPage'>Web Designing</Link></li>
                </ul>

                <ul className="flex flex-col gap-1">
                    <li className="font-semibold">FushinPixelLabs</li>
                    <li className="text-sm hover:underline"><Link to='/AboutUsPage'>About Us</Link></li>
                    <li className="text-sm hover:underline"><Link to='/ContactUsPage'>Contact Us</Link></li>
                    <li className="text-sm">Made With FushinPixel Labs</li>
                </ul>

                <div className="flex flex-col gap-3 items-start">
                    <div className="flex items-center gap-2">
                        <img src={logo} alt="logo" className="w-10 h-10" />
                        <p className="text-3xl font-bold">
                            <Link to="/">FushionPixelLabs</Link>
                        </p>
                    </div>

                    <div className="flex gap-2">
                        <div className="border-[1.6px] border-black/35 px-2 py-1 rounded-md">
                            <a href="mailto:fushionpixellabs@gmail.com">
                                <i className="fa-regular fa-envelope text-2xl"></i>
                            </a>
                        </div>
                        <div className="border-[1.6px] border-black/35 px-[10px] py-1 rounded-md">
                            <a href="https://www.instagram.com/fushionpixellabs">
                                <i className="fa-brands fa-instagram text-2xl"></i>
                            </a>
                        </div>
                        <div className="border-[1.6px] border-black/35 px-2 py-1 rounded-md">
                            <a href="https://www.facebook.com/profile.php?id=100085668723244&sfnsn=wiwspwa&mibextid=RUbZ1f">
                                <i className="fa-brands fa-facebook text-2xl"></i>
                            </a>
                        </div>
                        <div className="border-[1.6px] border-black/35 px-2 py-1 rounded-md">
                            <a href=" https://x.com/FPixel26863?t=6qldzP4ckeQbG8PaV_40uw&s=08">
                                <i className="fa-brands fa-twitter text-2xl"></i>
                            </a>
                        </div>
                        <div className="border-[1.6px] border-black/35 px-2 py-1 rounded-md">
                            <a href="tel:+91 8240307602">
                                <i className="fa-solid fa-phone text-2xl"></i>
                            </a>
                        </div>
                        <div className="border-[1.6px] border-black/35 px-2 py-1 rounded-md">
                            <a href="https://discord.gg/fkHfVgnA">
                                <i className="fa-brands fa-discord text-2xl"></i>
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