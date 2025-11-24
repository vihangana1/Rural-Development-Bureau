import React, { useState, useRef, useEffect } from "react";

// Import images (only 3 images now)
import image1 from "../../../assets/services/Animal husbandry/eggs/id01/image1.jpg";
import image2 from "../../../assets/services/Animal husbandry/eggs/id01/image2.jpg";
import image3 from "../../../assets/services/Animal husbandry/eggs/id01/image1.jpg";
import image4 from "../../../assets/services/Animal husbandry/eggs/id01/image2.jpg";


const eggProjects = [
  
  {
    id: 1,//rechecked
    name: "Kandangamuwa Poultry Cooperative",
    district: "Gampaha",
    office: "Meerigama",
    product: "Eggs and chicks",
    location: "Kandangamuwa, Kindawala, Imbulanwala",
    // buyPath: "/buy/kandangamuwa-eggs",
    images: [image1, image2, image3, image4], // Only 3 images
    description:
      " The Poultry Egg Production Village Project implemented in the Grama Niladhari Divisions of Kandangamuwa, Kindiwala, and Imbulanwela in the Mirigama Divisional Secretariat Division of Gampaha District (Allocation : Rs. 2,305,235.25).",    
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.314248420939!2d80.1275146!3d7.2844224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae31e528ebe35ff%3A0x531bee31213627ab!2sKandangamuwa!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
  },
  {
    id: 2,
    name: "Undugoda Egg Cluster",
    district: "Kegalle",
    office: "Kegalle",
    product: "Egg",
    location: "56 B Undugoda, 56 D Moradana",
    // buyPath: "/buy/undugoda-egg",
    images: [image1, image2], // Only 3 images
    description:
      "This cluster supports egg producers in Undugoda and Moradana with improved feed, housing, and market access. It promotes hygienic egg production and connects farmers to regional buyers.",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.314248420939!2d80.4048678!3d7.1182999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25b8dcd181989%3A0x0000000000000000!2s56%20B%20Undugoda%2C%2056%20D%20Moradana!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
  },
  
  {
    id: 3,
    name: "Yakkaduwa Poultry Zone",
    district: "Gampaha",
    office: "J-Ela",
    product: "Eggs and chicks",
    location: "Yakkaduwa",
    // buyPath: "/buy/yakkaduwa-eggs",
    images: [image1, image2], // Only 3 images
    description:
      "This zone promotes poultry farming in Yakkaduwa with training, equipment, and branding support. It connects farmers to hotels, bakeries, and wellness markets.",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.314248420939!2d79.9108278!3d7.0904906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2f0a6b1e2c117%3A0xbd9d1046bbd74c38!2sYakkaduwa!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
    showMore: "Click Here",
  },
  {
    id: 4,
    name: "Kosgulana Egg Cooperative",
    district: "Kalutara",
    office: "Palindanuwara",
    product: "Egg",
    location: "Kosgulana, Walakada, Dhiganna",
    // buyPath: "/buy/kosgulana-egg",
    images: [image1, image2], // Only 3 images
    description:
      "This cooperative supports egg producers in Kosgulana with shared storage, transport, and branding. It promotes youth engagement and sustainable poultry farming.",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.314248420939!2d80.2501363!3d6.6114202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3c87dfb94365f%3A0xa25198460f723bdb!2sKosgulana!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
  },
];

const EggPage = () => {
  const [selectedProject, setSelectedProject] = useState(eggProjects[0]);
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
      <h1 className="text-2xl font-bold text-[#2C3E50] mb-6">Egg Related Product</h1>

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
            {eggProjects.map((item) => (
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
          
export default EggPage    