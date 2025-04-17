import React from "react";
import { useTranslation } from "react-i18next";

const Home: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="py-8">
      <h1 className="text-4xl font-bold mb-4">{t("home.title")}</h1>
      <p className="text-lg">{t("home.description")}</p>
    </div>
  );
};

export default Home;
