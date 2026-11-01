import Page from "@/components/Page";
import { section } from "@/utils/section";
import Home from "@/data/home";

export default function HomePage() {
  return (
    <Page
      content={
        <>
          {section(<Home />, "accueil")}
          {/*
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
           */}
        </>
      }
    />
  );
}
