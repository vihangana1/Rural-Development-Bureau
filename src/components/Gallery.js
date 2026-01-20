import React, { useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";

// Import images
import event1 from "../assets/gallery/event1.jpeg";
import event2 from "../assets/gallery/event2.jpeg";
import event3 from "../assets/gallery/event3.jpeg";
import event4 from "../assets/gallery/event4.jpeg";
import event5 from "../assets/gallery/event5.jpeg";
import meeting1 from "../assets/gallery/meeting1.jpeg";
import meeting2 from "../assets/gallery/meeting2.jpeg";
import meeting3 from "../assets/gallery/meeting3.jpeg";

const eventImages = [event1, event2, event3, event4, event5];
const meetingImages = [meeting1, meeting2, meeting3];

const Gallery = () => {
  const { t } = useLanguage();
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="bg-[#FFF8F6] min-h-screen px-6 py-10">
      <h1 className="text-4xl font-bold text-center mb-10 text-black">
        {t("galleryTitle")}
      </h1>

      {/* Events Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6 text-[#333]">
          {t("eventsSection")}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {eventImages.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`${t("eventImage")} ${index + 1}`}
              className="rounded-lg shadow-md cursor-pointer hover:scale-105 transition duration-300 object-cover w-full h-64"
              onClick={() => setSelectedImage(img)}
            />
          ))}
        </div>
      </section>

      {/* Meetings Section */}
      <section>
        <h2 className="text-3xl font-semibold mb-6 text-[#333]">
          {t("meetingsSection")}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {meetingImages.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`${t("meetingImage")} ${index + 1}`}
              className="rounded-lg shadow-md cursor-pointer hover:scale-105 transition duration-300 object-cover w-full h-64"
              onClick={() => setSelectedImage(img)}
            />
          ))}
        </div>
      </section>

      {/* Modal Popup */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative">
            <img
              src={selectedImage}
              alt="Selected"
              className="max-h-[80vh] max-w-[90vw] rounded-lg shadow-lg"
            />
            <button
              className="absolute top-2 right-2 bg-white text-black px-3 py-1 rounded-full shadow-md hover:bg-gray-200"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
