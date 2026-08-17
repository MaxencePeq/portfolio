import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

type AppProps = {
  darkmode: boolean;
  setDarkmode: (v: boolean) => void;
  content: React.ReactNode;
};

function Page({ darkmode, setDarkmode, content }: AppProps) {
  // bg-bg : #181e37 en sombre, #f6f8fc en clair
  const { pathname, hash, key } = useLocation();

  // react-router conserve le scroll entre les routes et ignore le fragment
  useEffect(() => {
    const target = hash && document.querySelector(hash);
    if (target) target.scrollIntoView({ behavior: "smooth" });
    else window.scrollTo(0, 0);
  }, [pathname, hash, key]);

  // Le titre est désormais statique dans index.html : les crawlers et les
  // aperçus de partage le lisent sans exécuter le JS.

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

export default Page;
