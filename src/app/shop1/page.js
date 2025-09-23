"use client";
import { Box } from "@mui/material"; 
import Herosection from "../../components/shop1/hero-section";
import AboutUsSection from "../../components/shop1/about-us-section";
import HowItWorksSection from "../../components/shop1/how-it-works";
import MabeSection from "../../components/shop1/mabe-section";
import PhotoGallerySection from "../../components/shop1/photo-gallery";
import Contactsection from "../../components/homepage/Contact-section";

export default function Shop1() {
  return (
    <Box
      sx={{
        bgcolor: "#121214", // 👈 your background color
       // color: "white",
        minHeight: "100vh", // ensures full page coverage
      }}
    >
      <Herosection />
      <AboutUsSection />
      <MabeSection />
      <HowItWorksSection />
      <PhotoGallerySection />
      <Contactsection />
    </Box>
  );
}
