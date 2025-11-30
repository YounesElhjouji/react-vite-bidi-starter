import React, { useEffect } from "react";
import { Outlet, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Navbar from "./Navbar";

const Layout: React.FC = () => {
  const { locale } = useParams<{ locale: string }>();
  const { i18n } = useTranslation();

  // Sync the URL locale with the i18n language and set text direction.
  useEffect(() => {
    if (locale && i18n.language !== locale) {
      i18n.changeLanguage(locale);
      document.documentElement.dir = locale === "ar" ? "rtl" : "ltr";
    } else if (locale) {
      // Ensure direction is set even if language doesn't change (e.g., on initial load)
      document.documentElement.dir = locale === "ar" ? "rtl" : "ltr";
    }
  }, [locale, i18n]);

  return (
    // Apply the default sans font (which is now Cairo) and background color
    <div className="min-h-screen bg-background text-text font-cairo">
      <Navbar />
      {/* Add padding to the top to account for the fixed navbar */}
      <div className="container mx-auto p-4 pt-20">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
