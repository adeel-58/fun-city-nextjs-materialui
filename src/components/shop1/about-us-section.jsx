"use client";
import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";

export default function AboutUsSection() {
  return (
    <Box
      sx={{
        height: "750px",
        position: "relative",
        bgcolor: "#121214",
        color: "white",
        py: 10,
        px: { xs: 2, md: 6 },
        overflow: "hidden",
      }}
    >
      {/* Background Overlays */}
      <Box
        sx={{
          position: "absolute",
          top: "30%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 1,
          width: { xs: 300, md: 600 },
          opacity: 0.8,
        }}
      >
        <Image
          src="/shop1/overlay1-shop1.webp"
          alt="Glow Overlay"
          width={800}
          height={400}
          style={{ width: "100%", height: "auto" }}
        />
      </Box>

      <Box
        sx={{
          position: "absolute",
          bottom: -100,
          left: "-40px",
          zIndex: 100,
          width: { xs: 120, md: 200 },
        }}
      >
        <Image
          src="/shop1/side-coin-shop1.webp"
          alt="Coin Overlay"
          width={200}
          height={200}
          style={{ width: "100%", height: "auto" }}
        />
      </Box>

      {/* Heading + Full Width Line */}
      <Box sx={{ position: "relative", zIndex: 10, mb: 4 ,ml:2,}}>
        <Typography variant="h4" sx={{ fontWeight: "bold", mb: 4 }}>
          Über uns
        </Typography>

        <Box
          sx={{
            width: "100%", // full width of container
            height: "6px",
            background:
              "linear-gradient(90deg, #666666 0%, #8E4EC4 50%, #666666 100%)",
            borderRadius: "2px",
          }}
        />
      </Box>

      {/* Content Grid */}
      <Grid
        container
        spacing={6}
        alignItems="center"
        sx={{ position: "relative", zIndex: 10,ml:2, }}
      >
        {/* Left Side */}
        <Grid item xs={12} md={6}>
          <Typography variant="h5" sx={{ fontWeight: "bold", mb: 5, }}>
            Wir bringen Spielspaß und<br /> Belohnung zusammen!
          </Typography>

          <Typography variant="body1" sx={{ opacity: 0.9, mb: 4, fontSize:"15px" ,}}>
            Unsere innovativen Automaten ermöglichen es dir{","} mit jeder<br/> eingeworfenen Münze Punkte zu sammeln. Diese Punkte kannst du später<br/> gegen tolle Prämien eintauschen – ganz einfach und transparent. Ob<br/> allein oder mit Freunden: Unsere Automaten sorgen für Unterhaltung und <br/>echte Gewinnchancen.
          </Typography>

          <Typography variant="subtitle1" sx={{ fontWeight: "bold",fontSize:"15px" , }}>
            Spiel mit, sammle Punkte und sichere dir deine Wunschprämie!
          </Typography>
        </Grid>

        {/* Right Side */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{ position: "relative", minHeight: 400 }}
        >
          <Box
            sx={{
              position: "absolute",
              top: { xs: 0, md: -30 },
              right: { xs: "50%", md: -760 },
              transform: { xs: "translateX(50%)", md: "none" },
              zIndex: 50,
              width: { xs: "400px", md: "760px" },
            }}
          >
            <Image
              src="/shop1/shop-image-shop1.webp"
              alt="Arcade Machine"
              width={600}
              height={400}
              style={{
                width: "100%",
                height: "auto",
                position: "relative",
                zIndex: 1,
              }}
              priority
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
