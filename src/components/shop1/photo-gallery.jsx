"use client";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

export default function PhotoGallerySection() {
  const galleryImages = [
    "/shop1/image5-shop1.webp",
    "/shop1/image6-shop1.webp",
    "/shop1/image7-shop1.webp",
    "/shop1/image8-shop1.webp",
  ];

  return (
    <Box
      sx={{
        position: "relative",
        bgcolor: "#121214",
        color: "white",
        pt: 0,
        pb: 5,
        px: { xs: 2, md: 6 },
        overflow: "hidden",
      }}
    >
      {/* Center Background Overlay — shared, adjustable */}
      <Box
        sx={{
             display: { xs: "none", md: "block" },
          position: "absolute",
          // ↓ Adjust these to reposition on mobile
          top: { xs: "40%", md: "60%" },
          left: { xs: "50%", md: "40%" },
          transform: "translate(-50%, -50%)",
          zIndex: 1,
          width: { xs: 300, md: 600 },
          height: "auto",
          opacity: 1,
          pointerEvents: "none",
        }}
      >
        <Image
          src="/shop1/overlay2-shop1.webp"
          alt="Center Overlay"
          width={600}
          height={400}
          style={{ width: "100%", height: "auto" }}
        />
      </Box>

      {/* Bottom Right Coin Overlay — desktop only */}
      <Box
        sx={{
          display: { xs: "none", md: "block" },
          position: "absolute",
          bottom: "25px",
          right: "180px",
          zIndex: 2,
          width: { md: 500 },
          height: "auto",
        }}
      >
        <Image
          src="/shop1/big-coin.webp"
          alt="Coin Overlay"
          width={180}
          height={180}
          style={{ width: "100%", height: "auto" }}
        />
      </Box>

      {/* Content */}
      <Box sx={{ position: "relative", zIndex: 10 }}>

        {/* ── MOBILE LAYOUT ── */}
        <Box sx={{ display: { xs: "flex", md: "none" }, flexDirection: "column", alignItems: "center" }}>

          {/* Heading */}
          <Typography
            variant="h4"
            sx={{ fontWeight: "bold", mb: 6, textAlign: "center", fontSize: "1.8rem" }}
          >
            Fotogalerie
          </Typography>

          {/* 2x2 Grid */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 1,rowGap:2.5,
              width: "100%",
              
            }}
          >
            {galleryImages.map((src, i) => (
              <Box
                key={i}
                sx={{
                  borderRadius: "24px",
                  overflow: "hidden",
                  height: "200px",
                }}
              >
                <Image
                  src={src}
                  alt={`Gallery Image ${i + 1}`}
                  width={300}
                  height={200}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </Box>
            ))}
          </Box>
        </Box>

        {/* ── DESKTOP LAYOUT (original) ── */}
        <Box sx={{ display: { xs: "none", md: "block" } , px:8}}>

          {/* Heading */}
          <Box mb={4}>
            <Typography
              variant="h4"
              sx={{ fontWeight: "bold", mb: 4, ml: 2, fontSize: { md: "2.2rem" }, textAlign:"center" }}
            >
              Fotogalerie
            </Typography>
            <Box
              sx={{
                  width: "100%",
    height: "6px",
    background: "linear-gradient(90deg, #666666 0%, #666666 50%, #690580 50%, #690580 75%, #666666 75%, #666666 100%)",
    mx: "auto",
    borderRadius: "2px",
                mb: 8,
              }}
            />
          </Box>

          <Box sx={{ maxWidth: "1200px", margin: "0 auto" }}>

            {/* First Row — 3 images */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                gap: 0.5,
                mb: 4,
              }}
            >
              {["/shop1/image5-shop1.webp", "/shop1/image6-shop1.webp", "/shop1/image7-shop1.webp"].map((src, i) => (
                <Box
                  key={i}
                  sx={{
                    borderRadius: "50px",
                    overflow: "hidden",
                    width: "420px",
                    height: "500px",
                    flexShrink: 0,
                  }}
                >
                  <Image
                    src={src}
                    alt={`Gallery Image ${i + 1}`}
                    width={350}
                    height={400}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </Box>
              ))}
            </Box>

            {/* Second Row — 1 image left */}
            <Box
              sx={{
                ml: -4.5,
                borderRadius: "50px",
                overflow: "hidden",
                width: "420px",
                height: "500px",
                flexShrink: 0,
              }}
            >
              <Image
                src="/shop1/image8-shop1.webp"
                alt="Gallery Image 4"
                width={350}
                height={400}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}