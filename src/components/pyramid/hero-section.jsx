"use client";
import { Box, Typography } from "@mui/material";

export default function HeroSection() {
    return (
        <Box
            sx={{
                height: "120vh", // full viewport height
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start", // align text to the left
                backgroundImage: "url('/pyramid/hero-background.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                px: { xs: 2, md: 6 },
            }}
        >
            <Typography
                variant="h1"
                sx={{
                    fontFamily: 'Lobster',
                    fontWeight: 500, // regular
                    fontSize: "60px",
                    color: "white",
                    textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
                    ml:{lg:10},
                }}
            >
              <span style={{ fontWeight: 300, fontFamily:'poppins', fontSize:"40px" }}>Winternächte</span>,<br/> Perfekte Weine
            </Typography>
            
        </Box>
    );
}