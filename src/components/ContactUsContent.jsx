function ContactUsContent() {
    return (
        <div className="flex flex-col xl:gap-5 gap-2 w-[100vw] xl:px-0 px-10">
            <h1 className="xl:text-6xl text-5xl font-bold font-fontProtest text-[#DFF2EB]">Contact Us</h1>
            <p className="xl:text-xl text-sm font-fontDyan font-thin text-[#bef8e4]">Get in touch with our team for any inquiries or to start your project.</p>
            <div className="flex flex-col xl:gap-3 gap-1 font-fontDyan font-thin">
                <div className="flex xl:gap-32 gap-1 xl:flex-row flex-col">
                    <div className="flex gap-3 items-center text-[#bef8e4]">
                        <i className="fa-regular fa-envelope text-lg xl:text-2xl"></i>
                        <a href="mailto:fushionpixellabs@gmail.com" className="text-sm  xl:text-lg">fushionpixellabs@gmail.com</a>
                    </div>
                    <div className="flex gap-3 items-center text-[#bef8e4]">
                        <i className="fa-solid fa-phone text-lg xl:text-2xl"></i>
                        <a href="tel:+91 8240307602" className="text-sm  xl:text-lg">+91 8240307602</a>
                    </div>
                </div>
                <div className="flex gap-3 items-center text-[#bef8e4]">
                    <i className="fa-brands fa-discord text-lg xl:text-2xl"></i>
                    <a href="https://discord.gg/fkHfVgnA" className="text-sm  xl:text-lg">fushionpixellabs</a>
                </div>
            </div>
        </div>
    )
}

export default ContactUsContent;