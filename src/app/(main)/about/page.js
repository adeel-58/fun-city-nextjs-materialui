"use client";
import { Box, Typography, Container } from "@mui/material";
import Image from "next/image";

const shops = [
  {
    id: "shop1",
    label: "SHOP 01",
    name: "Shop 1 — Münzautomat",
    tagline: "Wir bringen Spielspaß und Belohnung zusammen!",
    description:
      "Unsere innovativen Automaten ermöglichen es dir, mit jeder eingeworfenen Münze Punkte zu sammeln. Diese Punkte kannst du später gegen tolle Prämien eintauschen – ganz einfach und transparent. Ob allein oder mit Freunden: Unsere Automaten sorgen für Unterhaltung und echte Gewinnchancen.",
    accent: "#8E4EC4",
    bgColor: "#121214",
    mainImage: "/homepage/team-photo.webp",
    images: [
      "/shop1/image5-shop1.webp",
      "/shop1/image6-shop1.webp",
      "/about/shop1-4.webp",
    ],
    dimensionImg: "/shop1/dimension-img.webp",
  },
  {
    id: "shop2",
    label: "SHOP 02",
    name: "Shop 2 — Greifautomat",
    tagline: "Greif dein Glück!",
    description:
      "Tauche ein in Spielspaß und Spannung! Wirf eine Münze ein, bewege den Hebel und fang dein Kuscheltier. Jeder Versuch bringt Freude und die Chance auf einen plüschigen Gewinn.",
    accent: "#ffe601",
    bgColor: "#4C1663",
    mainImage: "/shop2/about-us.webp",
    images: [
      "/shop2/img4.webp",
      "/shop2/img5.webp",
      "/shop2/img6.webp",
    ],
    dimensionImg: "/shop2/dimension-shop2.webp",
  },
  {
    id: "pyramid",
    label: "PYRAMID",
    name: "Pyramid Shop",
    tagline: "Tauche ein in die magische Winterpyramide!",
    description:
      "Erlebe die Winterpyramide! Gemütlich drinnen zwischen festlicher Dekoration oder draußen am wärmenden Feuer – genieße heiße Schokolade, Glühwein und winterliche Leckereien in magischer Weihnachtsatmosphäre.",
    accent: "#DF1232",
    bgColor: "#2C3D29",
    mainImage: "/pyramid/about-us.webp",
    images: [
      "/about/pyramid2.webp",
      "/about/pyramid3.webp",
      "/about/pyramid4.webp",
    ],
    dimensionImg: "/shop1/dimension-img.webp",
  },
];

export default function AboutUsPage() {
  return (
    <Box sx={{ bgcolor: "#121214", minHeight: "100vh", color: "white" }}>

      {/* ── HERO ── */}
      <Box
        sx={{
          position: "relative",
          overflow: "hidden",
          pt: 15,
          height: { xs: "30vh", md: "60vh" },
          bgcolor: "#121214",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <Container maxWidth="md" sx={{ position: "relative", zIndex: 2 }}>
          <Typography
            variant="h1"
            sx={{
              fontWeight: 900,
              fontSize: { xs: "1.8rem", md: "3rem" },
              lineHeight: 1.1,
              mb: 3,
              fontFamily: "Poppins, serif",
              color: "white",
            }}
          >
            Über uns
          </Typography>
          <Typography
            variant="h6"
            sx={{
              opacity: 0.7,
              fontWeight: 300,
              maxWidth: 600,
              mx: "auto",
              lineHeight: 1.8,
              fontSize: { xs: "0.75rem", md: "1.15rem" },
              fontFamily:"poppins",
            }}
          >
            Drei einzigartige Shops. Ein Ziel: Spielspaß, Spannung und echte Gewinne für jeden.
          </Typography>


        </Container>
      </Box>

      {/* ── SHOP SECTIONS ── */}
      {shops.map((shop) => (
        <Box
          key={shop.id}
          sx={{
            bgcolor: shop.bgColor,
            py: { xs: 8, md: 14 },
            // borderTop: "1px solid rgba(255,255,255,0.05)",
          }}
        >
          <Container maxWidth="lg">
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: shop.id === "shop2" ? "row-reverse" : "row" },
                alignItems: "center",
                gap: { xs: 4, md: 8 },
              }}
            >

              {/* ── LEFT: Text ── */}
              <Box sx={{ flex: "0 0 auto", width: { xs: "100%", md: "38%" } }}>
                <Typography
                  variant="overline"
                  sx={{
                    color: shop.accent,
                    letterSpacing: 5,
                    fontSize: "0.7rem",
                    display: "block",
                    mb: 1.5,
                    mt:-4,
                    fontFamily: "poppins",
                  }}
                >
                  {shop.label}
                </Typography>

                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: 800,
                    fontSize: { xs: "1rem", md: "1.8rem" },
                    fontFamily: "poppins, serif",
                    mb: 1.5,
                    lineHeight: 1.2,
                  }}
                >
                  {shop.name}
                </Typography>

                <Box sx={{ width: 60, height: 4, bgcolor: shop.accent, borderRadius: "2px", mb: 3 }} />

                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                    fontSize: { xs: "1rem", md: "1.1rem" },
                    mb: 2.5,
                    opacity: 0.95,
                    lineHeight: 1.5,
                  }}
                >
                  {shop.tagline}
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    opacity: 0.75,
                    lineHeight: 1.9,
                    fontSize: { xs: "0.9rem", md: "0.95rem" },
                  }}
                >
                  {shop.description}
                </Typography>
                {/* Dimension image */}
                <Box
                  sx={{
                    display: { xs: "none", sm: "block" },
                    mt: 4,
                    //borderRadius: "12px",
                    overflow: "hidden",
                    //border: `1px solid ${shop.accent}33`,
                    maxWidth: "280px",mx: "auto",
                  }}
                >
                  <Image
                    src={shop.dimensionImg}
                    alt="Dimension"
                    width={280}
                    height={180}
                    style={{ width: "100%", height: "auto", display: "block" }}
                  />
                </Box>
              </Box>

              {/* ── RIGHT: Images ── */}
              <Box sx={{ flex: 1, width: { xs: "100%", md: "auto" } }}>
                {/* Main large image */}
                <Box
                  sx={{
                    borderRadius: "20px",
                    overflow: "hidden",
                    mb:{ xs: 1, md: 2 },
                    height: { xs: "240px", md: "360px" },
                    // border: `1px solid ${shop.accent}33`,
                    boxShadow: `0 20px 60px ${shop.accent}22`,
                    position: "relative",
                  }}
                >
                  <Image
                    src={shop.mainImage}
                    alt={shop.name}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: "3px",
                      background: `linear-gradient(90deg, transparent, ${shop.accent}, transparent)`,
                    }}
                  />
                </Box>

                {/* 3 smaller images */}
                <Box
                  sx={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr 1fr",
                    gap: { xs: 1, md: 1.5 },
                  }}
                >
                  {shop.images.map((src, i) => (
                    <Box
                      key={i}
                      sx={{
                        borderRadius: "14px",
                        overflow: "hidden",
                        height: { xs: "85px", md: "120px" },
                        
                        // border: `1px solid ${shop.accent}22`,
                        transition: "transform 0.2s, box-shadow 0.2s",
                        "&:hover": {
                          transform: "scale(1.04)",
                          boxShadow: `0 8px 24px ${shop.accent}33`,
                        },
                      }}
                    >
                      <Image
                        src={src}
                        alt={`${shop.name} ${i + 1}`}
                        width={300}
                        height={200}
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                      />
                    </Box>
                  ))}
                </Box>
              </Box>

            </Box>
          </Container>
        </Box>
      ))}

      {/* ── BOTTOM CTA ── */}


    </Box>
  );
}