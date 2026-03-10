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
                py: 10,
                px: { xs: 2, md: 6 },
            }}
        >
            {/* Heading */}
            <Box textAlign="center" mb={3}>
                <Typography variant="h4" sx={{ fontWeight: "bold", mb: 3 }}>
                    Maße
                </Typography>
                <Typography
                    variant="body1"
                    sx={{ maxWidth: 700, mx: "auto", opacity: 0.9 }}
                >
                    Shop 2 hat die idealen Maße, um Spielspaß überall zu bieten. Kompakt und gut organisiert bietet er genug Platz für mehrere Greifautomaten voller bunter Plüschtiere, ohne den Jahrmarktsbereich zu beeinträchtigen.
                </Typography>
            </Box>

            {/* Two Images Row */}
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "flex-start",
                    gap: 4, // space between images
                    flexWrap: "wrap", // 👈 remove this if you want them always side by side
                    mt: 11,
                }}
            >
                {/* Left Image */}
                <Box
                    sx={{
                        flex: "0 1 55%", // takes 45% width
                        maxWidth: 800,
                        mx: "auto",
                        ml: 2,
                    }}
                >
                    <Image
                        src="/shop1/dimension-img.png"
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
                        position: "relative", // make container relative for absolute overlay
                    }}
                >
                    {/* Main Image */}
                    <Image
                        src="/pyramid/mabe.png"
                        alt="Hauptshop"
                        width={400}
                        height={300}
                        style={{ width: "100%", height: "auto", display: "block" }}
                    />

                    {/* Overlay Image */}
                    <Box
                        sx={{
                            position: "absolute",
                            bottom: 40,          // bottom-left corner
                            left: -80,
                            width: { xs: 100, md: 150 , lg:200}, // adjust overlay size
                            height: "auto",
                        }}
                    >
                        <Image
                            src="/pyramid/mabe-overlay-02.png"
                            alt="Overlay"
                            width={150}
                            height={150}
                            style={{ width: "100%", height: "auto", display: "block" }}
                        />
                    </Box>

                    {/* Text */}
                    <Typography
                        variant="body2"
                        sx={{ mt: 5, opacity: 1, fontStyle: "normal" }}
                    >
                        Technische Daten:Breite - 12,00m<br />Tiefe -5,70m open
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
}
