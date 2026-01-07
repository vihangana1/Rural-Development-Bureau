import React, { useState, useRef } from "react";
import { useLanguage } from "../../../contexts/LanguageContext";

const woodenProjects = [
  {
    id: 1,
    name: "moratuwa_furniture",
    project: "wooden_furniture_cluster",
    district: "colombo",
    office: "moratuwa",
    product: "wooden_furniture",
    location: "moratuwa_cluster_loc",
    amount: "6 279 551,44",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.314248420939!2d79.8867931!3d6.7558154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae245b965a97539%3A0x4ef659907507ad3b!2sKoralawella%20West%2C%20Moratuwa!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
  },
];

const WoodenPage = () => {
  const { t } = useLanguage();
  const [selectedProject, setSelectedProject] = useState(woodenProjects[0]);
  const scrollTargetRef = useRef(null);

  const handleSelect = (project) => {
    setSelectedProject(project);
    setTimeout(() => {
      scrollTargetRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-white px-6 py-10 space-y-10">
      <h1 className="text-2xl font-bold text-[#5D4037] mb-6">
        {t("woodenPageTitle")}
      </h1>

      {/* Table Section */}
      <div className="overflow-x-auto mb-6">
        <table className="min-w-full border border-gray-300">
          <thead className="bg-[#954C2E] text-white">
            <tr>
              <th className="px-4 py-2 border">{t("no")}</th>
              <th className="px-4 py-2 border">{t("district")}</th>
              <th className="px-4 py-2 border">{t("divisionalOffice")}</th>
              <th className="px-4 py-2 border">{t("product")}</th>
              <th className="px-4 py-2 border">{t("location")}</th>
            </tr>
          </thead>
          <tbody>
            {woodenProjects.map((item, index) => (
              <tr
                key={item.id}
                className="hover:bg-[#FFF3E0] cursor-pointer transition-colors"
                onClick={() => handleSelect(item)}
              >
                <td className="px-4 py-2 border text-center">{index + 1}</td>
                <td className="px-4 py-2 border">{t(item.district)}</td>
                <td className="px-4 py-2 border">{t(item.office)}</td>
                <td className="px-4 py-2 border">{t(item.product)}</td>
                <td className="px-4 py-2 border text-blue-600 underline text-sm leading-relaxed">
                  {t(item.location)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Split Layout Section */}
      <div ref={scrollTargetRef} className="w-full flex flex-col lg:flex-row gap-6 items-start">
        {/* Map Section */}
        <div className="w-full lg:w-1/2 h-[400px] rounded-md overflow-hidden shadow-lg border-2 border-[#954C2E]">
          <iframe
            title="Wooden Project Map"
            src={selectedProject.mapEmbed}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>

        {/* Project Details Section */}
        <div className="w-full lg:w-1/2 h-[400px] bg-[#FAF3EB] p-6 rounded-md shadow-md border-l-4 border-[#954C2E] overflow-y-auto">
          <h2 className="text-xl font-bold text-[#5D4037] mb-4">
            {t(selectedProject.name)}
          </h2>
          <div className="space-y-3 text-md text-gray-800">
            <p><span className="font-semibold">{t("district")}:</span> {t(selectedProject.district)}</p>
            <p><span className="font-semibold">{t("divisionalOffice")}:</span> {t(selectedProject.office)}</p>
            <p><span className="font-semibold">{t("product")}:</span> {t(selectedProject.product)}</p>
            <p><span className="font-semibold">{t("location")}:</span> {t(selectedProject.location)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WoodenPage;