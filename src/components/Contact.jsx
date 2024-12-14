function Contact() {
    return (
        <div className="h-auto pt-20 pb-5 sm:h-[75vh] flex flex-col justify-center items-center gap-5 px-4 bg-[#DFF2EB]">
            <h1 className="text-3xl sm:text-5xl font-bold font-fontProtest text-center">
                Ready to bring your vision to life?
            </h1>
            <p className="text-sm sm:text-lg text-black/60 font-fontDyan font-thin text-center">
                Join FusionPixelLabs today and let us help you create stunning digital content.
            </p>
            <div className="flex flex-col gap-3 w-full sm:w-auto">
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 items-center">
                    <input 
                        name="" 
                        id="" 
                        placeholder="Enter Your Email" 
                        className="p-2 border border-black/20 rounded w-full sm:w-64"
                    />
                    <button className="border-2 border-black p-2 font-semibold bg-black text-white rounded hover:bg-black/80 hover:border-black/80 w-full sm:w-auto">
                        Get Started
                    </button>
                </div>
                <p className="text-xs text-center text-black/60 font-fontDyan font-thin">
                    By subscribing, you agree to our Terms of Service and Privacy Policy.
                </p>
            </div>
        </div>
    );
}

export default Contact;
