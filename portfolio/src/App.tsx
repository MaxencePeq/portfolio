import { useState } from "react";
import Navbar from "./component/navbar";
import Darkbox from "./component/darkbox";
import Lightbox from "./component/lightbox";
import { motion } from "framer-motion";
import SectionHome from "./component/section/SectionHome";
import { GitHubCalendar } from "react-github-calendar";
import {
  getMode,
  getGitChartTextColor,
  getLeftBorderColor,
} from "./utils/infoCalc";

type AppProps = {
  AppIsDarkmode: boolean;
};

function App({ AppIsDarkmode }: AppProps) {
  const [darkmode, setDarkmode] = useState(AppIsDarkmode);

  const bgColor = darkmode ? "bg-[#181E37]" : "bg-[#FEFEFE]";

  const fadeUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 },
  };

  /**
   * La section est une "page" du portfolio -> La méthode encadre le contenu passé en param pour lui ajouter une animation on scroll. (Motion.div)
   * @param content
   * @returns
   */
  const section = (content: React.ReactNode) => (
    <section className="snap-start min-h-screen flex flex-col items-center justify-center pt-20 pb-8 px-4 sm:px-6 lg:px-8">
      <motion.div
        className=""
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
        viewport={{ once: false, amount: 0.4 }}
      >
        {content}
      </motion.div>
    </section>
  );

  return (
    <div className={`${bgColor} h-screen`}>
      <div className="fixed top-0 left-0 w-full z-50">
        <Navbar darkmode={darkmode} setDarkmode={setDarkmode} />
      </div>

      <main className="h-screen overflow-y-scroll snap-y snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        {section(<SectionHome darkmode={darkmode} />)}

        {section(
          <Darkbox
            darkmode={darkmode}
            content={
              <div className="flex flex-col gap-y-8">
                <p
                  className={`text-4xl text-white border-l-4 pl-4 ${getLeftBorderColor(darkmode)} `}
                >
                  Mes contributions hors travail et étude
                </p>
                <Lightbox
                  darkmode={darkmode}
                  image={
                    <GitHubCalendar
                      username="MaxencePeq"
                      colorScheme={getMode(darkmode)}
                      year={"last"}
                      showColorLegend
                      style={{ color: `${getGitChartTextColor(darkmode)}` }}
                    />
                  }
                  ImageBlockingHeight={false}
                />
              </div>
            }
          />,
        )}
      </main>
    </div>
  );
}

export default App;
