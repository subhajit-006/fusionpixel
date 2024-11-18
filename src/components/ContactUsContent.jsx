function ContactUsContent() {
    return (
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
    )
}

export default ContactUsContent;