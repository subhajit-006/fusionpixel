function Contact() {
    return (
        <div className="h-auto pt-20 pb-5 sm:h-[75vh] flex flex-col justify-center items-center gap-5 px-4 bg-[#0E3332]">
            <h1 className="text-3xl sm:text-5xl font-bold font-fontProtest text-center text-[#DFF2EB]">
                Ready to bring your vision to life?
            </h1>
            <p className="text-sm sm:text-lg text-[#bef8e4] font-fontDyan font-thin text-center">
                Join FushionPixelLabs today and let us help you create stunning digital content.
            </p>
            <div className="flex flex-col gap-3 w-full sm:w-auto">
                <p className="text-xs text-center text-[#bef8e4] font-fontDyan font-thin">
                    By subscribing, you agree to our Terms of Service and Privacy Policy.
                </p>
            </div>
        </div>
    );
}

export default Contact;
