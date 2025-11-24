
import React from "react";
import { useLanguage } from '../contexts/LanguageContext'; // Import useLanguage

// ✅ Individual document box
const DocumentBox = ({ name, file, downloadText }) => (
  <div className="bg-white border border-gray-300 rounded-lg shadow-sm p-4 flex items-center justify-between hover:shadow-md transition">
    <div className="flex items-center gap-3">
      <div className="bg-[#F3931D] text-white rounded-full w-10 h-10 flex items-center justify-center text-sm font-bold">
        📄
      </div>
      <span className="text-[#2C3E50] font-medium">{name}</span>
    </div>
    <a
      href={file}
      download
      className="bg-[#2C3E50] text-white px-4 py-1 rounded hover:bg-[#1A252F] transition"
    >
      {downloadText}
    </a>
  </div>
);

// ✅ Section block
const Section = ({ id, title, items, downloadText }) => (
  <section id={id} className="mb-5 scroll-mt-20">
    <h2 className="text-2xl font-semibold text-[#2C3E50] mb-6">{title}</h2>
    <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-cols-1 gap-6">
      {items.map((doc, index) => (
        <DocumentBox key={index} name={doc.name} file={doc.file} downloadText={downloadText} />
      ))}
    </div>
  </section>
);

// ✅ Main download page
const Download = () => {
  const { t } = useLanguage(); // Get the translation function

  // Move documents object inside to use `t` function
  const documents = {
    circulars: [
      { name: `${t('Prajashakthi Circular-Sinhala')} `, file: "/downloads/circular/Prajashakthi Circular-Sinhala.pdf" },
      { name: `${t('Prajashakthi Circular-Tamil')} `, file: "/downloads/circular/Prajashakthi Circular-Tamil.pdf" },
      { name: `${t('Reorganization-of-DCC circular - Sinhala')} `, file: "/downloads/circular/Reorganization-of-DCC circular - Sinhala.pdf" },
      { name: `${t('Reorganization-of-DCC Circular - Tamil')} `, file: "/downloads/circular/Reorganization-of-DCC Circular - Tamil.pdf" },
      { name: `${t('Gramashakthi-SDB-SPV-GS-2022-Circular-01')} `, file: "/downloads/circular/Gramashakthi-SDB-SPV-GS-2022-Circular-01.pdf" },
      { name: `${t('සෞභාග්යා-නිෂ්පාදන-ගම්මාන-පිළිබඳ-චක්ර-ලේඛය-SMS-SDB-2022-Circular')} `, file: "/downloads/circular/සෞභාග්යා-නිෂ්පාදන-ගම්මාන-පිළිබඳ-චක්ර-ලේඛය-SMS-SDB-2022-Circular.pdf" },



      
    ],
    guidelines: [
      { name: `${t('Prajashakthi Guidline - Sinhala')} `, file: "/downloads/guidline/Prajashakthi Guidline - Sinhala.pdf" },
      { name: `${t('Prajashakthi Guidline  - Tamil')} `, file: "/downloads/guidline/Prajashakthi Guidline  - Tamil.pdf" },
      { name: `${t('Rural Development Programme Guideline')} `, file: "/downloads/guidline/RDP_GuideLine.pdf" },
    ],
    
    formats: [
      { name: `${t('Livelihood Project Proposal Format_English')} 01`, file: "/downloads/formats/Livelihood Project Proposal Format_En.pdf" },
      { name: `${t('Livelihood Project Proposal Format_Sinhala')} 02`, file: "/downloads/formats/Livelihood Project Proposal Format_Si.pdf" },
      //{ name: `${t('format')} 03`, file: "/downloads/format3.pdf" },
    ],
  };
  
  return (
    <div className="min-h-screen bg-[#FAFAFA] px-6 py-10">
      <h1 className="text-4xl font-bold text-center mb-6 font-serif text-[#F3931D]">{t('documentDownloads')}</h1>

      {/* Sections linked to navigation anchors */}
      <Section id="Circulars" title={t('circularsTitle')} items={documents.circulars} downloadText={t('downloadBtn')} /><br></br><br></br><br></br>
      <Section id="Guidelines" title={t('guidelinesTitle')} items={documents.guidelines} downloadText={t('downloadBtn')} /><br></br><br></br><br></br>
      <Section id="Formats" title={t('formatsTitle')} items={documents.formats} downloadText={t('downloadBtn')} />
    </div>
  );
};

export default Download;