import React, { useState, useRef } from "react";
import { useLanguage } from "../../../contexts/LanguageContext";

const sweetFoodProjects = [
  {
    id: 1,
    project: "sweets_village",
    name: "karadagama_sweets",
    district: "monaragala",
    office: "badalkumbura",
    product: "sweets",
    location: "karadagama",
    amount: "1 050 625,00",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.314248420939!2d81.227417!3d6.8959663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae45c665ab37d43%3A0x2ac8b2a9d438b6df!2sBadalkumbura!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
  },
];

const SweetFoodsPage = () => {
  const { t } = useLanguage();
  const [selectedProject, setSelectedProject] = useState(sweetFoodProjects[0]);
  const scrollTargetRef = useRef(null);

  const handleSelect = (project) => {
    setSelectedProject(project);
    setTimeout(() => {
      scrollTargetRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-white px-6 py-10 space-y-10">
      <h1 className="text-2xl font-bold text-[#8D6E63] mb-6">
        {t("sweetFoodsPageTitle")}
      </h1>

      {/* Table Section */}
      <div className="overflow-x-auto mb-6">
        <table className="min-w-full border border-gray-300">
          <thead className="bg-[#FAC67A] text-[#5D4037]">
            <tr>
              <th className="px-4 py-2 border">{t("no")}</th>
              <th className="px-4 py-2 border">{t("district")}</th>
              <th className="px-4 py-2 border">{t("divisionalOffice")}</th>
              <th className="px-4 py-2 border">{t("product")}</th>
              <th className="px-4 py-2 border">{t("location")}</th>
            </tr>
          </thead>
          <tbody>
            {sweetFoodProjects.map((item, index) => (
              <tr
                key={item.id}
                className="hover:bg-[#FFF8E1] cursor-pointer transition-colors"
                onClick={() => handleSelect(item)}
              >
                <td className="px-4 py-2 border text-center">{index + 1}</td>
                <td className="px-4 py-2 border">{t(item.district)}</td>
                <td className="px-4 py-2 border">{t(item.office)}</td>
                <td className="px-4 py-2 border">{t(item.product)}</td>
                <td className="px-4 py-2 border text-blue-600 underline">
                  {t(item.location)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Details Section */}
      <div ref={scrollTargetRef} className="w-full flex flex-col lg:flex-row gap-6 items-start">
        {/* Map Section */}
        <div className="w-full lg:w-1/2 h-[400px] rounded-md overflow-hidden shadow-lg border-2 border-[#FAC67A]">
          <iframe
            title="Sweet & Foods Project Map"
            src={selectedProject.mapEmbed}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>

        {/* Project Details Section */}
        <div className="w-full lg:w-1/2 h-[350px] bg-[#FFF9F2] p-6 rounded-md shadow-md border-l-4 border-[#FAC67A] overflow-y-auto">
          <h2 className="text-xl font-bold text-[#5D4037] mb-4">
            {t(selectedProject.name)}
          </h2>
          <div className="space-y-3 text-lg text-gray-800">
            <p><span className="font-semibold">{t("district")}:</span> {t(selectedProject.district)}</p>
            <p><span className="font-semibold">{t("divisionalOffice")}:</span> {t(selectedProject.office)}</p>
            <p><span className="font-semibold">{t("project")}:</span> {t(selectedProject.project)}</p>
            <p><span className="font-semibold">{t("product")}:</span> {t(selectedProject.product)}</p>
            <p><span className="font-semibold">{t("Amount(Rs)")}:</span> {selectedProject.amount}</p>
            <p><span className="font-semibold">{t("location")}:</span> {t(selectedProject.location)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SweetFoodsPage;