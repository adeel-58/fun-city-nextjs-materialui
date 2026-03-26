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
                    height: {xl:"685px",lg:"100vh"},
                    alignItems: "center",
                    backgroundImage: `
                        linear-gradient(259deg, #4C1663 100%, #0F041400 10%),
                        url('/shop1/background.webp')
                    `,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    px: { xs: 2, md: 12 },
                    pt: 8,
                    pb: 0,
                }}
            >
                <Grid container spacing={8} alignItems="center" sx={{ width: "100%" }}>
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
                            Greif dein Glück!
                        </Typography>

                        <Typography variant="h6" sx={{ color: "white", fontWeight: 300, mb: 1 }}>
                            <span style={{fontWeight:"bold"}}>Tauche ein in Spielspaß und Spannung!</span><br />
                            Wirf eine Münze ein, bewege den Hebel und fang dein<br />
                            Kuscheltier. Jeder Versuch bringt Freude und die Chance<br />
                            auf einen plüschigen Gewinn
                        </Typography>

                        <Box sx={{ width: { xs: 100, sm: 130, md: 350 }, height: "auto", lineHeight: 0, mt: { xl: 15 }, }}>
                            <Image
                                src="/shop1/joker-shop1.webp"
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
                                    width: { xs: 220, sm: 300, md: 800, xl: 1050 },
                                    height: "auto",
                                    top: { md: "-30px", xl: "-90px" },
                                    left: { md: "300px", xl: "400px" },
                                    transform: "translate(-50%, -50%)",
                                }}
                            >
                                <Image
                                    src="/shop2/main-machine.webp"
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
            <Box
                sx={{
                    display: { xs: "flex", md: "none" },
                    height: "450px",
                    flexDirection: "column",
                    backgroundImage: `
                        linear-gradient(259deg, #4C1663 100%, #0F041400 10%),
                        url('/shop1/background.webp')
                    `,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    px: 2,
                    pt: 15,
                    pb: 0,
                    overflow: "hidden",
                    position: "relative",
                }}
            >
                {/* Machine Image — absolutely positioned behind everything */}
                <Box
                    sx={{
                        position: "absolute",
                        bottom: 40,
                        right: -120,
                        width: 500,
                        zIndex: 1,
                    }}
                >
                    <Image
                        src="/shop2/main-machine.webp"
                        alt="Arcade Machine"
                        width={400}
                        height={400}
                        style={{ width: "100%", height: "auto", display: "block", opacity: 0.5 }}
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
                            ml: 1,
                            fontSize: "22px",
                        }}
                    >
                        Greif dein Glück!
                    </Typography>

                    <Typography
                        variant="h6"
                        sx={{ color: "white", fontWeight: 300, mb: 1, ml: 1.5, mt: 2, fontSize: "17px", lineHeight: 1.3 }}
                    >
                        Tauche ein in Spielspaß<br /> und Spannung! Wirf eine<br />
                        Münze ein und fang dein<br /> Kuscheltier.
                    </Typography>

                    {/* Joker — pushed to bottom */}
                    <Box
                        sx={{
                            width: 210,
                            height: "auto",
                            mt: "auto",
                            ml: -8,
                            mb: -3,
                        }}
                    >
                        <Image
                            src="/shop1/joker-shop1.webp"
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