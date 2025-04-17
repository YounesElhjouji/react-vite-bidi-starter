import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { useTranslation } from "react-i18next";

const About: React.FC = () => {
  const { i18n } = useTranslation();
  const [readmeContent, setReadmeContent] = useState("");

  useEffect(() => {
    // Determine the file to fetch based on the current locale
    const readmeFile =
      i18n.language === "ar" ? "/README_ARABIC.md" : "/README.md";

    fetch(readmeFile)
      .then((res) => res.text())
      .then(setReadmeContent)
      .catch(console.error);
  }, [i18n.language]); // Re-run the effect when the language changes

  return (
    <div className="markdown-container max-w-3xl mx-auto">
      <ReactMarkdown>{readmeContent}</ReactMarkdown>
    </div>
  );
};

export default About;
