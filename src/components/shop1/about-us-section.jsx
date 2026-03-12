"use client";
import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";

export default function AboutUsSection() {
  return (
    <Box
      sx={{
        position: "relative",
        bgcolor: "#121214",
        color: "white",
        py: { xs: 6, md: 10 },
        px: { xs: 2, md: 6 },
        overflow: "hidden",
        // Fixed height only on desktop; auto on mobile
        height: { xs: "auto", md: "750px" },
      }}
    >
      {/* Background Overlay */}
      <Box
        sx={{
          position: "absolute",
          top: { xs: "15%", md: "30%" },
          left: { xs: "75%", md: "50%" },
          //left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 1,
          width: { xs: 300, md: 600 },
          opacity: 0.8,
          pointerEvents: "none",
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

      {/* ── MOBILE LAYOUT ── */}
      <Box
        sx={{
          display: { xs: "flex", md: "none" },
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
          zIndex: 10,
          textAlign: "center",
        }}
      >
        {/* 1. Heading */}
        <Typography variant="h4" sx={{ fontWeight: "bold", mb: 3, pr: 28, fontSize: "25px" }}>
          Über uns
        </Typography>

        {/* 2. Image — pinned to right, adjustable via `right` and `ml` */}
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "flex-end",
            mb: 2,
            // ↓ Move image further right by increasing this negative margin
            mr: -6, // <-- adjust this value to push image more to the right
          }}
        >
          <Image
            src="/shop1/shop-image-shop1.webp"
            alt="Arcade Machine"
            width={600}
            height={400}
            style={{ width: "85%", height: "auto" }}
            priority
          />
        </Box>

        {/* 3. Subheading */}
        <Typography
          variant="h6"
          sx={{ fontWeight: "bold", mb: 2, fontSize: "1.4rem", px: 1, mt: -2 }}
        >
          Wir bringen Spielspaß<br /> und Belohnung<br /> zusammen!
        </Typography>

        {/* 4. Body text */}
        <Typography
          variant="body1"
          sx={{ opacity: 0.9, mb: 3, fontSize: "14px", lineHeight: 1.8, px: 1 }}
        >
          Unsere innovativen Automaten<br /> ermöglichen es dir, mit jeder<br />
          eingeworfenen Münze Punkte zu<br /> sammeln. Diese Punkte kannst du später<br />
          gegen tolle Prämien eintauschen – ganz<br /> einfach und transparent. Ob
          allein oder<br /> mit Freunden: Unsere Automaten sorgen<br /> für Unterhaltung und
          echte<br /> Gewinnchancen.
        </Typography>

        {/* 5. CTA text */}
        <Typography
          variant="subtitle1"
          sx={{ fontWeight: "bold", fontSize: "17px", px: 1 }}
        >
          Spiel mit, sammle Punkte und<br /> sichere dir deine Wunschprämie!
        </Typography>
      </Box>

      {/* ── DESKTOP LAYOUT (original) ── */}
      <Box sx={{ display: { xs: "none", md: "block" } }}>
        {/* Heading + Full Width Line */}
        <Box sx={{ position: "relative", zIndex: 10, mb: 4, ml: 2 }}>
          <Typography variant="h4" sx={{ fontWeight: "bold", mb: 4 }}>
            Über uns
          </Typography>
          <Box
            sx={{
              width: "100%",
              height: "6px",
              background: "linear-gradient(90deg, #690580 0%, #690580 25%, #666666 25%, #666666 100%)",
              mx: "auto",
              borderRadius: "2px",
            }}
          />
        </Box>

        {/* Content Grid */}
        <Grid
          container
          spacing={6}
          alignItems="center"
          sx={{ position: "relative", zIndex: 10, ml: 2 }}
        >
          {/* Left Side */}
          <Grid item xs={12} md={6}>
            <Typography variant="h5" sx={{ fontWeight: "bold", mb: 5 }}>
              Wir bringen Spielspaß und<br /> Belohnung zusammen!
            </Typography>

            <Typography variant="body1" sx={{ opacity: 0.9, mb: 4, fontSize: "15px" }}>
              Unsere innovativen Automaten ermöglichen es dir{","} mit jeder<br /> eingeworfenen Münze Punkte zu sammeln. Diese Punkte kannst du später<br /> gegen tolle Prämien eintauschen – ganz einfach und transparent. Ob<br /> allein oder mit Freunden: Unsere Automaten sorgen für Unterhaltung und <br />echte Gewinnchancen.
            </Typography>

            <Typography variant="subtitle1" sx={{ fontWeight: "bold", fontSize: "15px" }}>
              Spiel mit, sammle Punkte und sichere dir deine Wunschprämie!
            </Typography>
          </Grid>

          {/* Right Side — absolutely positioned image */}
          <Grid item xs={12} md={6} sx={{ position: "relative", minHeight: 400 }}>
            <Box
              sx={{
                position: "absolute",
                top: { md: -30 },
                right: { md: -760 },
                zIndex: 50,
                width: { md: "760px" },
              }}
            >
              <Image
                src="/shop1/shop-image-shop1.webp"
                alt="Arcade Machine"
                width={600}
                height={400}
                style={{ width: "100%", height: "auto", position: "relative", zIndex: 1 }}
                priority
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}