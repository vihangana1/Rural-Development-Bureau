import React, { useState, useRef, useEffect } from "react";

// Import images (only 3 images now)
import image1 from "../../../assets/services/agriculture/kithul/id01/image1.jpg";
import image2 from "../../../assets/services/agriculture/kithul/id01/image2.jpg";
import image3 from "../../../assets/services/agriculture/kithul/id01/image3.jpg";
import image4 from "../../../assets/services/agriculture/kithul/id01/image4.jpg";
import image5 from "../../../assets/services/agriculture/kithul/id01/image5.jpg";
// import image6 from "../../../assets/services/agriculture/kithul/id01/image6.jpg";
import image7 from "../../../assets/services/agriculture/kithul/id01/image7.jpg";


const kithulProjects = [
  
  {
    name: "Matugama Kithul Development Project",
    id: 2,
    district: "Kalutara",
    office: "Mathugama",
    product: "Kithul Hakuru, honey, Kithul flour",
    location: "795 B Sandasirigama, 794 Horawala, 793 B Madawala",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.314248420939!2d80.6670719!3d7.3268171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0000000000000000%3A0x0000000000000000!2s795B%20Sandasirigama%2C%20794%20Horawala%2C%20793B%20Madawala!5e0!3m2!1sen!2slk!4v169598000000",
    buyPath: "/buy/dambulla-flowers",
    images: [image1, image2, image3, image4, image5, image7], // Only 3 images
    description:
"Photographs of the training program held on 22.07.2025 under the project expected to be implemented for the improvement of kithul production in the Grama Niladhari divisions 795B Sadasirigama, 794 Horawala, and 793D Madawala of the Matugama Divisional Secretariat Division, Kalutara District. (Allocation - 1,240,250.00)"   },

  {
    id: 1,
    district: "Nuwara Eliya",
    office: "Kotmale West",
    product: "KKithul-related value-added products",
    location: "Madakubura 468",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.314248420939!2d80.1460593!3d7.0465585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3010ecda58481%3A0x64cf85d5a0ef8ea!2sMadakubura%20Road!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
    buyPath: "/buy/dambulla-flowers",
    images: [image1, image2, image3, image4], // Only 3 images
    description:
      "This zone supports orchid and anthurium growers with export certification, packaging, and air freight logistics. It connects rural producers to global markets.", 
  },  

  
];

const KithulPage = () => {
  const [selectedProject, setSelectedProject] = useState(kithulProjects[0]);
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
      <h1 className="text-2xl font-bold text-[#2C3E50] mb-6">Kithul Related Product</h1>

      {/* Table Section */}
      <div className="overflow-x-auto mb-6">
        <table className="min-w-full border border-gray-300">
          <thead className="bg-[#C1856D] text-white">
            <tr>
              <th className="px-4 py-2 border">No</th>
              <th className="px-4 py-2 border">District</th>
              <th className="px-4 py-2 border">Divisional Secretary Office</th>
              <th className="px-4 py-2 border">Product</th>
              <th className="px-4 py-2 border">Location</th>
              <th className="px-4 py-2 border">Buy Product</th>
            </tr>
          </thead>
          <tbody>
            {kithulProjects.map((item) => (
              <tr
                key={item.id}
                className="hover:bg-[#EBD9D1] cursor-pointer"
                onClick={() => handleSelect(item)}
              >
                <td className="px-4 py-2 border text-center">{item.id}</td>
                <td className="px-4 py-2 border">{item.district}</td>
                <td className="px-4 py-2 border">{item.office}</td>
                <td className="px-4 py-2 border">{item.product}</td>
                <td className="px-4 py-2 border text-blue-600 underline">{item.location}</td>
                <td className="px-4 py-2 border">
                  <a
                    href={item.buyPath}
                    className="text-blue-600 underline hover:text-[#C1856D]"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Click Here
                  </a>
                </td>
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

export default KithulPage;