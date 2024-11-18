import Navbar from "../components/ui/Navbar";
import Footer from "../components/ui/Footer";

function ContactUsPage() {
    return (
        <>
            <Navbar />

            <div className="flex items-center justify-between px-20 h-[83vh]">
                <div className="flex flex-col gap-5">
                    <h1 className="text-6xl font-bold">Contact Us</h1>
                    <p className="text-xl">Get in touch with our team for any inquiries or to start your project.</p>
                    <div className="flex flex-col gap-3">
                        <div className="flex gap-36">
                            <div className="flex gap-3 items-center">
                                <i className="fa-regular fa-envelope text-2xl"></i>
                                <p className="text-lg">fusionpixel@gmail.com</p>
                            </div>
                            <div className="flex gap-3 items-center">
                                <i className="fa-solid fa-phone text-2xl"></i>
                                <p className="text-lg">+91 8240307602</p>
                            </div>
                        </div>
                        <div className="flex gap-3 items-center">
                            <i className="fa-brands fa-discord text-2xl"></i>
                            <p className="text-lg">Discord</p>
                        </div>
                    </div>
                </div>
                <div className="border border-black rounded p-8">
                    <div>
                        <p>Nmae</p>
                        <input type="text" placeholder="Enter Your Name" />
                    </div>
                    <div>
                        <p>Email</p>
                        <input type="text" placeholder="Enter Your Email" />
                    </div>
                    <div>
                        <p>Message</p>
                        <textarea name="messsage" id="Message" placeholder="Enter Your Message"></textarea>
                    </div>
                    <button>Send Message</button>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default ContactUsPage;