import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import ComponentPage from "./component/page";
import SectionHome from "./component/section/SectionHome";
import SectionGithub from "./component/section/SectionGithub";
import SectionPassionButton from "./component/button/passionButton";
import { section } from "./utils/section";
import SectionPassions from "./component/section/SectionPassions";
import SectionCv from "./component/section/SectionCV";

type RoutesProps = {
  AppIsDarkmode: boolean;
};

export default function AppRoutes({ AppIsDarkmode }: RoutesProps) {
  const [darkmode, setDarkmode] = useState(AppIsDarkmode);

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
