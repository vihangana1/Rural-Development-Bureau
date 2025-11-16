

import React from "react";
import { useLanguage } from '../contexts/LanguageContext'; // Import useLanguage

const ContactUs = () => {
  const { t } = useLanguage(); // Get the translation function

  return (
    <div className="bg-[#FFF8F6] text-gray-800 min-h-screen">
      <main className="max-w-6xl mx-auto px-6 py-12">
        {/* Intro Message */}
        <h1 className="text-4xl font-bold text-center mb-6 font-serif text-[#F3931D]">{t('contactUsTitle')}</h1>
        <div className="bg-gray-100 border border-gray-300 rounded-md p-4 mb-8 text-center text-gray-700">
          {t('contactIntro')}
        </div>

        <hr className="border-t border-black mb-8" />

        {/* Form and Contact Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-[#FDF1E7] p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-2">{t('fillForm')}</h2>
            <div className="border-b border-dotted border-gray-400 mb-6"></div>
            <form className="space-y-4">
              <div className="flex gap-4">
                <div className="w-1/2">
                  <label className="block font-semibold mb-1">{t('firstName')}</label>
                  <input type="text" className="w-full border border-gray-400 p-2 rounded" />
                </div>
                <div className="w-1/2">
                  <label className="block font-semibold mb-1">{t('lastName')}</label>
                  <input type="text" className="w-full border border-gray-400 p-2 rounded" />
                </div>
              </div>
              <div>
                <label className="block font-semibold mb-1">{t('district')}</label>
                <input type="text" className="w-full border border-gray-400 p-2 rounded" />
              </div>
              <div>
                <label className="block font-semibold mb-1">{t('email')}</label>
                <input type="email" className="w-full border border-gray-400 p-2 rounded" />
              </div>
              <div>
                <label className="block font-semibold mb-1">{t('contactNumber')}</label>
                <input type="tel" className="w-full border border-gray-400 p-2 rounded" />
              </div>
              <div>
                <label className="block font-semibold mb-1">{t('commentMessage')} <span className="text-red-500">*</span></label>
                <textarea rows="4" className="w-full border border-gray-400 p-2 rounded"></textarea>
              </div>
              <button
                type="submit"
                className="bg-orange-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-orange-700 transition"
              >
                {t('submit')}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="bg-[#FFF8F6] p-20 rounded-lg shadow-md border-l-4 " style={{ borderColor: "#F3931D" }}>
            <h2 className="text-4xl font-bold mb-8">{t('meetUs')}</h2>
            <div className="space-y-4 text-gray-700">
              <div>
                <i className="bi bi-geo-alt-fill text-[#9A3F3F] mr-2 mb 40 "></i>
                {t('addressText')}
              </div>
              <div>
                <i className="bi bi-telephone-fill text-[#9A3F3F] mr-2"></i>
                +94 112 887 340 / +94 112 887 361
              </div>
              <div>
                <i className="bi bi-envelope-fill text-[#9A3F3F] mr-2"></i>
                sdbspv@gmail.com
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ContactUs;