"use client";
import { Box, Typography } from "@mui/material";

export default function HeroSection() {
    return (
        <Box
            sx={{
                height: { xs: "50vh", md: "120vh" }, // mobile 60vh, desktop unchanged
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                backgroundImage: "url('/pyramid/hero-background.webp')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                px: { xs: 2, md: 6 },
            }}
        >
            <Typography
                variant="h1"
                sx={{
                    display: { xs: "none", md: "block" },
                    fontFamily: "Lobster",
                    fontWeight: 500,
                    fontSize: { xs: "1.8rem", md: "60px" }, // mobile + desktop
                    color: "white",
                    textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
                    ml: { lg: 10 },
                }}
            >
                <span
                    style={{
                        fontWeight: 300,
                        fontFamily: "poppins",
                        fontSize: "40px",
                    }}
                >
                    Winternächte
                </span>
                ,<br /> Perfekte Weine
            </Typography>
        </Box>
    );
}