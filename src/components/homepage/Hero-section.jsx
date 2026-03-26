"use client";

import { Box } from "@mui/material";

export default function Herosection() {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100vw",
        height: { xs: "60vh", sm: "100vh" },
        overflow: "hidden",
      }}
    >
      {/* Mobile image — visible only on xs/sm */}
      <Box
        component="img"
        src="/homepage/mobile-hero.webp"
        alt="Hero Mobile"
        sx={{
          display: { xs: "block", md: "none" },
          width: "100%",
          height: "60vh",
          objectFit: "cover",
        }}
      />

      {/* Desktop video — visible only on md+ */}
      <Box
        component="video"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster="/homepage/mobile-hero.webp"
        sx={{
          display: { xs: "none", md: "block" },
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      >
        <source src="/movie1.mp4" type="video/mp4" />
      </Box>

      {/* Overlay */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
          textAlign: "center",
          background: "rgba(0, 0, 0, 0.3)",
          px: 2,
        }}
      />
    </Box>
  );
}