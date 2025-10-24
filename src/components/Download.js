import React from "react";

// ✅ Document data with correct public paths
const documents = {
  circulars: [
    { name: "Circular 01", file: "/downloads/circular1.pdf" },
    { name: "Circular 02", file: "/downloads/circular2.pdf" },
    { name: "Circular 03", file: "/downloads/circular3.pdf" },
  ],
  guidelines: [
    { name: "Guideline 01", file: "/downloads/guideline1.pdf" },
    { name: "Guideline 02", file: "/downloads/guideline2.pdf" },
    { name: "Guideline 03", file: "/downloads/guideline3.pdf" },
  ],
  formats: [
    { name: "Format 01", file: "/downloads/format1.pdf" },
    { name: "Format 02", file: "/downloads/format2.pdf" },
    { name: "Format 03", file: "/downloads/format3.pdf" },
  ],
};

// ✅ Individual document box
const DocumentBox = ({ name, file }) => (
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
      Download
    </a>
  </div>
);

// ✅ Section block
const Section = ({ id, title, items }) => (
  <section id={id} className="mb-5 scroll-mt-20">
    <h2 className="text-2xl font-semibold text-[#2C3E50] mb-6">{title}</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((doc, index) => (
        <DocumentBox key={index} name={doc.name} file={doc.file} />
      ))}
    </div>
  </section>
);

// ✅ Main download page
const Download = () => {
  return (
    <div className="min-h-screen bg-[#FAFAFA] px-6 py-10">
      <h1 className="text-4xl font-bold text-center mb-6 font-serif text-[#F3931D]">Document Downloads</h1>

      {/* Sections linked to navigation anchors */}
      <Section id="Circulars" title="📑 Circulars" items={documents.circulars} />
      <Section id="Guidelines" title="📘 Guidelines" items={documents.guidelines} />
      <Section id="Formats" title="📂 Formats" items={documents.formats} />
    </div>
  );
};

export default Download;
