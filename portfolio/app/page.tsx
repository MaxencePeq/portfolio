import Page from "@/components/Page";
import { section } from "@/utils/section";
import Home from "@/data/home";
import Apropos from "@/data/apropos";
import Lebelouvrage from "@/data/projects/lebelouvrage";
import Buddy from "@/data/projects/buddy";
import WFC from "@/data/projects/wfc";
import BakerySim from "@/data/projects/bakerysim";
import WebMusic from "@/data/projects/webmusic";
import Portfolio from "@/data/projects/portfolio";
import Stacks from "@/data/stacks";
import PassionButton from "@/components/PassionButton";
import Legras from "@/data/projects/legras";
import RackServer from "@/data/projects/rackserver";

export default function HomePage() {
  return (
    <Page
      content={
        <>
          {section(<Home />, "accueil")}
          {section(<Apropos />, "apropos")}
          {section(
            <div className="flex flex-col gap-22">
              <Legras />
              <Lebelouvrage />
            </div>,
            "projets",
          )}

          {section(
            <div className="w-full max-w-275 min-w-0 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
              <RackServer />
              <Buddy />
              <WFC />
              <Portfolio />
              <BakerySim />
              <WebMusic />
            </div>,
          )}
          {section(<Stacks />, "stack")}
          {section(<PassionButton />, "passions")}
        </>
      }
    />
  );
}
