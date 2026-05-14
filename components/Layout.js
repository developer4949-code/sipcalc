import Navbar from "./Navbar";
import Footer from "./Footer";
import EmailCapture from "./EmailCapture";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
      <EmailCapture />
    </>
  );
}
