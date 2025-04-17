import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Navbar: React.FC = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  // Toggle between English and Arabic while preserving the current path.
  const switchLanguage = (newLang: string) => {
    i18n.changeLanguage(newLang);
    document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr";
    // Replace the locale segment in the current path with the new language.
    const newPath = location.pathname.replace(/^\/(en|ar)/, `/${newLang}`);
    // Navigate to the new path without adding an extra entry in the browser history
    navigate(newPath, { replace: true });
  };

  return (
    <nav className="bg-beige shadow-md border-b border-gray-300 p-4 flex justify-between items-center fixed top-0 left-0 w-full z-50">
      <div className="flex space-x-6">
        <Link
          to={`/${i18n.language}`}
          className="text-xl font-bold text-gray-800 hover:text-gray-600"
        >
          {t("appName")}
        </Link>
        <Link
          to={`/${i18n.language}`}
          className="text-gray-800 hover:text-gray-600"
        >
          {t("navbar.home")}
        </Link>
        <Link
          to={`/${i18n.language}/about`}
          className="text-gray-800 hover:text-gray-600"
        >
          {t("navbar.about")}
        </Link>
      </div>
      <button
        onClick={() => switchLanguage(i18n.language === "en" ? "ar" : "en")}
        className="px-3 py-1 border rounded text-gray-800 hover:bg-gray-200"
      >
        {t("navbar.switch")}
      </button>
    </nav>
  );
};

export default Navbar;
