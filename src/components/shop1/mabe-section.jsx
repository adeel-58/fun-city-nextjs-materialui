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
                    Unser Hauptshop ist mobil und praktisch: Er lässt sich schnell auf- und abbauen, ohne jemanden zu stören. Aufgestellt wird er ausschließlich an speziell eingerichteten Orten für Jahrmärkte, wo er den Besuchern Spielspaß und Gewinne näherbringt.
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
                        ml:2,
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
                        flex: "0 1 45%", // takes 45% width
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
                        style={{ width: "100%", height: "auto" }}
                    />

                    <Typography
                        variant="body2"
                        sx={{ mt: 2, opacity: 0.85, fontStyle: "italic" }}
                    >
                        Der Hauptshop bietet einen angenehmen, gut organisierten Raum – ideal
                        für Spielspaß und Gewinne. Praktisch und einladend fügt er sich
                        nahtlos in die Jahrmarktsatmosphäre ein.
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
}
