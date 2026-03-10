"use client";
import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";

export default function AboutUsSection() {
  return (
    <Box
      sx={{
        height: "750px",
        position: "relative",
        bgcolor: "#2C3D29",
        color: "white",
        py: 10,
        px: { xs: 2, md: 6 },
        overflow: "hidden",
      }}
    >
      {/* Background Overlays */}
      {/* Left chain */}
      <Box
        sx={{
          position: "absolute",
          top: "9%",
          left: "30%",  // shift slightly left
          transform: "translate(-50%, -50%)",
          zIndex: 1,
          width: { xs: 300, md: 600, lg: 800 },
          opacity: 0.8,
        }}
      >
        <Image
          src="/pyramid/goldchains.png"
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
          top: "9%",
          left: "70%", // shift slightly right
          transform: "translate(-50%, -50%)",
          zIndex: 1,
          width: { xs: 300, md: 600, lg: 800 },
          opacity: 0.8,
        }}
      >
        <Image
          src="/pyramid/goldchains.png"
          alt="Glow Overlay"
          width={800}
          height={400}
          style={{ width: "100%", height: "auto" }}
        />
      </Box>


      {/* Heading + Full Width Line */}
      <Box sx={{ position: "relative", zIndex: 10, mb: 4, ml: 2, }}>
        <Typography variant="h4" sx={{ fontWeight: "bold", mb: 4 }}>
          Über uns
        </Typography>

        <Box
          sx={{
            width: "100%", // full width of container
            height: "6px",
            background:
              "linear-gradient(90deg, #666666 0%, #DF1232 50%, #666666 100%)",
            borderRadius: "2px",
          }}
        />
      </Box>

      {/* Content Grid */}
      <Grid
        container
        spacing={6}
        alignItems="center"
        sx={{ position: "relative", zIndex: 10, ml: 2, }}
      >
        {/* Left Side */}
        <Grid item xs={12} md={6}>
          <Typography variant="h5" sx={{ fontWeight: "bold", mb: 5, }}>
            Wir bringen Spielspaß und<br /> Belohnung zusammen!
          </Typography>

          <Typography variant="body1" sx={{ opacity: 0.9, mb: 4, fontSize: "15px", }}>
            Shop 2 ist der Ort, an dem Spielspaß auf suße Gewinne trifft. Mit nur einer<br/>
            Munze und etwas Glucksteuerst du die Klaue und fangst bunte <br />
            Plüschtiere. Spannung, Freude und ein kuscheliges Andenken bei jedem <br />
            Versuch!
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
              top: { xs: 0, md: -30, lg: 30 },
              right: { xs: "50%", md: -760,lg:-680 },
              transform: { xs: "translateX(50%)", md: "none" },
              zIndex: 50,
              width: { xs: "400px", md: "760px", lg: "600px" },
            }}
          >
            <Image
              src="/pyramid/about-us.png"
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
