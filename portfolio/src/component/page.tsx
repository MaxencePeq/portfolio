import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./navbar";
import Footer from "./footer";

type AppProps = {
  darkmode: boolean;
  setDarkmode: (v: boolean) => void;
  content: React.ReactNode;
};

function ComponentPage({ darkmode, setDarkmode, content }: AppProps) {
  // bg-bg : #181e37 en sombre, #f6f8fc en clair
  const { pathname, hash, key } = useLocation();

  // react-router conserve le scroll entre les routes et ignore le fragment
  useEffect(() => {
    const target = hash && document.querySelector(hash);
    if (target) target.scrollIntoView({ behavior: "smooth" });
    else window.scrollTo(0, 0);
  }, [pathname, hash, key]);

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
