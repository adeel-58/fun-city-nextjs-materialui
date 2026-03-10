import PyramidNavbar from "../../components/pyramid/Navbar";
import PyramidFooter from "../../components/pyramid/Footer";

export default function PyramidLayout({ children }) {
  return (
    <>
      <PyramidNavbar />
      <main>{children}</main>
      <PyramidFooter />
    </>
  );
}