import React, { useState } from "react";
import Navbar from "../components/ui/Navbar";
import Footer from "../components/ui/Footer";
import ContactCard from "../components/ui/ContactCrad";
import ph1 from "../assets/services/ph1.jpg";
import ph2 from "../assets/services/ph2.jpg";
import ph3 from "../assets/services/ph3.jpg";
import Cursor from "../components/ui/Cursor";
import ps from "../assets/serviceContent/ps.webp";

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
            <div className="bg-[#0E3332]">
                <Navbar />
                {/* Hero Section */}
                <div className="flex flex-col items-center xl:justify-center gap-3 p-6 sm:p-0 sm:h-96 text-center">
                    <h1 className="font-bold text-4xl sm:text-6xl font-fontProtest">
                        Professional Photo Shoot Services
                    </h1>
                    <p className="text-gray-700 font-thin text-base sm:text-xl font-fontDyan">
                        Capture your moments and stories with stunning visuals
                    </p>
                    <a
                        href="#contact"
                        className="group border-2 font-fontDyan font-light border-black text-base sm:text-lg py-2 px-4 rounded-full bg-black text-white transition-transform duration-300 transform hover:scale-105"
                    >
                        Order
                        <i className="fa-solid fa-arrow-right transition-transform duration-300 group-hover:translate-x-2"></i>
                    </a>
                </div>

                {/* Works Section */}
                <div className="p-4 sm:p-20">
                    <h1 className="text-3xl sm:text-5xl font-bold text-center font-fontProtest xl:mb-20 mb-6">
                        Some Of Our Works
                    </h1>
                    <div className="flex flex-wrap justify-center gap-4 sm:gap-8 font-bold">
                        {[
                            { src: ph1, caption: "Pre-Wedding Photoshoot - FushionPixel" },
                            { src: ph2, caption: "Pre-Wedding Photoshoot - FushionPixel" },
                            { src: ph3, caption: "Pre-Wedding Photoshoot - FushionPixel" },
                        ].map((item, index) => (
                            <div key={index} className="w-full sm:w-auto flex flex-col items-center">
                                <div className="w-full sm:w-auto flex justify-center">
                                    <img
                                        src={item.src}
                                        alt={`ph${index + 1}`}
                                        className="h-40 sm:h-[20vw] w-full sm:w-auto object-cover rounded-xl cursor-pointer hover:shadow-[18px_18px_15px_-7px_#636363] hover:border-[#636363] transition-transform duration-300 hover:scale-105 overflow-hidden group"
                                        onClick={() => openModal(item.src)}
                                    />
                                </div>
                                <p className="mt-2 text-sm sm:text-base text-gray-600">{item.caption}</p>
                            </div>
                        ))}
                    </div>

                </div>

                {/* Why Choose Section */}
                <div className="flex flex-wrap items-center justify-center gap-8 p-6 sm:p-20 sm:h-[75vh]">
                    <div className="w-full sm:w-1/2 flex flex-col gap-4 text-center sm:text-left">
                        <h1 className="text-3xl sm:text-5xl font-bold font-fontProtest">
                            Why Choose FusionPixel?
                        </h1>
                        <div className="flex flex-col gap-2 text-gray-700 text-sm sm:text-lg font-fontDyan font-thin">
                            <p className="flex gap-2 items-center">
                                <i className="fa-regular fa-star text-xl sm:text-2xl"></i>
                                Expert editors with years of experience
                            </p>
                            <p className="flex gap-2 items-center">
                                <i className="fa-solid fa-bolt text-xl sm:text-2xl"></i>
                                Quick turnaround times without compromising quality
                            </p>
                            <p className="flex gap-2 items-center">
                                <i className="fa-solid fa-layer-group text-xl sm:text-2xl"></i>
                                Customized editing to match your style and preferences
                            </p>
                            <p className="flex gap-2 items-center">
                                <i className="fa-regular fa-image text-xl sm:text-2xl"></i>
                                High-quality output suitable for print and digital use
                            </p>
                        </div>
                    </div>
                    <div className="w-full sm:w-[40vw] h-auto sm:h-[40vh] text-center">
                        <img src={ps} alt="pve" className="rounded-2xl max-w-full h-auto" />
                    </div>
                </div>

                {/* Contact Section */}
                <div id="contact" className="flex xl:flex-row flex-col-reverse items-center justify-center xl:justify-between gap-6 p-6 sm:p-20">
                    <ContactCard />
                    <div className="w-full sm:w-auto text-center sm:text-left">
                        <h1 className="text-3xl sm:text-5xl font-bold font-fontProtest">
                            Ready to Start Your Project?
                        </h1>
                        <p className="text-gray-700 text-base sm:text-xl font-fontDyan">
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
                        <img
                            src={currentImage}
                            alt="Selected"
                            className="max-w-[90vw] max-h-[90vh] rounded-lg"
                        />
                        <button
                            className="absolute top-2 right-2 bg-gray-800 text-white text-2xl w-10 h-10 flex justify-center items-center rounded-full hover:bg-gray-600"
                            onClick={closeModal}
                        >
                            <i className="fa-solid fa-xmark"></i>
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}

export default PhotoShootPage;
