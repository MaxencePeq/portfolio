import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 },
};

/**
 * La section est une "page" du portfolio -> La méthode encadre le contenu passé en param pour lui ajouter une animation on scroll. (Motion.div)
 * @param content
 * @returns
 */
export const section = (content: React.ReactNode) => (
  <section className="min-h-screen flex flex-col items-center justify-center pt-20 pb-8 px-4 sm:px-6 lg:px-8 overflow-x-hidden">
    <motion.div
      className="w-full max-w-full min-w-0"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
      viewport={{ once: true, amount: 0.15 }}
    >
      {content}
    </motion.div>
  </section>
);
