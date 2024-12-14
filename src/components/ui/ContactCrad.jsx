import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
//add toaster

const ContactCard = () => {
    const form = useRef(); // Ref for the form element

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                'service_y0k3c7v', // Replace with your EmailJS Service ID
                'template_zx6o0mq', // Replace with your EmailJS Template ID
                form.current, // Reference to the form element
                'SDq1Zr8cGK9hwI7cB' // Replace with your Public Key
            )
            .then(
                () => {
                    console.log('SUCCESS!');
                    alert('Message sent successfully!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    alert('Failed to send message. Please try again.');
                }
            );
    };

    return (
        <form ref={form} onSubmit={sendEmail} className="p-8 flex flex-col gap-4 font-fontDyan font-extralight">
            <div className="flex flex-col gap-2">
                <label htmlFor="user_name">Name</label>
                <input
                    type="text"
                    name="user_name"
                    placeholder="Enter Your Name"
                    className="font-normal border border-black/20 rounded p-2 xl:w-[32vw] w-[80vw] focus:border-black/50 focus:outline-none"
                    required
                />
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="user_email">Email</label>
                <input
                    type="email"
                    name="user_email"
                    placeholder="Enter Your Email"
                    className="font-normal border border-black/20 rounded p-2 xl:w-[32vw] w-[80vw] focus:border-black/50 focus:outline-none"
                    required
                />
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="message">Message</label>
                <textarea
                    name="message"
                    placeholder="Enter Your Message"
                    className="font-normal border border-black/20 focus:border-black/50 focus:outline-none rounded p-2 w-[80vw] xl:w-[32vw] h-24"
                    required
                ></textarea>
            </div>
            <button
                type="submit"
                className="bg-black rounded p-2 xl:w-[32vw] w-[80vw] text-white"
            >
                Send Message
            </button>
        </form>
    );
};

export default ContactCard;
