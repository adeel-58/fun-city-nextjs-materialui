"use client";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

export default function AboutUsSection() {
  return (
    <Box
      sx={{
        bgcolor: "#121214",
        color: "white",
        py: 10,
        px: { xs: 2, md: 6 },
        pb:13,
      }}
    >
      {/* Heading + Line */}
      <Box sx={{ mb: 6, ml: 2 }}>
        <Typography variant="h4" sx={{ fontWeight: "bold", mb: 4 }}>
          Über uns
        </Typography>

        <Box
          sx={{
            width: "100%",
            height: "6px",
            background:
              "linear-gradient(90deg, #666666 0%, #8E4EC4 50%, #666666 100%)",
            borderRadius: "2px",
          }}
        />
      </Box>

      {/* Flex Layout */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" }, // stack on mobile, row on desktop
          alignItems: "center",
          justifyContent: "space-between",
          gap: 6,
          ml:2.5,
          mt:5,
        }}
      >
        {/* Left - Text */}
        <Box sx={{ flex: 1 }}>
          <Typography variant="h5" sx={{ fontWeight: "bold", mb: 5,  }}>
            Wir bringen Spielspaß und<br/>
Belohnung zusammen!
          </Typography>

          <Typography
            variant="body1"
            sx={{ opacity: 0.9, mb: 4, fontSize: "15px" }}
          >
            Shop 2 ist der Ort, an dem Spielspaß auf süße Gewinne trifft. Mit nur einer<br/>
Münze und etwas Gluck steuerst du die Klaue und fangst bunte<br/>
Plüschtiere. Spannung, Freude und ein kuscheliges Andenken bei jedem<br/>
Versuch!
          </Typography>

         
        </Box>

        {/* Right - Image */}
        <Box
          sx={{
            flex: 1,
            maxWidth: 600,
            mx: "auto",
            textAlign: "center",
            mr:3,
            mt:1,
          }}
        >
          <Image
            src="/shop2/about-us.png"
            alt="Arcade Machine"
            width={600}
            height={400}
            style={{ width: "100%", height: "auto" }}
            priority
          />
        </Box>
      </Box>
    </Box>
  );
}
