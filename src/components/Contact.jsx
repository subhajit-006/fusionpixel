function Contact() {
    return (
        <div className="h-[75vh] flex flex-col justify-center items-center gap-5">
            <h1 className="text-5xl font-bold">Ready to bring your vision to life?</h1>
            <p className="text-lg text-black/60">Join FusionPixelLabs today and let us help you create stunning digital content.</p>
            <div className="flex flex-col gap-2">
                <div className="flex gap-5">
                    <input name="" id="" placeholder="Enter Your Email" className="p-2 border border-black/20 rounded w-64"></input>
                    <button className="border-2 border-black p-2 font-semibold bg-black text-white rounded hover:bg-black/80 hover:border-black/80">Get Started</button>
                </div>
                <p className="text-xs text-black/60">By subscribing, you agree to our Terms of Service and Privacy Policy.</p>
            </div>
        </div>
    )
}

export default Contact;