import { useState } from "react";
import Navbar from "./component/navbar";
import Darkbox from "./component/darkbox";
import Lightbox from "./component/lightbox";

type AppProps = {
  AppIsDarkmode: boolean;
};

function App({ AppIsDarkmode }: AppProps) {
  const [darkmode, setDarkmode] = useState(AppIsDarkmode);

  const bgColor = darkmode ? "bg-[#181E37]" : "bg-[#FEFEFE]";

  const pages = (
    <>
      <section className="snap-start h-screen flex flex-col items-center justify-center pt-16">
        <Darkbox
          darkmode={darkmode}
          content={
            <>
              <p className="text-4xl text-white">Portfolio coming soon...</p>
              <Lightbox
                darkmode={darkmode}
                image={
                  <img
                    src="/img/navbar/instagram.png"
                    alt="??"
                    className="max-w-24 max-h-24"
                  />
                }
              />
            </>
          }
        />
      </section>
      <section className="snap-start h-screen flex flex-col items-center justify-center pt-16">
        <Darkbox
          darkmode={darkmode}
          content={
            <>
              <p className="text-4xl text-white">Also</p>
              <Lightbox
                darkmode={darkmode}
                image={
                  <img
                    src="/img/navbar/instagram.png"
                    alt="??"
                    className="max-w-24 max-h-24"
                  />
                }
              />
            </>
          }
        />
      </section>
    </>
  );

  return (
    <div className={`${bgColor} h-screen`}>
      {/* Navbar fixe — toujours visible, z-index au dessus de tout */}
      <div className="fixed top-0 left-0 w-full z-50">
        <Navbar darkmode={darkmode} setDarkmode={setDarkmode} />
      </div>

      {/* Container scroll — indépendant de la navbar */}
      <main className="h-screen overflow-y-scroll snap-y snap-mandatory">
        {pages}
      </main>
    </div>
  );
}

export default App;
