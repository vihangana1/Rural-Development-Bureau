import React, { useState, useRef, useEffect } from "react";

// Import images (only 3 images now)
import image1 from "../../../assets/services/fisheries/dryfish/id01/image1.jpg";
import image2 from "../../../assets/services/fisheries/dryfish/id01/image2.jpg";
import image3 from "../../../assets/services/fisheries/dryfish/id01/image3.jpg";

import image4 from "../../../assets/services/fisheries/dryfish/id02/image1.jpg";
import image5 from "../../../assets/services/fisheries/dryfish/id02/image2.jpg";
import image6 from "../../../assets/services/fisheries/dryfish/id02/image3.jpg";


const driedFishProjects = [
  { id: 1,//recheaked
    name: " Fish Project",
    district: "Ampara",
    office: "Uhana",
    product: "Dry Fish",
    location: "Bandaraduuwa",
    images: [image1, image2, image3], 
    // buyPath: "/buy/mamunuwa-fish",
    description:
      "Improve the Inland fisheries at Kalugaloya Tank project in Bandaradoowa Grama Niladhari Division of Uhana Divisional Secretary Division in Amparaa District has been approved for a sum of allocation of Rs 922,500.00 under the Rural Development Programme- 2025. Eleven Fishermen (11) out of 25 permanent fishermen in this village are benefiting to get jobs directly through this project. So far, 50% of physical progress has been completed and balance has to complete as possible early before end of this year." ,
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.314248420939!2d80.2362518!3d7.6458574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae32d11227a7507%3A0xc4be8a57987c6e46!2sMamunuwa!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",},

      {d: 2,//recheaked
        name: "Dry Fish Project",
        district: "Ampara",
        office: "Kareithiw",
        product: "Dry Fish",
        location: "Kareithiw-09",
        images: [image4, image5, image6], // Only 3 images
        // buyPath: "/buy/mamunuwa-fish",
        description:
          "Construction of Infrastructure Facilities for Dry Fish Production & Provision of Tools and Equipment for Dry Fish project has been approved for allocation of Rs 4,100,000.00 to implement in Karaitivu-09 Grama Niladhari Divisions of Karaitivu Divisonal Secretary Division in Ampara Distct Under the Rural Development Programme- 2025." ,
        mapEmbed:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.314248420939!2d80.2362518!3d7.6458574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae32d11227a7507%3A0xc4be8a57987c6e46!2sMamunuwa!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
      },
    
      
  {
    id: 3,
    name: "Karukupane Fish Processing Zone",
    district: "Puttalam",
    office: "Arachchikattuwa",
    product: "Fish and dried fish",
    location: "Karukupane",
    images: [image1, image2, image3],
    // buyPath: "/buy/karukupane-fish",
    description:
      "This zone promotes fish and dried fish production in Karukupane with improved feed, storage, and cold chain logistics. It connects producers to hotels and wellness markets.",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.314248420939!2d79.7555022!3d7.642867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2cb3d4f91bc0d%3A0x4a2c6cbc40efc9f5!2sKarukupane!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
  },
];

const UmbalakadaDriesFishPage = () => {
  const [selectedProject, setSelectedProject] = useState(driedFishProjects[0]);
  const scrollTargetRef = useRef(null);
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    setImageIndex(0);
  }, [selectedProject]);

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prev) => (prev + 1) % selectedProject.images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [selectedProject]);

  const handleSelect = (project) => {
    setSelectedProject(project);
    setTimeout(() => {
      scrollTargetRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-white px-6 py-10 space-y-10">
      <h1 className="text-2xl font-bold text-[#2C3E50] mb-6">Umbalakada & Dried Fish Related Product</h1>

      {/* Table Section */}
      <div className="overflow-x-auto mb-6">
        <table className="min-w-full border border-gray-300">
          <thead className="bg-[#F3931D] text-white">
            <tr>
              <th className="px-4 py-2 border">No</th>
              <th className="px-4 py-2 border">District</th>
              <th className="px-4 py-2 border">Divisional Secretary Office</th>
              <th className="px-4 py-2 border">Product</th>
              <th className="px-4 py-2 border">Location</th>
              {/* <th className="px-4 py-2 border">Buy Product</th> */}
            </tr>
          </thead>
          <tbody>
            {driedFishProjects.map((item) => (
              <tr
                key={item.id}
                className="hover:bg-[#FFF7E6] cursor-pointer"
                onClick={() => handleSelect(item)}
              >
                <td className="px-4 py-2 border text-center">{item.id}</td>
                <td className="px-4 py-2 border">{item.district}</td>
                <td className="px-4 py-2 border">{item.office}</td>
                <td className="px-4 py-2 border">{item.product}</td>
                <td className="px-4 py-2 border text-blue-600 underline">{item.location}</td>
                {/* <td className="px-4 py-2 border">
                  <a
                    href={item.buyPath}
                    className="text-blue-600 underline hover:text-[#F3931D]"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Click Here
                  </a>
                </td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Details Section */}
      <div
        ref={scrollTargetRef}
        className="w-full flex flex-col lg:flex-row gap-6 items-start"
      >
        <div className="w-full lg:w-1/2 h-[400px] rounded-md overflow-hidden shadow-lg">
          <iframe
            title="Betel Project Map"
            src={selectedProject.mapEmbed}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
          ></iframe>
        </div>

        <div className="w-full lg:w-1/2 h-[400px] bg-[#EDE5DD] p-6 rounded-md shadow-md overflow-y-auto">
          <h2 className="text-xl font-bold text-[#896C6C] mb-2">
            {selectedProject.name}
          </h2>

          <p className="text-sm text-gray-700 mb-4">
            {selectedProject.description}
          </p>

          <div className="relative w-full h-40 mb-4 overflow-hidden rounded-md">
            {selectedProject.images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt=""
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                  idx === imageIndex ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UmbalakadaDriesFishPage;
