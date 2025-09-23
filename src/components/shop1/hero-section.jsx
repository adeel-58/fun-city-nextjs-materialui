"use client";
import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";

export default function HeroSection() {
    return (
        <Box
            sx={{
                height: "auto",
                display: "flex",
                alignItems: "center",
                backgroundImage: `
      linear-gradient(259deg, #4C1663 100%, #0F041400 10%),
      url('/shop1/background.png')
    `,
                backgroundSize: "cover",   // make it cover full section
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                //  background:
                //  "linear-gradient(135deg, #4a148c 0%, #7b1fa2 30%, #9c27b0 60%, #e91e63 100%)",
                px: { xs: 2, md: 6 }, // tighter padding

                pt: 8,   // 👈 padding top
                pb: 0,   // 👈 padding bottom
            }}
        >
            <Grid
                container
                spacing={8}
                alignItems="center"
                sx={{ width: "100%" }} // remove maxWidth center lock
            >
                {/* Left Column */}
                <Grid
                    item
                    xs={12}
                    md={6}
                    sx={{
                        textAlign: "left", // align text to left
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start", // move content to left edge

                        pt: 14,
                        pl: 3,
                    }}
                >
                    <Typography
                        variant="h3"
                        component="h1"
                        sx={{
                            fontWeight: "bold",
                            color: "white",
                            mb: 3,
                            textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
                        }}
                    >
                        Münze einwerfen. <br />
                        Punkte sammeln. <br />
                        Gewinne aussuchen!
                        
                    </Typography>

                    <Typography
                        variant="h6"
                        sx={{ color: "white", fontWeight: 300, mb: 1 }}
                    >
                        Spiel mit, sammle Punkte und sichere dir deine <br />Wunschprämie!
                    </Typography>

                    {/* Joker Image */}
                    <Box sx={{ width: { xs: 100, sm: 130, md: 400 }, height: "auto", lineHeight: 0, }}>
                        <Image
                            src="/shop1/joker-shop1.png"
                            alt="Joker Character"
                            width={150}
                            height={150}
                            style={{ width: "100%", height: "auto", }}
                            priority
                        />
                    </Box>
                </Grid>

                {/* Right Column */}
                <Grid item xs={12} md={6} sx={{ position: "relative" }}>
                    <Box
                        sx={{
                            position: "relative",
                            width: "100%",
                            height: "100%",

                        }}
                    >
                        <Box
                            sx={{
                                position: "absolute",
                                width: { xs: 220, sm: 300, md: 900 },
                                height: "auto",
                                top: "-10px",
                                left: "300px",
                                transform: "translate(-50%, -50%)",

                            }}
                        >
                            <Image
                                src="/shop1/machine-shop1.webp"
                                alt="Arcade Machine"
                                width={500}
                                height={600}
                                style={{ width: "100%", height: "auto" }}
                                priority
                            />
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}
