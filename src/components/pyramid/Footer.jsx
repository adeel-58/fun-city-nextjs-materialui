"use client";
import { Box, Typography, Container, Grid } from "@mui/material";
import Image from "next/image";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        position: "relative",
        background: "linear-gradient(to bottom, rgba(0,0,0,0.6), #81081A 0%)",
        color: "white",
        pt: 14,
        pb: 16,
        overflow: "hidden",
      }}
    >
      {/* Background coin image */}
      <Image
        src="/pyramid/footer.png"
        alt="Background Coins"
        width={600}
        height={600}
        style={{
          position: "absolute",
          bottom: -250,
          right: 20,
          opacity: 1,
          objectFit: "contain",
          zIndex: 1,
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1, mt: -5 }}>
        <Grid container spacing={10}>
          {/* Left column - Logo and description */}
          <Grid item xs={12} md={3}>
            <Box sx={{ mb: 3 }}>
              <Image
                src="/pyramid/pyramid-logo.png" // Replace with your Fun Card logo
                alt="Fun Card Logo"
                width={180}
                height={60}
                style={{
                  objectFit: "contain",
                }}
              />
            </Box>
            <Typography
              variant="body2"
              sx={{
                fontSize: "14px",
                lineHeight: 1.6,
                opacity: 0.8,
                maxWidth: "450px",
              }}
            >
              Lorem ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </Typography>
          </Grid>

          {/* About Us column */}
          <Grid item xs={12} sm={6} md={2} sx={{ ml: { xs: 6, md: 0 } }}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                mb: 2,
                fontSize: "16px",
                //ml: { xs: 6, md: 0},
              }}
            >
              About Us
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <Typography variant="body2" sx={{ fontSize: "14px", opacity: 0.8 }}>
                Lorem Ipsum
              </Typography>
              <Typography variant="body2" sx={{ fontSize: "14px", opacity: 0.8 }}>
                Lorem Ipsum
              </Typography>
              <Typography variant="body2" sx={{ fontSize: "14px", opacity: 0.8 }}>
                Lorem Ipsum
              </Typography>
            </Box>
          </Grid>

          {/* Contact column */}
          <Grid item xs={12} sm={6} md={2}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                mb: 2,
                fontSize: "16px",
              }}
            >
              Contact
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <Typography variant="body2" sx={{ fontSize: "14px", opacity: 0.8 }}>
                Lorem Ipsum
              </Typography>
              <Typography variant="body2" sx={{ fontSize: "14px", opacity: 0.8 }}>
                Lorem Ipsum
              </Typography>
            </Box>
          </Grid>

          {/* Services column */}
          <Grid item xs={12} sm={6} md={2} sx={{ ml: { xs: 6, md: 0 } }}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                mb: 2,
                fontSize: "16px",
              }}
            >
              Services
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <Typography variant="body2" sx={{ fontSize: "14px", opacity: 0.8 }}>
                Lorem Ipsum
              </Typography>
              <Typography variant="body2" sx={{ fontSize: "14px", opacity: 0.8 }}>
                Lorem Ipsum
              </Typography>


            </Box>
          </Grid>

          {/* Help Center column */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                mb: 2,
                fontSize: "16px",
              }}
            >
              Help Center
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <Typography variant="body2" sx={{ fontSize: "14px", opacity: 0.8 }}>
                Lorem Ipsum
              </Typography>
              <Typography variant="body2" sx={{ fontSize: "14px", opacity: 0.8 }}>
                Lorem Ipsum
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}