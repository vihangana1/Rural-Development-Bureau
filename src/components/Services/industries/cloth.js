import React, { useState, useRef } from "react";
import { useLanguage } from "../../../contexts/LanguageContext";

const clothProject = [
  {
    id: 1,
    name: "nikaweratiya_coir_zone",
    project: "garment_manufacturing",
    district: "ampara",
    office: "addalaichenai",
    product: "uniforms_garments",
    location: "addalaichenai_17",
    amount: "7 014 792,50",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.314248420939!2d80.2159383!3d7.7576504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2fddc602ccdb%3A0xcc8a51875ff74a03!2sNikaweratiya!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
  },
  {
    id: 2,
    name: "akmeemana_batik",
    project: "nugaduwa_batik",
    district: "galle",
    office: "akmeemana",
    product: "batik_clothing",
    location: "nugaduuwa",
    amount: "3 792 756,25",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.314248420939!2d80.0411077!3d6.2370214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae141cf559d74a9%3A0x753122db62df6017!2sAmbalangoda!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
  },
];

const ClothPage = () => {
  const { t } = useLanguage();
  const [selectedProject, setSelectedProject] = useState(clothProject[0]);
  const scrollTargetRef = useRef(null);

  const handleSelect = (project) => {
    setSelectedProject(project);
    setTimeout(() => {
      scrollTargetRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-white px-6 py-10 space-y-10">
      <h1 className="text-2xl font-bold text-[#6D4C41] mb-6">
        {t("clothPageTitle")}
      </h1>

      {/* Table Section */}
      <div className="overflow-x-auto mb-6">
        <table className="min-w-full border border-gray-300">
          <thead className="bg-[#CB8589] text-white">
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
            {clothProject.map((item, index) => (
              <tr
                key={item.id}
                className="hover:bg-[#F7CAC9] cursor-pointer transition-colors"
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
        <div className="w-full lg:w-1/2 h-[350px] rounded-md overflow-hidden shadow-lg border-2 border-[#CB8589]">
          <iframe
            title="Cloth Project Map"
            src={selectedProject.mapEmbed}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
          ></iframe>
        </div>

        <div className="w-full lg:w-1/2 h-[350px] bg-[#FAF3F3] p-6 rounded-md shadow-md overflow-y-auto border-l-4 border-[#CB8589]">
          <h2 className="text-xl font-bold text-[#896C6C] mb-4">
            {t(selectedProject.name)}
          </h2>
          <div className="space-y-2 text-lg text-gray-800">
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

export default ClothPage;