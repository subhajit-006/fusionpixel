import React, { useState } from "react";
import Navbar from "../components/ui/Navbar";
import Footer from "../components/ui/Footer";
import ContactCard from "../components/ui/ContactCrad";
import ph1 from "../assets/services/ph1.jpg";
import ph2 from "../assets/services/ph2.jpg";
import ph3 from "../assets/services/ph3.jpg";
import Cursor from "../components/ui/Cursor";

function PhotoShootPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState(null);

    const openModal = (image) => {
        setCurrentImage(image);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setCurrentImage(null);
    };

    return (
        <>
            <Cursor />
            {/* Navbar */}
            <Navbar />

            <div>
                <div className="flex justify-center items-center flex-col gap-3 h-96">
                    <h1 className="font-bold text-6xl">Professional Photo Editing Services</h1>
                    <p className="text-gray-700 text-xl">
                        Transform your photos with our expert editing techniques
                    </p>
                    <a
                        href="#contact"
                        className="border-2 border-black text-lg font-semibold py-2 px-3 rounded-full bg-black text-white"
                    >
                        Order <i className="fa-solid fa-arrow-right"></i>
                    </a>
                </div>

                <div>
                    <h1 className="text-5xl font-bold text-center">Some Of Our Works</h1>

                    <div className="flex justify-between items-center p-20">
                        {[ph1, ph2, ph3].map((image, index) => (
                            <div key={index} className="flex flex-col gap-5">
                                <img
                                    src={image}
                                    alt={`ph${index + 1}`}
                                    className="h-[20vw] rounded-xl cursor-pointer"
                                    onClick={() => openModal(image)}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex justify-between items-center p-20 h-[75vh]">
                    <div className="flex flex-col gap-2">
                        <h1 className="text-5xl font-bold">Why Choose FusionPixel?</h1>

                        <div className="flex flex-col gap-1 text-lg text-gray-700">
                            <p className="flex gap-2 items-center">
                                <i className="fa-regular fa-star text-2xl"></i> Expert editors with years of experience
                            </p>
                            <p className="flex gap-3 items-center">
                                <i className="fa-solid fa-bolt text-2xl"></i> Quick turnaround times without compromising quality
                            </p>
                            <p className="flex gap-2 items-center">
                                <i className="fa-solid fa-layer-group text-2xl"></i> Customized editing to match your style and preferences
                            </p>
                            <p className="flex gap-3 items-center">
                                <i className="fa-regular fa-image text-2xl"></i> High-quality output suitable for print and digital use
                            </p>
                        </div>
                    </div>

                    <div className="w-[40vw] border-2 border-black h-[40vh] rounded-2xl text-center">
                        ANY IMAGE
                    </div>
                </div>

                <div id="contact" className="flex justify-between items-center p-20">
                    {/* ContactUsCard */}
                    <ContactCard />
                    <div className="flex flex-col gap-2">
                        <h1 className="text-5xl font-bold">Ready to Start Your Project?</h1>
                        <p className="text-gray-700 text-xl">
                            Let our expert editors bring out the best in your images
                        </p>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <Footer />

            {/* Modal for Image Preview */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
                    <div className="relative">
                        <img src={currentImage} alt="Selected" className="max-w-[80vw] max-h-[80vh] rounded-lg" />
                        <button
                            className="absolute top-2 right-2 bg-gray-800 text-white text-2xl w-10 h-10 flex justify-center items-center rounded-full hover:bg-gray-600"
                            onClick={closeModal}
                        >
                            <i class="fa-solid fa-xmark"></i>
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}

export default PhotoShootPage;
