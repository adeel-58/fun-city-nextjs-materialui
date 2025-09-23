"use client";
import { Box } from "@mui/material"; 
import Image from "next/image";
import Herosection from "../../components/shop2/hero-section";
import AboutUsSection from "../../components/shop2/about-us-section";
import HowItWorksSection from "../../components/shop2/how-it-works";
import MabeSection from "../../components/shop2/mabe-section";
import PhotoGallerySection from "../../components/shop2/photo-gallery";
import Contactsection from "../../components/homepage/Contact-section";

export default function Shop1() {
  return (
    <Box
      sx={{
        bgcolor: "#121214", 
        minHeight: "100vh",
        position: "relative", // 👈 important for absolute positioning
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
