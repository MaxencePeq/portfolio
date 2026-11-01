import Navbar from "./Navbar";
import Footer from "./Footer";

type AppProps = {
  content: React.ReactNode;
};

function Page({ content }: AppProps) {
  return (
    <div className="bg-bg min-h-screen">
      <div className="fixed top-0 left-0 w-full z-50">
        <Navbar />
      </div>

      <main>{content}</main>

      <Footer />
    </div>
  );
}

export default Page;
