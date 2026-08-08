import { useEffect } from "react";
import Navbar from "./navbar";
import Footer from "./footer";

type AppProps = {
  darkmode: boolean;
  setDarkmode: (v: boolean) => void;
  content: React.ReactNode;
};

function ComponentPage({ darkmode, setDarkmode, content }: AppProps) {
  // bg-bg : #181e37 en sombre, #f6f8fc en clair

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
    <div className="bg-bg min-h-screen">
      <div className="fixed top-0 left-0 w-full z-50">
        <Navbar darkmode={darkmode} setDarkmode={setDarkmode} />
      </div>

      <main>{content}</main>

      <Footer />
    </div>
  );
}

export default ComponentPage;
