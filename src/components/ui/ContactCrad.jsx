function ContactCard() {
    return (
        <div className=" p-8 font-medium flex flex-col gap-2">
            <div className="flex flex-col gap-2">
                <p>Nmae</p>
                <input type="text" placeholder="Enter Your Name"  className="font-normal border border-black/20 rounded p-2 w-[32vw] focus:border-black/50 focus:outline-none"/>
            </div>
            <div className="flex flex-col gap-2">
                <p>Email</p>
                <input type="text" placeholder="Enter Your Email"  className="font-normal border border-black/20 rounded p-2 w-[32vw] focus:border-black/50 focus:outline-none"/>
            </div>
            <div className="flex flex-col gap-2">
                <p>Message</p>
                <textarea name="messsage" id="Message" placeholder="Enter Your Message" className="font-normal border border-black/20 focus:border-black/50 focus:outline-none rounded p-2 w-[32vw] h-24"></textarea>
                <button className="bg-black rounded p-2 w-[32vw] text-white">Send Message</button>
            </div>
        </div>
    )
}

export default ContactCard; 0