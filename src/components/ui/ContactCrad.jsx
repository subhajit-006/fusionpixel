import React, { useRef, useContext } from 'react';
import emailjs from '@emailjs/browser';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from "./Navbar"; // Ensure the path to AuthContext is correct

const ContactCard = () => {
    const form = useRef();
    const { isAuthenticated } = useContext(AuthContext); // Access isAuthenticated from AuthContext

    const sendEmail = (e) => {
        e.preventDefault();

        // Check if the user is logged in
        if (!isAuthenticated) { // Replace isLoggedIn with isAuthenticated
            toast.error('You must be logged in to send a message.');
            return;
        }

        // Send email using EmailJS
        emailjs
            .sendForm(
                'service_y0k3c7v', // Replace with your EmailJS Service ID
                'template_zx6o0mq', // Replace with your EmailJS Template ID
                form.current, // Reference to the form element
                'SDq1Zr8cGK9hwI7cB' // Replace with your Public Key
            )
            .then(
                () => {
                    toast.success('Message sent successfully!');
                },
                (error) => {
                    console.error('FAILED...', error.text);
                    toast.error('Failed to send message. Please try again.');
                }
            );
    };

    return (
        <div className='flex justify-center'>
                <form ref={form} onSubmit={sendEmail} className="p-8 flex flex-col gap-2 font-fontDyan font-extralight w-full max-w-[900px]">
        <div className='flex flex-col'>
            <div className="flex flex-col gap-2 mb-2">
                <input
                    type="text"
                    name="user_name"
                    placeholder="Enter Your Name"
                    className="font-normal border border-black/20 rounded p-2 w-full max-w-[70vw] focus:border-black/50 focus:outline-none"
                    required
                />
            </div>
            <div className="flex flex-col gap-2">
                <input
                    type="email"
                    name="user_email"
                    placeholder="Enter Your Email"
                    className="font-normal border border-black/20 rounded p-2 w-full max-w-[70vw] focus:border-black/50 focus:outline-none"
                    required
                />
            </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 items-center w-full">
            <div className="flex flex-col gap-2 w-full">
                <input
                    name="message"
                    placeholder="Enter Your Message"
                    className="font-normal border border-black/20 focus:border-black/50 max-w-[70vw] focus:outline-none rounded p-2 w-full"
                    required
                />
            </div>
            <button
                type="submit"
                className="bg-[#4e625a] text-[#ffffff] rounded p-2 w-full max-w-[200px] h-[42px] transition-transform duration-300 transform hover:scale-105 group"
            >
                Order <i className="fa-solid fa-arrow-right transition-transform duration-300 group-hover:translate-x-2"></i>
            </button>
        </div>
    </form>
            {/* Toast container to display messages */}
            <ToastContainer />
        </div>
    );
};

export default ContactCard;
