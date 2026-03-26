"use client";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

export default function MaßeSection() {
    return (
        <Box
            sx={{
                position: "relative",
                bgcolor: "#3C0C4A",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                zIndex: 1,
                color: "white",
                py: { xs: 0, md: 10 },
                px: { xs: 0, md: 6 },
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
                <Typography variant="h4" sx={{ fontWeight: "bold", mb: 5, mt: 7, px: 2, fontSize:"2rem" }}>
                    Maße
                </Typography>

                {/* 2. Text */}
                <Typography
                    variant="body1"
                    sx={{ opacity: 0.9, px: 3, mb: 5, lineHeight: 1.8 }}
                >
                    Shop 2 hat die idealen Maße, um Spielspaß überall zu bieten. Kompakt
                    und gut organisiert bietet er genug Platz für mehrere Greifautomaten
                    voller bunter Plüschtiere, ohne den Jahrmarktsbereich zu
                    beeinträchtigen.
                </Typography>

                {/* 3. Dimension image — with left/right padding */}
                <Box sx={{ width: "100%", px: 4, mb: 5 }}>
                    <Image
                        src="/shop2/dimension-shop2.webp"
                        alt="Dimension Illustration"
                        width={400}
                        height={300}
                        style={{ width: "100%", height: "auto" }}
                    />
                </Box>

                {/* 4. Shop image — full width, no padding */}
                <Box sx={{ width: "100%", mb: 0 }}>
                    <Image
                        src="/shop1/image1-shop1.webp"
                        alt="Hauptshop"
                        width={400}
                        height={300}
                        style={{ width: "100%", height: "auto", display: "block" }}
                    />
                </Box>

                
            </Box>

            {/* ── DESKTOP LAYOUT (original) ── */}
            <Box sx={{ display: { xs: "none", md: "block" }, px:8 }}>
                {/* Heading */}
                <Box textAlign="center" mb={3}>
                    <Typography variant="h4" sx={{ fontWeight: "bold", mb: 3 }}>
                        Maße
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{ maxWidth: 700, mx: "auto", opacity: 0.9 }}
                    >
                        Shop 2 hat die idealen Maße, um Spielspaß überall zu bieten. Kompakt
                        und gut organisiert bietet er genug Platz für mehrere Greifautomaten
                        voller bunter Plüschtiere, ohne den Jahrmarktsbereich zu
                        beeinträchtigen.
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
                    <Box sx={{ flex: "0 1 55%", maxWidth: 500, mx: "auto", ml: 8 }}>
                        <Image
                            src="/shop2/dimension-shop2.webp"
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
                        }}
                    >
                        <Image
                            src="/shop1/image1-shop1.webp"
                            alt="Hauptshop"
                            width={400}
                            height={300}
                            style={{ width: "100%", height: "auto",borderRadius:"30px" }}
                        />
                        <Typography
                            variant="body2"
                            sx={{ mt: 2, opacity: 1, fontStyle: "normal", fontSize:"17px", lineHeight:1.7 }}
                        >
                            Technische Daten: Breite - 6,00m<br />Tiefe - 5,00m<br />Strom - 220Volt
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}