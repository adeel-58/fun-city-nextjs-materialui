"use client";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

export default function MaßeSection() {
  return (
    <Box
      sx={{
        position: "relative",
        bgcolor: "#81081A",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundImage: "linear-gradient(to bottom, rgba(0,0,0,0.6), #81081A 50%)",
        color: "white",
        py: { xs: 0, md: 10 },
        px: { xs: 0, md: 6 },
        zIndex: 1,
      }}
    >
      {/* ── MOBILE LAYOUT ── */}
      <Box
        sx={{
          display: { xs: "flex", md: "none" },
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        {/* 1. Heading */}
        <Typography variant="h4" sx={{ fontWeight: "bold", mb: 3, mt: 5, px: 2, fontFamily: "lobster",  fontSize:"2.2rem" }}>
          Maße
        </Typography>

        {/* 2. Text */}
        <Typography
          variant="body1"
          sx={{ opacity: 0.9, px: 3, mb: 5, lineHeight: 1.8 }}
        >
          Der Stand hat drei Ebenen im Veranstaltungsbereich.
          Er ist hell beleuchtet, aus der Ferne gut sichtbar und behindert die Besucher nicht.
          Ein zusätzlicher Bereich lädt zum Verweilen und Genießen der Getränke ein.
          Die Abmessungen sind unten in der Beschreibung angegeben.
        </Typography>

        {/* 3. Dimension image — with left/right padding */}
        <Box sx={{ width: "100%", px: 4, mb: 5 }}>
          <Image
            src="/shop1/dimension-img.webp"
            alt="Dimension Illustration"
            width={400}
            height={300}
            style={{ width: "100%", height: "auto" }}
          />
        </Box>

        {/* 4. Shop image — full width, no padding */}
        <Box sx={{ width: "100%", mb: 0, position: "relative" }}>
          <Image
            src="/pyramid/mabe.webp"
            alt="Hauptshop"
            width={400}
            height={300}
            style={{ width: "100%", height: "auto", display: "block" }}
          />
          {/* Overlay Image */}

        </Box>

        {/* 5. Caption */}

      </Box>

      {/* ── DESKTOP LAYOUT (original) ── */}
      <Box sx={{ display: { xs: "none", md: "block" }, px: 8 }}>
        {/* Heading */}
        <Box textAlign="center" mb={3}>
          <Typography variant="h4" sx={{ fontWeight: "bold", mb: 3, fontFamily: "lobster", fontsize: "2.2rem" }}>
            Maße
          </Typography>
          <Typography
            variant="body1"
            sx={{ maxWidth: 700, mx: "auto", opacity: 0.9 }}
          >
            Der Stand hat drei Ebenen im Veranstaltungsbereich.
            Er ist hell beleuchtet, aus der Ferne gut sichtbar und behindert die Besucher nicht.
            Ein zusätzlicher Bereich lädt zum Verweilen und Genießen der Getränke ein.
            Die Abmessungen sind unten in der Beschreibung angegeben.
          </Typography>
        </Box>

        {/* Two Images Row */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
            gap: 4,
            flexWrap: "wrap",
            mt: 11,
          }}
        >
          {/* Left Image */}
          <Box sx={{ flex: "0 1 55%", maxWidth: 600, mx: "auto", ml: 6 }}>
            <Image
              src="/shop1/dimension-img.webp"
              alt="Dimension Illustration"
              width={400}
              height={300}
              style={{ width: "100%", height: "auto" }}
            />
          </Box>

          {/* Right Image + Caption */}
          <Box
            sx={{
              flex: "0 1 45%",
              maxWidth: 460,
              mx: "auto",
              textAlign: "center",
              position: "relative",
            }}
          >
            <Image
              src="/pyramid/mabe.webp"
              alt="Hauptshop"
              width={400}
              height={300}
              style={{ width: "100%", height: "auto", display: "block", borderRadius: "30px" }}
            />

            {/* Overlay Image */}
            <Box
              sx={{
                position: "absolute",
                bottom: 40,
                left: -80,
                width: { md: 150, lg: 200 },
                height: "auto",
              }}
            >
              <Image
                src="/pyramid/mabe-overlay-02.webp"
                alt="Overlay"
                width={150}
                height={150}
                style={{ width: "80%", height: "auto", display: "block" }}
              />
            </Box>

            <Typography
              variant="body2"
              sx={{ mt: 2, opacity: 1, fontStyle: "normal", fontSize: "17px", lineHeight: 1.7 }}
            >
              Technische Daten: Breite - 12,00m<br />Tiefe - 5,70m open
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}