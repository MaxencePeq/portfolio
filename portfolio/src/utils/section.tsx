/**
 * La section est une "page" du portfolio -> La méthode encadre le contenu passé en param.
 * @param content
 * @returns
 */
export const section = (content: React.ReactNode) => (
  <section className="min-h-screen flex flex-col items-center justify-center pt-20 pb-8 px-4 sm:px-6 lg:px-8 overflow-x-hidden">
    <div className="w-full max-w-full min-w-0">{content}</div>
  </section>
);
