import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Page from "./components/Page";
import SectionHome from "./components/section/SectionHome";
import SectionPassionButton from "./components/section/SectionPassionButton";
import { section } from "./utils/section";
import SectionPassions from "./components/section/SectionPassions";
import SectionCv from "./components/section/SectionCV";
import SectionStack from "./components/section/SectionStack";
import SectionBuddy from "./components/section/project/academique/SectionBuddy";
import SectionWFC from "./components/section/project/perso/SectionWFC";
import SectionLebelouvrage from "./components/section/project/pro/SectionLebelouvrage";
import SectionBakerySim from "./components/section/project/perso/SectionBakerySim";
import SectionWebMusic from "./components/section/project/perso/SectionWebMusic";
import SectionPortfolio from "./components/section/project/perso/SectionPortfolio";

type RoutesProps = {
  AppIsDarkmode: boolean;
};

const DARKMODE_STORAGE_KEY = "portfolio-darkmode";

export default function AppRoutes({ AppIsDarkmode }: RoutesProps) {
  const [darkmode, setDarkmode] = useState(() => {
    const savedDarkmode = localStorage.getItem(DARKMODE_STORAGE_KEY);

    if (savedDarkmode === null) {
      return AppIsDarkmode;
    }

    return savedDarkmode === "true";
  });

  useEffect(() => {
    localStorage.setItem(DARKMODE_STORAGE_KEY, String(darkmode));
    // sans cette classe, les tokens .dark de index.css ne s'appliquent jamais
    document.documentElement.classList.toggle("dark", darkmode);
  }, [darkmode]);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Page
            darkmode={darkmode}
            setDarkmode={setDarkmode}
            content={
              <>
                {section(<SectionHome />, "accueil")}
                {section(<SectionLebelouvrage />, "projets")}
                {section(
                  <div className="w-full max-w-275 min-w-0 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <SectionBuddy />
                    <SectionWFC />
                    <SectionPortfolio />
                    <SectionBakerySim />
                    <SectionWebMusic />
                  </div>,
                )}
                {section(<SectionStack />, "stack")}
                {section(<SectionPassionButton />, "passions")}
              </>
            }
          />
        }
      />

      <Route
        path="/passions"
        element={
          <Page
            darkmode={darkmode}
            setDarkmode={setDarkmode}
            content={section(<SectionPassions />)}
          />
        }
      />

      <Route
        path="/cv"
        element={
          <Page
            darkmode={darkmode}
            setDarkmode={setDarkmode}
            content={section(<SectionCv />)}
          />
        }
      />
    </Routes>
  );
}
