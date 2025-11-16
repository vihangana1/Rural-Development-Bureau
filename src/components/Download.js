
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
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
      { name: `${t('circular')} 01`, file: "/downloads/circular1.pdf" },
      { name: `${t('circular')} 02`, file: "/downloads/circular2.pdf" },
      { name: `${t('circular')} 03`, file: "/downloads/circular3.pdf" },
    ],
    guidelines: [
      { name: `${t('guideline')} 01`, file: "/downloads/guideline1.pdf" },
      { name: `${t('guideline')} 02`, file: "/downloads/guideline2.pdf" },
      { name: `${t('guideline')} 03`, file: "/downloads/guideline3.pdf" },
    ],
    formats: [
      { name: `${t('format')} 01`, file: "/downloads/format1.pdf" },
      { name: `${t('format')} 02`, file: "/downloads/format2.pdf" },
      { name: `${t('format')} 03`, file: "/downloads/format3.pdf" },
    ],
  };
  
  return (
    <div className="min-h-screen bg-[#FAFAFA] px-6 py-10">
      <h1 className="text-4xl font-bold text-center mb-6 font-serif text-[#F3931D]">{t('documentDownloads')}</h1>

      {/* Sections linked to navigation anchors */}
      <Section id="Circulars" title={t('circularsTitle')} items={documents.circulars} downloadText={t('downloadBtn')} />
      <Section id="Guidelines" title={t('guidelinesTitle')} items={documents.guidelines} downloadText={t('downloadBtn')} />
      <Section id="Formats" title={t('formatsTitle')} items={documents.formats} downloadText={t('downloadBtn')} />
    </div>
  );
};

export default Download;