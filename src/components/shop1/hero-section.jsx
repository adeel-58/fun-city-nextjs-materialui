"use client";
import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";

export default function HeroSection() {
    return (
        <>
            {/* ===== DESKTOP HERO ===== */}
            <Box
                sx={{
                    display: { xs: "none", md: "flex" },
                    height: "auto",
                    alignItems: "center",
                    backgroundImage: `
                        linear-gradient(259deg, #4C1663 100%, #0F041400 10%),
                        url('/shop1/background.png')
                    `,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    px: { xs: 2, md: 6 },
                    pt: 8,
                    pb: 0,
                }}
            >
                <Grid
                    container
                    spacing={8}
                    alignItems="center"
                    sx={{ width: "100%" }}
                >
                    {/* Left Column */}
                    <Grid
                        item
                        xs={12}
                        md={6}
                        sx={{
                            textAlign: "left",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
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

                        <Box sx={{ width: { xs: 100, sm: 130, md: 400 }, height: "auto", lineHeight: 0 }}>
                            <Image
                                src="/shop1/joker-shop1.png"
                                alt="Joker Character"
                                width={150}
                                height={150}
                                style={{ width: "100%", height: "auto" }}
                                priority
                            />
                        </Box>
                    </Grid>

                    {/* Right Column */}
                    <Grid item xs={12} md={6} sx={{ position: "relative" }}>
                        <Box sx={{ position: "relative", width: "100%", height: "100%" }}>
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

            {/* ===== MOBILE HERO ===== */}
            {/* ===== MOBILE HERO ===== */}
            <Box
                sx={{
                    display: { xs: "flex", md: "none" },
                    height: "60vh",
                    flexDirection: "column",
                    backgroundImage: `
            linear-gradient(259deg, #4C1663 100%, #0F041400 10%),
            url('/shop1/background.png')
        `,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    px: 2,
                    pt: 15,
                    pb: 0,
                    overflow: "hidden",
                    position: "relative", // 👈 needed for absolute child
                }}
            >
                {/* Machine Image — absolutely positioned behind everything */}
                <Box
                    sx={{
                        position: "absolute",
                        bottom: 10,
                        right: -150,
                        width: 600,
                        zIndex: 1, // 👈 behind text
                    }}
                >
                    <Image
                        src="/shop1/machine-shop1.webp"
                        alt="Arcade Machine"
                        width={400}
                        height={400}
                        style={{ width: "100%", height: "auto", display: "block", opacity:0.5 }}
                        priority
                    />
                </Box>

                {/* Foreground content */}
                <Box sx={{ position: "relative", zIndex: 2, display: "flex", flexDirection: "column", flex: 1 }}>
                    {/* Heading */}
                    <Typography
                        variant="h5"
                        component="h1"
                        sx={{
                            fontWeight: "bold",
                            color: "white",
                            textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
                            lineHeight: 1.3,
                            mb: 1,
                            ml:1,
                            fontSize:"22px",
                            
                        }}
                    >
                        SpanMünze einwerfen. <br />
                        Punkte sammeln. <br />
                        Gewinne aussuchen!
                    </Typography>

                    <Typography
                            variant="h6"
                            sx={{ color: "white", fontWeight: 300, mb: 1, ml:1.5, mt:2 , fontSize:"17px", lineHeight:1.3}}
                        >
                            Spiel mit, sammle Punkte<br/> und sichere dir deine <br />Wunschprämie!
                        </Typography>

                    {/* Joker — pushed to bottom */}
                    <Box sx={{ width: 210, height: "auto", mt: "auto" , ml: -8,      // 👈 move left (increase negative value to go more left)
    mb: -0.8, }}>
                        <Image
                            src="/shop1/joker-shop1.png"
                            alt="Joker Character"
                            width={110}
                            height={110}
                            style={{ width: "100%", height: "auto" }}
                            priority
                        />
                    </Box>
                </Box>
            </Box>
        </>
    );
}