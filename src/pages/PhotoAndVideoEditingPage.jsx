import React, { useState } from "react";
import Navbar from "../components/ui/Navbar";
import Footer from "../components/ui/Footer";
import ContactCard from "../components/ui/ContactCrad";
import p3 from "../assets/services/p3.jpg";
import ph3 from "../assets/services/ph3.jpg";
import v1 from "../assets/services/v1.mp4";
import v2 from "../assets/services/v2.mp4";
import ph2 from "../assets/services/ph2.jpg";
import Cursor from "../components/ui/Cursor";
import pve from "../assets/serviceContent/pve.webp";
import phoedi from "../assets/services/phoedi.jpeg"
import phoedi1 from "../assets/services/phoedi1.jpg"

function PhotoAndVideoEditingPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentMedia, setCurrentMedia] = useState(null);
  const [mediaType, setMediaType] = useState(""); // To track if it's an image or video

  const openModal = (media, type) => {
    setCurrentMedia(media);
    setMediaType(type);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentMedia(null);
    setMediaType("");
  };

  return (
    <>
      <Cursor />
      <div className="bg-[#DFF2EB]">
        <Navbar />
        
        {/* Hero Section */}
        <div className="flex justify-center items-center flex-col gap-3 p-6 sm:h-96">
          <h1 className="font-bold text-4xl sm:text-6xl font-fontProtest text-center">Professional Photo & Video Editing Services</h1>
          <p className="text-gray-700 text-base sm:text-xl font-light font-fontDyan text-center">Transform your photos & videos with our expert editing techniques</p>
          <a
            href="#contact"
            className="group border-2 font-fontDyan font-light border-black text-base sm:text-lg py-2 px-4 rounded-full bg-black text-white transition-transform duration-300 transform hover:scale-105">
            Order
            <i className="fa-solid fa-arrow-right transition-transform duration-300 group-hover:translate-x-2"></i>
          </a>
        </div>

        {/* Works Section */}
        <div className="p-6 sm:p-20">
          <h1 className="text-3xl sm:text-5xl font-bold text-center font-fontProtest mb-6 xl:mb-20">Some Of Our Works</h1>
          
          {/* Images Section */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[{ src: p3 }, { src: ph3 }, { src: ph2 }, { src:phoedi }, { src:phoedi1 }].map((item, index) => (
              <div key={index} className="flex flex-col gap-5">
                <img
                  src={item.src}
                  alt={`media-${index}`}
                  className="w-full h-[40vh] rounded-xl cursor-pointer  hover:shadow-[18px_18px_15px_-7px_#636363] hover:border-[#636363] transition-transform duration-300 hover:scale-105"
                  onClick={() => openModal(item.src, "image")}
                />
              </div>
            ))}
          </div>

          {/* Videos Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
            {[{ src: v1 }, { src: v2 }].map((item, index) => (
              <div key={index} className="flex flex-col gap-5">
                <video
                  src={item.src}
                  controls
                  className="w-full h-auto rounded-xl cursor-pointer  hover:shadow-[18px_18px_15px_-7px_#636363] hover:border-[#636363] transition-transform duration-300 hover:scale-105"
                ></video>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Section */}
        <div className="flex flex-wrap items-center justify-center gap-8 px-10 sm:p-20">
          <div className="w-full sm:w-1/2 flex flex-col gap-4 text-center sm:text-left">
            <h1 className="text-3xl sm:text-5xl font-bold font-fontProtest">Why Choose FusionPixel?</h1>
            <div className="flex flex-col gap-2 text-gray-700 text-sm sm:text-lg font-fontDyan font-thin">
              <p className="flex gap-2 items-center">
                <i className="fa-solid fa-camera text-xl sm:text-2xl"></i> Expert team of developers and designers
              </p>
              <p className="flex gap-3 items-center">
                <i className="fa-solid fa-bolt text-xl sm:text-2xl"></i> Cutting-edge technologies and best practices
              </p>
              <p className="flex gap-2 items-center">
                <i className="fa-regular fa-star text-xl sm:text-2xl"></i> Tailored solutions to meet your unique requirements
              </p>
              <p className="flex gap-2 items-center">
                <i className="fa-regular fa-user text-xl sm:text-2xl"></i> Ongoing support and maintenance
              </p>
            </div>
          </div>
          <div className="w-full sm:w-[40vw] h-auto text-center">
            <img src={pve} alt="pve" className="rounded-2xl max-w-full h-auto" />
          </div>
        </div>

        {/* Contact Section */}
        <div id="contact" className="flex flex-wrap items-center justify-center gap-6 px-5 pb-5 sm:p-20">
          <ContactCard />
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl sm:text-5xl font-bold font-fontProtest">Ready to Start Your Project?</h1>
            <p className="text-gray-700 text-base sm:text-xl font-fontDyan font-light">
              Let's create stunning photos and videos that you'll cherish for a lifetime
            </p>
          </div>
        </div>
      </div>

      <Footer />

      {/* Modal for Media Preview */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
          <div className="relative">
            {mediaType === "image" ? (
              <img src={currentMedia} alt="Selected" className="max-w-[80vw] max-h-[80vh] rounded-lg" />
            ) : (
              <video
                src={currentMedia}
                controls
                autoPlay
                className="max-w-full max-h-full rounded-lg"
              ></video>
            )}
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

export default PhotoAndVideoEditingPage;
