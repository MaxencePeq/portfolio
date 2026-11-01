import Page from "../../portfolio/components/Page";
import { section } from "../../portfolio/utils/section";

<Page
  content={
    <>
      {section(<SectionHome />, "accueil")}
      {section(<SectionApropos />, "apropos")}
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
/>;
