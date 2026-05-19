import { useState } from "react";
import Navbar from "./component/navbar";
import { motion } from "framer-motion";
import SectionHome from "./component/section/SectionHome";
import SectionGithub from "./component/section/SectionGithub";
import SectionPassionButton from "./component/button/passionButton";

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
        {section(<SectionGithub darkmode={darkmode} />)}
        {section(<SectionPassionButton darkmode={darkmode} />)}
      </main>
    </div>
  );
}

export default App;
