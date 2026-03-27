//"use client";
export const metadata = {
  title: "Automatenshop – Spiele & Gewinne | Fun City",
  description:
    "Spiele im Automatenshop von Fun City, sammle Punkte und tausche sie gegen tolle Preise ein. Arcade-Spaß für alle!",
  alternates: {
    canonical: "/shop1",
  },
};

import { Box } from "@mui/material"; 
import Image from "next/image";
import Herosection from "../../../components/shop1/hero-section";
import AboutUsSection from "../../../components/shop1/about-us-section";
import HowItWorksSection from "../../../components/shop1/how-it-works";
import MabeSection from "../../../components/shop1/mabe-section";
import PhotoGallerySection from "../../../components/shop1/photo-gallery";
import Contactsection from "../../../components/homepage/Contact-section";

export default function Shop1() {
  return (
    <Box
      sx={{
        bgcolor: "#121214", 
        minHeight: "100vh",
        position: "relative",
      }}
    >
      <Herosection />
      <AboutUsSection />

      {/* Floating Coin between AboutUs and Mabe */}
      <Box
        sx={{
          position: "absolute",
          top: {xs: "670px", md: "1250px",xl:"1330px" },
         left: {xs: -15, md: -10 },
          zIndex: 20,
          width: { xs: 100, md: 200 },
          opacity:1111,
        }}
      >
        <Image
          src="/shop1/side-coin-shop1.webp"
          alt="Coin Overlay"
          width={180}
          height={180}
          style={{ width: "100%", height: "auto" }}
        />
      </Box>

      <MabeSection />
      <HowItWorksSection />
      <PhotoGallerySection />
      <Contactsection />
    </Box>
  );
}