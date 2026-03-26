"use client";
import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";

export default function AboutUsSection() {
  return (
    <Box
      sx={{
        position: "relative",
        bgcolor: "#2C3D29",
        color: "white",
        py: { xs: 6, md: 10 },
        px: { xs: 2, md: 6 },
        overflow: "hidden",
        height: { xs: "auto", md: "680px" },
      }}
    >
      {/* Left chain */}
      <Box
        sx={{
          position: "absolute",
          top: { xs: "5%", md: "9%" },
          left: "30%",
          transform: "translate(-50%, -50%)",
          zIndex: 1,
          width: { xs: 250, md: 600, lg: 800 },
          opacity: 0.8,
          pointerEvents: "none",
        }}
      >
        <Image
          src="/pyramid/goldchains.webp"
          alt="Glow Overlay"
          width={800}
          height={400}
          style={{ width: "100%", height: "auto" }}
        />
      </Box>

      {/* Right chain */}
      <Box
        sx={{
          position: "absolute",
          top: { xs: "5%", md: "9%" },
          left: "70%",
          transform: "translate(-50%, -50%)",
          zIndex: 1,
          width: { xs: 250, md: 600, lg: 800 },
          opacity: 0.8,
          pointerEvents: "none",
        }}
      >
        <Image
          src="/pyramid/goldchains.webp"
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
        <Typography variant="h4" sx={{ fontWeight: "bold", mb: 4,mt:4, pr: 0, fontSize: "25px",fontFamily:"lobster",fontSize:"1.8rem",textAlign:"center" }}>
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
            src="/pyramid/about-us.webp"
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
      <Box sx={{ display: { xs: "none", md: "block" }, px:9 }}>
        {/* Heading + Full Width Line */}
        <Box sx={{ position: "relative", zIndex: 10, mb: 4, ml: 2 }}>
          <Typography variant="h4" sx={{ fontWeight: "bold", mb: 4, textAlign:"center", mt:4,fontFamily:"lobster",fontSize:"2.2rem" }}>
            Über uns
          </Typography>
          <Box
            sx={{
              width: "100%",
              height: "6px",
              background: "linear-gradient(90deg, #81081A 0%, #81081A 25%, #666666 25%, #666666 100%)",
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
              Tauche ein in die magische Atmosphäre<br/> der Winterpyramide!
            </Typography>

            <Typography variant="body1" sx={{ opacity: 0.9, mb: 4, fontSize: "15px" }}>
              Ob gemütlich drinnen zwischen funkelnden Weihnachtsdekorationen oder<br/> draußen am wärmenden Lagerfeuer – hier ist jeder Besuch voller Feststimmung. <br/>Genieße heiße Schokolade, Glühwein, winterliche Heißgetränke oder einen wärmenden<br/> Schuss Likör, dazu winterliche Punschvariationen, aromatische Eierlikör-Drinks,<br/> heißen Apfelwein und festliche Cocktails. Kombiniere deine Getränke mit herzhaften <br/>Bratwürsten, frisch gebackenen Weihnachtsgebäcken, Lebkuchen und anderen saisonalen <br/>Köstlichkeiten – für ein rundum stimmungsvolles Wintererlebnis.<br/> Die Winterpyramide verbindet Freunde, Genuss und Weihnachtszauber auf<br/> einzigartige Weise.
            </Typography>
          </Grid>

          {/* Right Side */}
          <Grid item xs={12} md={6} sx={{ position: "relative", minHeight: 400 }}>
            <Box
              sx={{
                position: "absolute",
                top: { xs: 0, md: -30, lg: 40 ,xl:30},
                right: { xs: "50%", md: -760, lg: -480, xl:-580 },
                transform: { xs: "translateX(50%)", md: "none" },
                zIndex: 50,
                width: { xs: "400px", md: "760px", lg: "500px" ,xl:"500px" },
              }}
            >
              <Image
                src="/pyramid/about-us.webp"
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