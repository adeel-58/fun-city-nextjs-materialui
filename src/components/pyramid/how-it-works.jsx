"use client";
import { Box, Grid, Typography, Card, CardContent } from "@mui/material";
import Image from "next/image";

export default function HowItWorksSection() {
    return (
        <Box
            sx={{
                position: "relative",
                bgcolor: "#2C3D29",
                color: "white",
                pt: 23,
                pb: 18,
                px: { xs: 0, md: 8 },
            }}
        >

            {/* Top Right Overlay */}
            <Box
                sx={{
                    position: "absolute",
                    top: -20,
                    right: 0,
                    zIndex: 0,
                    pointerEvents: "none", // so it doesn't block clicks
                }}
            >
                <Image
                    src="/pyramid/lightings.png"
                    alt="Lightning"
                    width={300}
                    height={300}
                    style={{
                        width: "300px",
                        height: "auto",
                    }}
                />
            </Box>
            {/* Heading */}
            <Box textAlign="center" mb={4}>
                <Typography variant="h4" sx={{ fontWeight: "bold", mb: 4 }}>
                    Wie es funktioniert ?
                </Typography>
                <Box
                    sx={{
                        width: "100%",
                        height: "6px",
                        background: "linear-gradient(90deg, #666666 0%, #8E4EC4 50%, #666666 100%)",
                        mx: "auto",
                        borderRadius: "2px",
                        mb: 8,
                    }}
                />
            </Box>

            {/* 3 Images in a Row - Made Smaller */}
            <Grid container spacing={3.5} justifyContent="center" mb={12}>
                {["/pyramid/image4-pyramid.png", "pyramid/image2-pyramid.png", "pyramid/image3-pyramid.png"].map(
                    (src, i) => (
                        <Grid item xs={4} md={2} key={i}> {/* Changed to xs=4, md=2 for smaller size */}
                            <Box
                                sx={{
                                    borderRadius: "8px",
                                    overflow: "hidden",
                                    // boxShadow: "0 4px 20px rgba(0,0,0,0.4)",
                                    maxWidth: "390px",
                                }}
                            >
                                <Image
                                    src={src}
                                    alt={`Step ${i + 1}`}
                                    width={200} // Reduced width
                                    height={120} // Reduced height
                                    style={{ width: "100%", height: "auto" }}
                                />
                            </Box>
                        </Grid>
                    )
                )}
            </Grid>

            {/* 4 Steps with Coins - Made Smaller and in One Row */}
            <Grid container spacing={4} justifyContent="center"> {/* Reduced spacing */}
                {[
                    {
                        title: "Münze einwerfen",
                        text: "Wirf eine oder mehrere Münzen in den Automaten.",
                        coin: "/pyramid/small-coin-1.png",
                    },
                    {
                        title: "Spielen & Punkte sammeln",
                        text: "Spiele das Spiel und sammele automatisch verdiente Punkte.",
                        coin: "/pyramid/small-coin-2.png",
                    },
                    {
                        title: "Punkte speichern",
                        text: "Sichere Punkte in deinem Spieler-Konto (gespeichert durch die App).",
                        coin: "/pyramid/small-coin-2.png",
                    },
                    {
                        title: "Prämien auswählen",
                        text: "Tausche deine gespeicherten Punkte gegen großartige Prämien deiner Wahl.",
                        coin: "/pyramid/small-coin-3.png",
                    },
                ].map((step, i) => (
                    <Grid item xs={6} sm={3} md={3} key={i}>
                        <Card
                            sx={{
                                bgcolor: "#81081A",
                                color: "white",
                                borderRadius: "28px",
                                textAlign: "left",
                                position: "relative",
                                height: "125px",
                                p: 1,
                                maxWidth: "280px",
                                zIndex: 1, // card is lower
                                overflow: "visible",

                            }}
                        >
                            <CardContent sx={{
                                p: 1,
                                "&:last-child": { pb: 1 },
                                height: "100%",
                                display: "flex",
                                alignItems: "center",   // vertical center
                                justifyContent: "center", // horizontal center (optional)
                                textAlign: "center",
                            }}>

                                <Typography
                                    variant="caption"
                                    sx={{ opacity: 0.9, fontSize: "12px", lineHeight: 1.3, }}
                                >
                                    {step.text}
                                </Typography>
                            </CardContent>

                            {/* Coin overlay - different positions per card */}
                            <Box
                                sx={{
                                    position: "absolute",
                                    zIndex: 55, // ensure coin is above card
                                    ...(i === 0 && { top: "-45px", right: "200px", width: "120px" }),
                                    ...(i === 1 && { bottom: "50px", right: "20%", width: "90px" }),
                                    ...(i === 2 && { top: "70%", left: "-50px", width: "120px" }),
                                    ...(i === 3 && { bottom: "75px", left: "-20%", width: "130px" }),
                                }}
                            >
                                <Image
                                    src={step.coin}
                                    alt="Coin"
                                    width={50}
                                    height={50}
                                    style={{ width: "100%", height: "auto" }}
                                />
                            </Box>
                        </Card>
                    </Grid>
                ))}




            </Grid>
        </Box>
    );
}