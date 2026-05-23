import { useEffect } from "react";
import Navbar from "./navbar";

type AppProps = {
  darkmode: boolean;
  setDarkmode: (v: boolean) => void;
  content: React.ReactNode;
};

function ComponentPage({ darkmode, setDarkmode, content }: AppProps) {
  const bgColor = darkmode ? "bg-[#181E37]" : "bg-[#FEFEFE]";

  useEffect(() => {
    document.title = "Portfolio Maxence";

    let link: HTMLLinkElement | null =
      document.querySelector("link[rel~='icon']");
    if (!link) {
      link = document.createElement("link");
      link.rel = "icon";
      document.head.appendChild(link);
    }
    link.href = "/img/me/mePhoto.png";
  }, []);

  return (
    <div className={`${bgColor} h-screen`}>
      <div className="fixed top-0 left-0 w-full z-50">
        <Navbar darkmode={darkmode} setDarkmode={setDarkmode} />
      </div>

      <main className="h-screen overflow-y-scroll snap-y snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        {content}
      </main>
    </div>
  );
}

export default ComponentPage;
