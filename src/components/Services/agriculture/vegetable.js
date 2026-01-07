import React, { useState, useRef } from "react";
import { useLanguage } from "../../../contexts/LanguageContext";

const vegetableProjects = [
  {
    id: 1,
    name: "pallankoddai_onion",
    project: "onion_cultivation",
    district: "mannar",
    office: "nanattan",
    product: "onion",
    amount: "2 583 000,00",
    location: "pallankoddai",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.314248420939!2d79.9603739!3d8.8160744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afdceebd8d4c8f7%3A0xa3aaa67eb97792bb!2sPallankoddai!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
  },
  {
    id: 2,
    name: "ketawala_vegetable",
    project: "greenhouse_improvement",
    district: "badulla",
    office: "hali_ela",
    product: "veg_flower",
    amount: "Not Specified",
    location: "ketawala",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.314248420939!2d81.0099502!3d6.9949474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae4629773118951%3A0xdd877305eff4e743!2sKetawala!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
  },
  {
    id: 3,
    name: "atampitiya_vegetable",
    project: "greenhouse_improvement",
    district: "badulla",
    office: "hali_ela",
    product: "veg_flower",
    amount: "2 311 375,00",
    location: "atampitiya",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.314248420939!2d80.9850312!3d6.9367363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae4634caed9fc93%3A0x89ae5b89a870f672!2sEttampitiya!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
  },
];

const VegetablePage = () => {
  const { t } = useLanguage();
  const [selectedProject, setSelectedProject] = useState(vegetableProjects[0]);
  const scrollTargetRef = useRef(null);

  const handleSelect = (project) => {
    setSelectedProject(project);
    setTimeout(() => {
      scrollTargetRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-white px-6 py-10 space-y-10">
      <h1 className="text-2xl font-bold text-[#2C3E50] mb-6">
        {t("vegetablePageTitle")}
      </h1>

      {/* Table Section */}
      <div className="overflow-x-auto mb-6">
        <table className="min-w-full border border-gray-300">
          <thead className="bg-[#A4B465] text-white">
            <tr>
              <th className="px-4 py-2 border">{t("no")}</th>
              <th className="px-4 py-2 border">{t("district")}</th>
              <th className="px-4 py-2 border">{t("divisionalOffice")}</th>
              <th className="px-4 py-2 border">{t("project")}</th>
              <th className="px-4 py-2 border">{t("product")}</th>
              <th className="px-4 py-2 border">{t("location")}</th>
            </tr>
          </thead>
          <tbody>
            {vegetableProjects.map((item, index) => (
              <tr
                key={item.id}
                className="hover:bg-[#D9E9CF] cursor-pointer transition-colors"
                onClick={() => handleSelect(item)}
              >
                <td className="px-4 py-2 border text-center">{index + 1}</td>
                <td className="px-4 py-2 border">{t(item.district)}</td>
                <td className="px-4 py-2 border">{t(item.office)}</td>
                <td className="px-4 py-2 border">{t(item.project)}</td>
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
        <div className="w-full lg:w-1/2 h-[350px] rounded-md overflow-hidden shadow-lg">
          <iframe
            title="Vegetable Project Map"
            src={selectedProject.mapEmbed}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
          ></iframe>
        </div>

        <div className="w-full lg:w-1/2 h-[350px] bg-[#F4F8EC] p-6 rounded-md shadow-md overflow-y-auto">
          <h2 className="text-xl font-bold text-[#A4B465] mb-4">
            {t(selectedProject.name)}
          </h2>
          <div className="space-y-2 text-lg text-gray-700">
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

export default VegetablePage;