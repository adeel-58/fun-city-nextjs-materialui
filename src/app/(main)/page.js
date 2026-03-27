export const metadata = {
  title: "Fun City – Spiel, Spaß & Unterhaltung",
  description:
    "Erlebe Fun City mit Arcade-Spielen, Greifautomaten und der Winterpyramide. Spaß, Spannung und tolle Gewinne warten auf dich.",
};


import Herosection from "../../components/homepage/Hero-section";
import AboutUsSection from "../../components/homepage/About-us-section";
import Shop2section from '../../components/homepage/Shop2-section';
import Shop3section from '../../components/homepage/Shop3-section';
import Contactsection from '../../components/homepage/Contact-section';
export default function HomePage() {
  return (
    <>
      
      <Herosection />
    <AboutUsSection/>
    <Shop2section/>
    <Shop3section/>
    <Contactsection/>
      {/* Add more sections below if needed */}
    </>
  );
}
