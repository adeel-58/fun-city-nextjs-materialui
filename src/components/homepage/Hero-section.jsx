"use client";

import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";

export default function Herosection() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // mobile breakpoint

  return (
    <Box
      sx={{
        position: "relative",
        width: "100vw",
        height: { xs: "60vh", sm: "100vh" }, // mobile 60% height, desktop full
        overflow: "hidden",
      }}
    >
      {/* Video for desktop */}
      {!isMobile && (
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          controls={false}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
          poster="/homepage/hero-poster.webp"
        >
          <source src="/movie1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}

      {/* Image for mobile */}
      {isMobile && (
        <Box
          component="img"
          src="/homepage/mobile-hero.webp"
          alt="Hero Mobile"
          sx={{
            width: "100%",
            height: "60vh", // control the length of the photo on mobile
            objectFit: "cover",
          }}
        />
      )}

      {/* Overlay Content */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
          textAlign: "center",
          background: "rgba(0, 0, 0, 0.3)", // optional dark overlay
          px: 2,
        }}
      >
        {/* Add your text/buttons here */}
      </Box>
    </Box>
  );
}