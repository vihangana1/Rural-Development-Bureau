
import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from '../contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    // <footer className="bg-gradient-to-r from-[#F7941D] to-[#6AA84F] text-white py-10 px-6">
    <footer className="bg-black text-white py-10 px-6">

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-bold mb-4 border-b-2 border-white pb-2">
            {t('quickLinks')}
          </h3>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:underline">
                {t('home')}
              </Link>
            </li>
            <li>
              <Link to="/AboutUs" className="hover:underline">
                {t('aboutUs')}
              </Link>
            </li>
            <li>
              <Link to="/Product" className="hover:underline">
                {t('product')}
              </Link>
            </li>
            <li>
              <Link to="/News" className="hover:underline">
                {t('news')}
              </Link>
            </li>
            <li>
              <Link to="/Download" className="hover:underline">
                {t('download')}
              </Link>
            </li>
            <li>
              <Link to="/ContactUs" className="hover:underline">
                {t('contactUs')}
              </Link>
            </li>
          </ul>
        </div>

        {/* Important Links */}
        <div>
          <h3 className="text-lg font-bold mb-4 border-b-2 border-white pb-2">
            {t('importantLinks')}
          </h3>
          <ul className="space-y-2">
            <li>
              <a
                href="https://stateminsamurdhi.gov.lk/web/index.php?option=com_content&view=article&id=48&Itemid=184&lang=en"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                {t('ruralDevResearchInstitute')}
              </a>
            </li>
            <li>
              <a
                href="https://pubad.gov.lk/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                {t('ministryPublicAdmin')}
              </a>
            </li>
            <li>
              <a
                href="https://www.moha.gov.lk/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                {t('ministryHomeAffairs')}
              </a>
            </li>
            <li>
              <a
                href="https://www.treasury.gov.lk/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                {t('ministryFinance')}
              </a>
            </li>
            <li>
              <a
                href="https://www.srilankabusiness.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                {t('exportDevBoard')}
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="text-lg font-bold mb-4 border-b-2 border-white pb-2">
            {t('contactInfo')}
          </h3>
          <div className="space-y-3">
            <div>
              <p className="font-semibold">{t('address')}:</p>
              <p className="text-sm">{t('addressText')}</p>
            </div>
            <div>
              <p className="font-semibold">{t('phone')}:</p>
              <p className="text-sm">+94 112 887 340</p>
              <p className="text-sm">+94 112 887 361</p>
            </div>
            <div>
              <p className="font-semibold">{t('email')}:</p>
              <p className="text-sm">ruraldevelopmentbureau@gmail.com</p>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="mt-6">
            <h4 className="font-semibold mb-2">{t('followUs')}:</h4>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-blue-300 transition"
              >
                <i className="bi bi-facebook"></i>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-blue-300 transition"
              >
                <i className="bi bi-twitter"></i>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-pink-300 transition"
              >
                <i className="bi bi-instagram"></i>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-red-300 transition"
              >
                <i className="bi bi-youtube"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-white/30 text-center text-sm">
        <p>
          © 2025 {t('aboutMinistry')}. {t('allRightsReserved')}.
        </p>
        <p className="mt-2">
          {/* {t('developedBy')} <span className="font-semibold">Your Team Name</span> */}
        </p>
      </div>
    </footer>
  );
};

export default Footer;