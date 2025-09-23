"use client";

import { Box, Typography } from "@mui/material";

export default function Herosection() {
  return (
    <Box
  sx={{
    position: "relative",
    width: "100vw",   // ensure full width
    height: "100vh",  // full height of screen
    overflow: "hidden",
  }}
>
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
        
      </Box>
    </Box>
  );
}
