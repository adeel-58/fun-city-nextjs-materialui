"use client";
import { Box, Typography } from "@mui/material";
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
        height: { xs: "auto", md: "auto" },
        pb: { xs: 6, md: 13 },
      }}
    >
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
        <Typography variant="h4" sx={{ fontWeight: "bold", mb: 3, pr: 0, fontSize: "25px", textAlign:"center" }}>
          Über uns
        </Typography>

        {/* 2. Image — pinned to right */}
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "flex-end",
            mb: 6,
            mr: 6, // ← adjust to push image more to the right
          }}
        >
          <Image
            src="/shop2/about-us.webp"
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
          Shop 2 ist der Ort, an dem Spielspaß<br /> auf süße Gewinne trifft. Mit nur einer<br />
          Münze und etwas Glück steuerst du<br /> die Klaue und fangst bunte Plüschtiere.<br />
          Spannung, Freude und ein kuscheliges<br /> Andenken bei jedem Versuch!
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
      <Box sx={{ display: { xs: "none", md: "block" }, px:8 }}>
        {/* Heading + Line */}
        <Box sx={{ mb: 6, ml: 2 }}>
          <Typography variant="h4" sx={{ fontWeight: "bold", mb: 4 , textAlign:"center"}}>
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

        {/* Flex Layout */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 6,
            ml: 2.5,
            mt: 5,
          }}
        >
          {/* Left - Text */}
          <Box sx={{ flex: 1 }}>
            <Typography variant="h5" sx={{ fontWeight: "bold", mb: 5 }}>
              Wir bringen Spielspaß und<br />
              Belohnung zusammen!
            </Typography>

            <Typography variant="body1" sx={{ opacity: 0.9, mb: 4, fontSize: "15px" }}>
              Shop 2 ist der Ort, an dem Spielspaß auf süße Gewinne trifft. Mit nur einer<br />
              Münze und etwas Gluck steuerst du die Klaue und fangst bunte<br />
              Plüschtiere. Spannung, Freude und ein kuscheliges Andenken bei jedem<br />
              Versuch!
            </Typography>
          </Box>

          {/* Right - Image */}
          <Box sx={{ flex: 1, maxWidth: 600, mx: "auto", textAlign: "center", mr: 3, mt: 1 }}>
            <Image
              src="/shop2/about-us.webp"
              alt="Arcade Machine"
              width={600}
              height={400}
              style={{ width: "100%", height: "auto" }}
              priority
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}