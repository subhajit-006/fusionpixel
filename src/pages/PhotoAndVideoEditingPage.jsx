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
        <div className="flex justify-center items-center flex-col gap-3 h-96">
          <h1 className="font-bold text-6xl font-fontProtest">Professional Photo & Video Editing Services</h1>
          <p className="text-gray-700 text-xl font-light font-fontDyan">Transform your photos & videos with our expert editing techniques </p>
          <a
            href="#contact"
            className="group border-2 font-fontDyan font-light border-black text-lg py-2 px-3 rounded-full bg-black text-white transition-transform duration-300 transform hover:scale-105">
            Order
            <i className="fa-solid fa-arrow-right transition-transform duration-300 group-hover:translate-x-2"></i>
          </a>

        </div>

        <div>
          <h1 className="text-5xl font-bold text-center font-fontProtest">Some Of Our Works</h1>

          {/* Images Section */}
          <div className="flex justify-between items-center p-20">
            {[{ src: p3 }, { src: ph3 }, { src: ph2 }].map((item, index) => (
              <div key={index} className="flex flex-col gap-5">
                <img
                  src={item.src}
                  alt={`media-${index}`}
                  className="h-[20vw] rounded-xl cursor-pointer  hover:shadow-[18px_18px_15px_-7px_#636363] hover:border-[#636363] transition-transform duration-300 hover:scale-105 overflow-hidden group"
                  onClick={() => openModal(item.src, "image")}
                />
              </div>
            ))}
          </div>

          {/* Videos Section */}
          <div className="flex justify-between items-center p-20">
            {[{ src: v1 }, { src: v2 }].map((item, index) => (
              <div key={index} className="flex flex-col gap-5">
                <video
                  src={item.src}
                  controls
                  className="h-[20vw] rounded-xl cursor-pointer  hover:shadow-[18px_18px_15px_-7px_#636363] hover:border-[#636363] transition-transform duration-300 hover:scale-105 overflow-hidden group"
                ></video>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-between items-center p-20 h-[75vh]">
          <div className="flex flex-col gap-2">
            <h1 className="text-5xl font-bold font-fontProtest">Why Choose FusionPixel?</h1>

            <div className="flex flex-col gap-1 text-lg text-gray-700 font-light font-fontDyan">
              <p className="flex gap-2 items-center">
                <i className="fa-solid fa-camera text-2xl"></i> Expert team of developers and designers
              </p>
              <p className="flex gap-3 items-center">
                <i className="fa-solid fa-bolt text-2xl"></i> Cutting-edge technologies and best practices
              </p>
              <p className="flex gap-2 items-center">
                <i className="fa-regular fa-star text-2xl"></i> Tailored solutions to meet your unique requirements
              </p>
              <p className="flex gap-2 items-center">
                <i className="fa-regular fa-user text-2xl"></i> Ongoing support and maintenance
              </p>
            </div>
          </div>

          <div className="w-[40vw] border-2 border-black h-[40vh] rounded-2xl text-center">
            ANY IMAGE
          </div>
        </div>

        <div id="contact" className="flex justify-between items-center p-20">
          <ContactCard />
          <div className="flex flex-col gap-2">
            <h1 className="text-5xl font-bold font-fontProtest">Ready to Start Your Project?</h1>
            <p className="text-gray-700 text-xl font-fontDyan font-light">
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
              <img src={currentMedia} alt="Selected" className="max-w-[80vw] max-h-[80vh]  rounded-lg" />
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
              <i class="fa-solid fa-xmark"></i>
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default PhotoAndVideoEditingPage;
