"use client";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

export default function PhotoGallerySection() {
  const galleryImages = [
    "/shop2/img4.png",
    "/shop2/img5.png",
    "/shop2/img6.png",
    "/shop2/img7.png",
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
        mb: 3,
      }}
    >
      {/* Center Background Overlay — desktop only */}
      <Box
        sx={{
          display: { xs: "none", md: "block" },
          position: "absolute",
          top: "80%",
          left: "20%",
          transform: "translate(-50%, -50%)",
          zIndex: 1,
          width: { md: 640 },
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

      {/* Content */}
      <Box sx={{ position: "relative", zIndex: 10 }}>

        {/* ── MOBILE LAYOUT ── */}
        <Box
          sx={{ display: { xs: "flex", md: "none" }, flexDirection: "column", alignItems: "center" }}
        >
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
              gap: 2,
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
        <Box sx={{ display: { xs: "none", md: "block" } }}>

          {/* Heading */}
          <Box mb={4}>
            <Typography
              variant="h4"
              sx={{ fontWeight: "bold", mb: 4, ml: 2, fontSize: { md: "2.5rem" } }}
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

          {/* Main Gallery Container */}
          <Box sx={{ maxWidth: "1200px", margin: "0 auto", position: "relative" }}>

            {/* Large Left Image */}
            <Box
              sx={{
                position: "absolute",
                left: 0,
                top: 0,
                borderRadius: "20px",
                overflow: "hidden",
                width: "500px",
                height: "650px",
                zIndex: 3,
              }}
            >
              <Image
                src="/shop2/img4.png"
                alt="Gallery Image 1"
                width={400}
                height={550}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </Box>

            {/* Right Side Images Container */}
            <Box
              sx={{
                marginLeft: "50%",
                display: "flex",
                flexDirection: "column",
                gap: 3.5,
              }}
            >
              {/* Top Right Row — 2 images */}
              <Box sx={{ display: "flex", gap: 5, marginBottom: 2 }}>
                <Box
                  sx={{ borderRadius: "20px", overflow: "hidden", width: "300px", height: "430px" }}
                >
                  <Image
                    src="/shop2/img5.png"
                    alt="Gallery Image 2"
                    width={250}
                    height={200}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </Box>
                <Box
                  sx={{ borderRadius: "20px", overflow: "hidden", width: "300px", height: "430px" }}
                >
                  <Image
                    src="/shop2/img6.png"
                    alt="Gallery Image 3"
                    width={250}
                    height={200}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </Box>
              </Box>

              {/* Bottom Right — 1 wide image */}
              <Box
                sx={{ borderRadius: "20px", overflow: "hidden", width: "600px", height: "400px" }}
              >
                <Image
                  src="/shop2/img7.png"
                  alt="Gallery Image 4"
                  width={502}
                  height={320}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}