"use client";
import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";

export default function PhotoGallerySection() {
  return (
    <Box
      sx={{
        position: "relative",
        bgcolor: "#0A0A0A",
        color: "white",
        py: 8,
        px: { xs: 2, md: 6 },
        overflow: "hidden",
      }}
    >
      {/* Center Background Overlay */}
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 1,
          width: { xs: 400, md: 600 },
          height: "auto",
          opacity: 0.3,
        }}
      >
        <Image
          src="/shop1/overlay2-shop1.webp" // Replace with your center overlay image
          alt="Center Overlay"
          width={600}
          height={400}
          style={{ width: "100%", height: "auto" }}
        />
      </Box>

      {/* Bottom Right Coin Overlay */}
      <Box
        sx={{
          position: "absolute",
          bottom: "-30px",
          right: "-30px",
          zIndex: 2,
          width: { xs: 120, md: 180 },
          height: "auto",
        }}
      >
        <Image
          src="/shop1/big-coin.webp" // Replace with your coin image
          alt="Coin Overlay"
          width={180}
          height={180}
          style={{ width: "100%", height: "auto" }}
        />
      </Box>

      {/* Content - Higher z-index */}
      <Box sx={{ position: "relative", zIndex: 10 }}>
        {/* Heading */}
        <Box mb={4}>
          <Typography 
            variant="h4" 
            sx={{ 
              fontWeight: "bold", 
              mb: 2,
              fontSize: { xs: "1.8rem", md: "2.5rem" }
            }}
          >
            Fotogalerie
          </Typography>
          
          {/* Thin Line */}
          <Box
            sx={{
              width: "80px",
              height: "2px",
              background: "white",
            }}
          />
        </Box>

        {/* Image Gallery */}
        <Grid container spacing={3}>
          {/* First Row - 3 Images */}
          <Grid item xs={12} sm={4}>
            <Box
              sx={{
                borderRadius: "12px",
                overflow: "hidden",
                boxShadow: "0 4px 20px rgba(0,0,0,0.4)",
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "scale(1.05)",
                },
              }}
            >
              <Image
                src="/shop1/gallery-1.webp" // Replace with your gallery images
                alt="Gallery Image 1"
                width={400}
                height={300}
                style={{ 
                  width: "100%", 
                  height: "250px",
                  objectFit: "cover"
                }}
              />
            </Box>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Box
              sx={{
                borderRadius: "12px",
                overflow: "hidden",
                boxShadow: "0 4px 20px rgba(0,0,0,0.4)",
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "scale(1.05)",
                },
              }}
            >
              <Image
                src="/shop1/gallery-2.webp"
                alt="Gallery Image 2"
                width={400}
                height={300}
                style={{ 
                  width: "100%", 
                  height: "250px",
                  objectFit: "cover"
                }}
              />
            </Box>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Box
              sx={{
                borderRadius: "12px",
                overflow: "hidden",
                boxShadow: "0 4px 20px rgba(0,0,0,0.4)",
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "scale(1.05)",
                },
              }}
            >
              <Image
                src="/shop1/gallery-3.webp"
                alt="Gallery Image 3"
                width={400}
                height={300}
                style={{ 
                  width: "100%", 
                  height: "250px",
                  objectFit: "cover"
                }}
              />
            </Box>
          </Grid>

          {/* Second Row - 2 Images */}
          <Grid item xs={12} sm={6}>
            <Box
              sx={{
                borderRadius: "12px",
                overflow: "hidden",
                boxShadow: "0 4px 20px rgba(0,0,0,0.4)",
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "scale(1.05)",
                },
              }}
            >
              <Image
                src="/shop1/gallery-4.webp"
                alt="Gallery Image 4"
                width={400}
                height={300}
                style={{ 
                  width: "100%", 
                  height: "250px",
                  objectFit: "cover"
                }}
              />
            </Box>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Box
              sx={{
                borderRadius: "12px",
                overflow: "hidden",
                boxShadow: "0 4px 20px rgba(0,0,0,0.4)",
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "scale(1.05)",
                },
              }}
            >
              <Image
                src="/shop1/gallery-5.webp"
                alt="Gallery Image 5"
                width={400}
                height={300}
                style={{ 
                  width: "100%", 
                  height: "250px",
                  objectFit: "cover"
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}