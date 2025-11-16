
import React, { useState, useRef, useEffect } from "react";

// Import images (only 3 images now)
import image1 from "../../../assets/services/fisheries/ornamental fish/id01/image1.jpg";
import image2 from "../../../assets/services/fisheries/ornamental fish/id01/image2.jpg";
import image3 from "../../../assets/services/fisheries/ornamental fish/id01/image3.jpg";


const ornamentalFishProjects = [
  {d: 1,//recheaked
    name: "Dry Fish Project",
    district: "Ampara",
    office: "Kareithiw",
    product: "Dry Fish",
    location: "Kareithiw-09",
    images: [image1, image2, image3], // Only 3 images
    // buyPath: "/buy/mamunuwa-fish",
    description:
      "Construction of Infrastructure Facilities for Dry Fish Production & Provision of Tools and Equipment for Dry Fish project has been approved for allocation of Rs 4,100,000.00 to implement in Karaitivu-09 Grama Niladhari Divisions of Karaitivu Divisonal Secretary Division in Ampara Distct Under the Rural Development Programme- 2025." ,
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.314248420939!2d80.2362518!3d7.6458574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae32d11227a7507%3A0xc4be8a57987c6e46!2sMamunuwa!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",},

  
  {
    id: 2,
    name: "Mamunuwa Breeding & Training Center",
    district: "Kurunegala",
    office: "Variyapola",
    product: "Ornamental Fish Breeding & Training Center",
    location: "Mamunuwa",
    // buyPath: "/buy/mamunuwa-fish",
    images: [image1, image2, image3], // Only 3 images
    description:
      "This center provides training and facilities for ornamental fish breeding in Mamunuwa. It supports local entrepreneurs and promotes sustainable aquaculture practices.",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.314248420939!2d80.2362518!3d7.6458574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae32d11227a7507%3A0xc4be8a57987c6e46!2sMamunuwa!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
  },
  {
    id: 4,
    name: "Thalpitiya Aquarium Support Center",
    district: "Kalutara",
    office: "Panadura",
    product: "Aquarium Setup & Marketing Support",
    location: "697A South Thalpitiya, 7B Palliyamankada",
    // buyPath: "/buy/thalpitiya-aquarium",
    images: [image1, image2, image3], // Only 3 images
    description:
      "This center helps ornamental fish sellers with aquarium setup, marketing, and logistics. It connects producers to urban markets and pet stores.",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.314248420939!2d79.9174825!3d6.6843942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0000000000000000%3A0x0000000000000000!2sSouth%20Thalpitiya%2C%207B%20Palliyamankada!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
  },
  {
    id: 5,
    name: "Katuhena Fish Feed Unit",
    district: "Kalutara",
    office: "Madurawala",
    product: "Ornamental fish food",
    location: "Katuhena, Upper Karannagoda",
    images: [image1, image2, image3], // Only 3 images
    // buyPath: "/buy/katuhena-fishfood",
    description:
      "This unit produces specialized feed for ornamental fish. It supports breeders with high-quality nutrition and promotes healthy fish development.",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.314248420939!2d80.0582246!3d6.671784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0000000000000000%3A0x0000000000000000!2sKatuhena%2C%20Upper%20Karannagoda!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
  },
  {
    id: 6,
    name: "Kandegama Fishing Industry Hub",
    district: "Polonnaruwa",
    office: "Dibylagala",
    product: "Fishing industry",
    location: "240 Kandegama",
    images: [image1, image2, image3], // Only 3 images
    // buyPath: "/buy/kandegama-fishing",
    description:
      "This hub supports inland fishing operations with cold storage, transport, and cooperative marketing. It promotes sustainable fisheries and rural livelihoods.",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3971.314248420939!2d80.4158443!3d8.0713753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afc94597cef8fcb%3A0x923b446274cd3b8b!2sIpalogama!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
  },
  {
    id: 7,
    name: "Alawakumbura Fishing Cooperative",
    district: "Polonnaruwa",
    office: "Dibulagala",
    product: "Fishing industry",
    location: "239 - Alawakumbura",
    images: [image1, image2, image3], // Only 3 images
    // buyPath: "/buy/alawakumbura-fishing",
    description:
      "This cooperative supports fishers in Alawakumbura with shared processing units, branding, and fair trade certification. It promotes youth engagement and sustainable aquaculture.",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.314248420939!2d81.1631467!3d7.6964525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0000000000000000%3A0x0000000000000000!2s239%20-%20Alawakumbura!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
  },
  {
        id: 8,
        district: "Polonnaruwa",
        office: "Dibylagala",
        product: "Fishing industry",
        location: "239 - Alawakumbura",
        images: [image1, image2, image3], // Only 3 images
        mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.314248420939!2d81.1631467!3d7.6964525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0000000000000000%3A0x0000000000000000!2s239%20-%20Alawakumbura!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
        showMore: "Click Here",
      },
];

const OrnamentalFishPage = () => {
  const [selectedProject, setSelectedProject] = useState(ornamentalFishProjects[0]);
  const [imageIndex, setImageIndex] = useState(0);

  const scrollTargetRef = useRef(null);
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
      <h1 className="text-2xl font-bold text-[#2C3E50] mb-6">Ornamental Fish Related Product</h1>

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
            {ornamentalFishProjects.map((item) => (
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

export default OrnamentalFishPage;

