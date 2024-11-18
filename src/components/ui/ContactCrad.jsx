function ContactCard() {
    return (
        <div className="border border-black rounded p-8 font-medium">
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
    )
}

export default ContactCard; 0