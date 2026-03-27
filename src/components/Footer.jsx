"use client";
import { Box, Typography, Container, Grid } from "@mui/material";
import Image from "next/image";

export default function Footer() {
  
  return (
    <Box
      component="footer"
      sx={{
        position: "relative",
        background: "radial-gradient(circle, rgba(76, 22, 99, 1) 50%, rgba(76, 22, 99, 1) 78%, rgba(15, 4, 20, 1) 100%)",
        color: "white",
        py: 16,
        overflow: "hidden",
       
      }}
    >
      {/* Background coin image */}
      <Box
  sx={{
    position: "absolute",
    bottom: { xs: -120, md: -250 },   // 👈 mobile vs desktop
    right: { xs: -70, md: 80 },       // 👈 mobile vs desktop
    width: { xs: 500, md: 800 },     // 👈 smaller on mobile
    height: { xs: 400, md: 800 },    // 👈 smaller on mobile
    zIndex: 1,
  }}
>
  <Image
    src="/footer-coin.webp"
    alt="Background Coins"
    fill
    style={{ objectFit: "contain" }}
  />
</Box>

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1, mt:-5 }}>
        <Grid container spacing={7}>
          {/* Left column - Logo and description */}
          <Grid item xs={12} md={3}>
            <Box sx={{ mb: 3 , mt:-5 }}>
              <Image
                src="/logo.webp" // Replace with your Fun Card logo
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
              Tauche ein in unsere einzigartigen Shops, entdecke<br/> aufregende Automaten und sichere dir tolle Preise. Für Kinder, Jugendliche und alle Spielbegeisterten –<br/> <strong style={{ fontSize: "17px" }}>Unterhaltung garantiert!</strong>
            </Typography>
          </Grid>

          {/* About Us column */}
          <Grid item xs={12} sm={6} md={2} sx={{ ml: { xs: 3, md: 0 } }}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                mb: 2,
                
                fontSize: "16px",
              }}
            >
              About Us
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <Typography variant="body2" sx={{ fontSize: "14px", opacity: 0.8 }}>
                Familien Unterhaltung
              </Typography>
              <Typography variant="body2" sx={{ fontSize: "14px", opacity: 0.8 }}>
                Automaten Action
              </Typography>
              <Typography variant="body2" sx={{ fontSize: "14px", opacity: 0.8 }}>
                Echte Gewinne
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
                bauermeister@fun-city.info
              </Typography>
              <Typography variant="body2" sx={{ fontSize: "14px", opacity: 0.8 }}>
                +49 177 4752861
              </Typography>
            </Box>
          </Grid>

          {/* Services column */}
          <Grid item xs={12} sm={6} md={2}  sx={{ ml: { xs: 3, md: 0 } }}>
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
                Shop 1
              </Typography>
              <Typography variant="body2" sx={{ fontSize: "14px", opacity: 0.8 }}>
                Shop 2
              </Typography>
              <Typography variant="body2" sx={{ fontSize: "14px", opacity: 0.8 }}>
                Pyramide
              </Typography>
              
            </Box>
          </Grid>

          {/* Help Center column */}
          <Grid item xs={12} sm={6} md={3} sx={{ ml: { xs: 9, md: 0 } }}>
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
                +49 177 4752861
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}