"use client";
import { Box } from "@mui/material"; 
import Image from "next/image";
import Herosection from "../../components/pyramid/hero-section";
import AboutUsSection from "../../components/pyramid/about-us-section";
import HowItWorksSection from "../../components/pyramid/how-it-works";
import MabeSection from "../../components/pyramid/mabe-section";
import PhotoGallerySection from "../../components/pyramid/photo-gallery";
import Contactsection from "../../components/pyramid/Contact-section";

export default function Shop1() {
  return (
    <Box
      sx={{
        bgcolor: "#121214", 
        bgcolor: "#2C3D29",
        minHeight: "100vh",
        position: "relative", // 👈 important for absolute positioning
      }}
    >
      <Herosection />
      <AboutUsSection />

      {/* Floating Coin between AboutUs and Mabe */}
      <Box
        sx={{
          position: "absolute",
          top:{ xs: "1130px", md: "1250px",xl:"1400px" },
          
          left: { xs: -20, md: -30} ,// 👈 adjust horizontal position
          zIndex: 20, // higher than sections
          width: { xs: 150, md: 250, lg:350 },
        }}
      >
        <Image
          src="/pyramid/mabe-overlay-01.webp"
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
