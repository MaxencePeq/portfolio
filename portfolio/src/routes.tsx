import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import ComponentPage from "./component/page";
import SectionHome from "./component/section/SectionHome";
import SectionGithub from "./component/section/SectionGithub";
import SectionPassionButton from "./component/button/passionButton";
import { section } from "./utils/section";
import SectionPassions from "./component/section/SectionPassions";
import SectionCv from "./component/section/SectionCV";
import SectionStack from "./component/section/SectionStack";
import SectionBuddy from "./component/section/project/academique/SectionBuddy";
import SectionWFC from "./component/section/project/perso/SectionWFC";
import SectionLebelouvrage from "./component/section/project/pro/SectionLebelouvrage";
import SectionBakerySim from "./component/section/project/perso/SectionBakery-sim";

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
  }, [darkmode]);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <ComponentPage
            darkmode={darkmode}
            setDarkmode={setDarkmode}
            content={
              <>
                {section(<SectionHome darkmode={darkmode} />)}
                {section(<SectionGithub darkmode={darkmode} />)}
                {section(<SectionPassionButton darkmode={darkmode} />)}
                {section(<SectionStack darkmode={darkmode} />)}
                {section(<SectionLebelouvrage darkmode={darkmode} />)}
                {section(<SectionBuddy darkmode={darkmode} />)}
                {section(<SectionWFC darkmode={darkmode} />)}
                {section(<SectionBakerySim darkmode={darkmode} />)}
              </>
            }
          />
        }
      />

      <Route
        path="/passions"
        element={
          <ComponentPage
            darkmode={darkmode}
            setDarkmode={setDarkmode}
            content={<>{section(<SectionPassions darkmode={darkmode} />)}</>}
          />
        }
      />

      <Route
        path="/cv"
        element={
          <ComponentPage
            darkmode={darkmode}
            setDarkmode={setDarkmode}
            content={<>{section(<SectionCv darkmode={darkmode} />)}</>}
          />
        }
      />
    </Routes>
  );
}
