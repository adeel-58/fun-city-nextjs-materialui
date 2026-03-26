"use client";
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
        position: "relative", // 👈 important for absolute positioning
      }}
    >
      <Herosection />
      <AboutUsSection />

      {/* Floating Coin between AboutUs and Mabe */}
      <Box
        sx={{
          position: "absolute",
         // top: "1300px", // 👈 adjust so it's exactly between the 2 sections
          top: {xs: "670px", md: "1250px",xl:"1330px" }, // mobile | tablet | desktop
         left: {xs: -15, md: -10 }, // mobile | tablet | desktop
         // left:-30, // 👈 adjust horizontal position
          zIndex: 20, // higher than sections
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
