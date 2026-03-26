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
       // zIndex:-1,
      }}
    >
      {/* Background coin image */}
      <Image
        src="/pyramid/footer.webp"
        alt="Background Coins"
        width={600}
        height={600}
        style={{
          position: "absolute",
          bottom: -250,
          right: 20,
          opacity: 0.6,
          objectFit: "contain",
          zIndex: 1,
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1, mt: -5 }}>
        <Grid container spacing={7}>
          {/* Left column - Logo and description */}
          <Grid item xs={12} md={3}>
            <Box sx={{ mb: 3 , mt:-5}}>
              <Image
                src="/pyramid/pyramid-logo.webp" // Replace with your Fun Card logo
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
              Erlebe die Winterpyramide! Gemütlich drinnen zwischen festlicher Dekoration oder draußen am wärmenden Feuer – genieße heiße Schokolade, Glühwein und winterliche Leckereien in magischer Weihnachtsatmosphäre.
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
                Wärme
              </Typography>
              <Typography variant="body2" sx={{ fontSize: "14px", opacity: 0.8 }}>
                Freude
              </Typography>
              <Typography variant="body2" sx={{ fontSize: "14px", opacity: 0.8 }}>
                Genuss
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
                info@funcity.de
              </Typography>
              <Typography variant="body2" sx={{ fontSize: "14px", opacity: 0.8 }}>
                +49 123 456 789
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
                +49 123 456 789
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}