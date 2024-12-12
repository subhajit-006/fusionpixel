function ContactUsContent() {
    return (
        <div className="flex flex-col gap-5">
            <h1 className="text-6xl font-bold">Contact Us</h1>
            <p className="text-xl">Get in touch with our team for any inquiries or to start your project.</p>
            <div className="flex flex-col gap-3">
                <div className="flex gap-32">
                    <div className="flex gap-3 items-center">
                        <i className="fa-regular fa-envelope text-2xl"></i>
                        <a href="mailto:fushionpixellabs@gmail.com" className="text-lg">fushionpixellabs@gmail.com</a>
                    </div>
                    <div className="flex gap-3 items-center">
                        <i className="fa-solid fa-phone text-2xl"></i>
                        <a href="tel:+91 8240307602" className="text-lg">+91 8240307602</a>
                    </div>
                </div>
                <div className="flex gap-3 items-center">
                    <i className="fa-brands fa-discord text-2xl"></i>
                    <a href="https://discord.gg/fkHfVgnA" className="text-lg">fushionpixellabs</a>
                </div>
            </div>
        </div>
    )
}

export default ContactUsContent;