import React, { useState, useRef } from "react";
import { useLanguage } from "../../../contexts/LanguageContext";

const mushroomProjects = [
  {
    id: 1,
    name: "uhana_mushroom",
    project: "mushroomProduction",
    district: "ampara",
    office: "uhana",
    product: "mushroom",
    amount: "512 500,00",
    location: "bandaradoowa",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3946.314248420939!2d81.4604659!3d7.4268175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae520c1595dddbf%3A0x25c2ef2f88d9dec!2sBandaradoowa!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
  },
  {
    id: 2,
    name: "ukuwela_mushroom",
    project: "mushroomProduction",
    district: "matale",
    office: "ukuwela",
    product: "mushroom",
    amount: "1 148 000,00",
    location: "ukuwela_loc",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.994684342757!2d80.5980205!3d8.022494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afcbd63a2611585%3A0x1c2c7866914ae80d!2sThibbatuwewa!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
  },
  {
    id: 3,
    name: "aranayake_mushroom",
    project: "mushroomProduction",
    district: "kegalle",
    office: "aranayake",
    product: "mushroom",
    amount: "2 795 060,20",
    location: "pahinibeddara",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.314248420939!2d80.2473567!3d7.2250915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae31a1102026723%3A0x233870b85415a271!2sNelundeniya!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
  },
  {
    id: 4,
    name: "wellawaya_mushroom",
    project: "mushroomProduction",
    district: "monaragala",
    office: "wellawaya",
    product: "mushroom",
    amount: "1 978 250,00",
    location: "kotikambokka",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.314248420939!2d80.2473567!3d7.2250915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae31a1102026723%3A0x233870b85415a271!2sNelundeniya!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
  },
  {
    id: 5,
    name: "ella_mushroom",
    project: "mushroomProduction",
    district: "badulla",
    office: "ella",
    product: "mushroom",
    amount: "2 818 750,00",
    location: "ella_mushroom_loc",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.314248420939!2d81.0274744!3d6.8815647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae4645572a706ab%3A0x4aa4f518f484c194!2sKumbalwela!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
  },
  {
    id: 6,
    name: "madirigiriya_mushroom",
    project: "mushroomProduction",
    district: "polonnaruwa",
    office: "madirigiriya",
    product: "mushroom",
    amount: "1 691 250,00",
    location: "veheragala",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3971.314248420939!2d80.9516002!3d8.143382!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afb65eaeea2c9ad%3A0xc1b1d51f3a30a57c!2sMedirigiriya!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
  }
];

const MushroomPage = () => {
  const { t } = useLanguage();
  const [selectedProject, setSelectedProject] = useState(mushroomProjects[0]);
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
        {t("mushroomPageTitle")}
      </h1>

      {/* Table Section */}
      <div className="overflow-x-auto mb-6">
        <table className="min-w-full border border-gray-300">
          <thead className="bg-[#C78A3B] text-white">
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
            {mushroomProjects.map((item) => (
              <tr
                key={item.id}
                className="hover:bg-[#FCECDD] cursor-pointer transition-colors"
                onClick={() => handleSelect(item)}
              >
                <td className="px-4 py-2 border text-center">{item.id}</td>
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
            title="Mushroom Project Map"
            src={selectedProject.mapEmbed}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
          ></iframe>
        </div>

        <div className="w-full lg:w-1/2 h-[350px] bg-[#EDE5DD] p-6 rounded-md shadow-md overflow-y-auto">
          <h2 className="text-xl font-bold text-[#C78A3B] mb-4">
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

export default MushroomPage;