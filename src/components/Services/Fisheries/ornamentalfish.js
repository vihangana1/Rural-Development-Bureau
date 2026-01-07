import React, { useState, useRef } from "react";
import { useLanguage } from "../../../contexts/LanguageContext";

const ornamentalFishProjects = [
  {
    id: 1,
    name: "kareithiw_dryfish",
    project: "dryfish_livelihood",
    district: "ampara",
    office: "kareithiw",
    product: "dry_fish",
    location: "kareithiw_loc",
    amount: "4 100 000,00",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.314248420939!2d80.2362518!3d7.6458574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae32d11227a7507%3A0xc4be8a57987c6e46!2sMamunuwa!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
  },
  {
    id: 2,
    name: "mamunuwa_ornamental",
    project: "ornamental_farming",
    district: "kurunegala",
    office: "variyapola",
    product: "ornamental_breeding",
    location: "mamunuwa",
    amount: "3 568 332,50",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.314248420939!2d80.2362518!3d7.6458574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae32d11227a7507%3A0xc4be8a57987c6e46!2sMamunuwa!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
  },
  {
    id: 3,
    name: "thalpitiya_wharf",
    project: "fishing_wharf",
    district: "kalutara",
    office: "panadura",
    product: "fishery_industry",
    location: "thalpitiya_loc",
    amount: "7 269 028,34",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.314248420939!2d79.9174825!3d6.6843942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0000000000000000%3A0x0000000000000000!2sSouth%20Thalpitiya%2C%207B%20Palliyamankada!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
  },
  {
    id: 4,
    name: "katuhena_feed",
    project: "ornamental_food",
    district: "kalutara",
    office: "madurawala",
    product: "ornamental_food_prod",
    location: "katuhena_loc",
    amount: "3 854 000,00",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.314248420939!2d80.0582246!3d6.671784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0000000000000000%3A0x0000000000000000!2sKatuhena%2C%20Upper%20Karannagoda!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
  },
  {
    id: 5,
    name: "andegama_hub",
    project: "freshwater_gear",
    district: "polonnaruwa",
    office: "dibulagala",
    product: "fishing_industry",
    location: "kandegama",
    amount: "615 000,00",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3971.314248420939!2d80.4158443!3d8.0713753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afc94597cef8fcb%3A0x923b446274cd3b8b!2sIpalogama!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
  },
  {
    id: 6,
    name: "alawakumbura_coop",
    project: "lake_dev",
    district: "polonnaruwa",
    office: "dibulagala",
    product: "fishing_industry",
    location: "alawakumbura",
    amount: "704 687,50",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.314248420939!2d81.1631467!3d7.6964525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0000000000000000%3A0x0000000000000000!2s239%20-%20Alawakumbura!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
  },
];

const OrnamentalFishPage = () => {
  const { t } = useLanguage();
  const [selectedProject, setSelectedProject] = useState(ornamentalFishProjects[0]);
  const scrollTargetRef = useRef(null);

  const handleSelect = (project) => {
    setSelectedProject(project);
    setTimeout(() => {
      scrollTargetRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-white px-6 py-10 space-y-10">
      <h1 className="text-2xl font-bold text-[#1A5276] mb-6">
        {t("ornamentalFishPageTitle")}
      </h1>

      {/* Table Section */}
      <div className="overflow-x-auto mb-6">
        <table className="min-w-full border border-gray-300">
          <thead className="bg-[#2980B9] text-white">
            <tr>
              <th className="px-4 py-2 border">{t("no")}</th>
              <th className="px-4 py-2 border">{t("district")}</th>
              <th className="px-4 py-2 border">{t("divisionalOffice")}</th>
              <th className="px-4 py-2 border">{t("product")}</th>
              <th className="px-4 py-2 border">{t("location")}</th>
            </tr>
          </thead>
          <tbody>
            {ornamentalFishProjects.map((item, index) => (
              <tr
                key={item.id}
                className="hover:bg-[#EBF5FB] cursor-pointer transition-colors"
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
        <div className="w-full lg:w-1/2 h-[350px] rounded-md overflow-hidden shadow-lg border-2 border-[#2980B9]">
          <iframe
            title="Fisheries Project Map"
            src={selectedProject.mapEmbed}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
          ></iframe>
        </div>

        <div className="w-full lg:w-1/2 h-[350px] bg-[#F4F6F7] p-6 rounded-md shadow-md overflow-y-auto border-l-4 border-[#2980B9]">
          <h2 className="text-xl font-bold text-[#1A5276] mb-4">
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

export default OrnamentalFishPage;