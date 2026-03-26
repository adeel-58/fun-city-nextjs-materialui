"use client";
import { Box, Grid, Typography, Card, CardContent } from "@mui/material";
import Image from "next/image";

export default function HowItWorksSection() {
    const steps = [
        {
            title: "Münze einwerfen",
            text: "Wirf eine oder mehrere glänzende Münzen in den Automaten.",
            coin: "/shop1/small-coin-1.webp",
        },
        {
            title: "Spielen & Punkte sammeln",
            text: "Spiele das Spiel und sammele automatisch verdiente Punkte.",
            coin: "/shop1/small-coin-2.webp",
        },
        {
            title: "Punkte speichern",
            text: "Sichere Punkte in deinem Spieler-Konto (gespeichert durch die App).",
            coin: "/shop1/small-coin-3.webp",
        },
        {
            title: "Prämien auswählen",
            text: "Tausche deine gespeicherten Punkte gegen großartige Prämien deiner Wahl.",
            coin: "/shop1/small-coin-4.webp",
        },
    ];

    const images = [
        "/shop1/image2-shop1.webp",
        "/shop1/image3-shop1.webp",
        "/shop1/image4-shop1.webp",
    ];

    return (
        <Box
            sx={{
                position: "relative",
                bgcolor: "#121214",
                color: "white",
                pt: { xs: 8, md: 18 },
                pb: { xs: 10, md: 18 },
                px: { xs: 0, md: 8 },
            }}
        >
            {/* ── MOBILE LAYOUT ── */}
            <Box sx={{ display: { xs: "flex", md: "none" }, flexDirection: "column", alignItems: "center" }}>

                {/* 1. Heading */}
                <Typography variant="h4" sx={{ fontSize: "1.8rem", fontWeight: "bold", textAlign: "center", mb: 5, px: 2 }}>
                    Wie es funktioniert ?
                </Typography>

                {/* 2. First image — full width */}
                <Box sx={{ width: "100%", px: 3, mb: 2 }}>
                    <Box sx={{ borderRadius: "15px", overflow: "hidden" }}>
                        <Image
                            src={images[0]}
                            alt="Step 1"
                            width={400}
                            height={500}
                            style={{ width: "100%", height: "200px", objectFit: "cover", display: "block" }}
                        />
                    </Box>
                </Box>

                {/* 3. Two images side by side */}
                <Box sx={{ width: "100%", px: 3, mb: 6, display: "flex", gap: 2 }}>
                    {[images[1], images[2]].map((src, i) => (
                        <Box key={i} sx={{ flex: 1, borderRadius: "8px", overflow: "hidden" }}>
                            <Image
                                src={src}
                                alt={`Step ${i + 2}`}
                                width={200}
                                height={130}
                                style={{ width: "100%", height: "auto", display: "block" }}
                            />
                        </Box>
                    ))}
                </Box>

                {/* 4. Coin cards — 2x2 grid */}
                {/* 4. Coin cards — same as desktop */}
                <Grid container spacing={4} justifyContent="center" sx={{ px: 2 }}>
                    {steps.map((step, i) => (
                        <Grid item xs={6} sm={3} key={i}>
                            <Card
                                sx={{
                                    bgcolor: "#28272D",
                                    color: "white",
                                    borderRadius: "28px",
                                    textAlign: "left",
                                    position: "relative",
                                    height: "125px",
                                    p: 1,
                                    maxWidth: "340px",
                                    zIndex: 1,
                                    overflow: "visible",
                                }}
                            >
                                <CardContent sx={{ p: 1, "&:last-child": { pb: 1 } }}>
                                    <Typography variant="subtitle2" sx={{ fontWeight: "bold", mb: 0.5, fontSize: "19px" }}>
                                        {step.title}
                                    </Typography>
                                    <Typography variant="caption" sx={{ opacity: 0.9, fontSize: "12px", lineHeight: 1.3 }}>
                                        {step.text}
                                    </Typography>
                                </CardContent>

                                <Box
                                    sx={{
                                        position: "absolute",
                                        zIndex: 55,
                                        ...(i === 0 && { top: "85px", right: "-15px", width: "50px" }),
                                        ...(i === 1 && { bottom: "90px", right: "20%", width: "70px" }),
                                        ...(i === 2 && { top: "70%", left: "-20px", width: "70px" }),
                                        ...(i === 3 && { bottom: "65px", left: "80%", width: "80px" }),
                                    }}
                                >
                                    <Image src={step.coin} alt="Coin" width={50} height={50} style={{ width: "100%", height: "auto" }} />
                                </Box>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>

            {/* ── DESKTOP LAYOUT (original) ── */}
            <Box sx={{ display: { xs: "none", md: "block" } }}>

                {/* Heading */}
                <Box textAlign="center" mb={4}>
                    <Typography variant="h4" sx={{ fontWeight: "bold", mb: 4,fontSize:"2.2rem" }}>
                        Wie es funktioniert ?
                    </Typography>
                   <Box
  sx={{
    width: "100%",
    height: "6px",
    background: "linear-gradient(90deg, #666666 0%, #666666 25%, #690580 25%, #690580 50%, #666666 50%, #666666 100%)",
    mx: "auto",
    borderRadius: "2px",
    mb:8,
  }}
/>
                </Box>

                {/* 3 Images in a Row */}
                <Grid container spacing={3.5} justifyContent="center" mb={12}>
                    {images.map((src, i) => (
                        <Grid item xs={4} md={2} key={i}>
                            <Box sx={{ borderRadius: "8px", overflow: "hidden", maxWidth: "390px" }}>
                                <Image
                                    src={src}
                                    alt={`Step ${i + 1}`}
                                    width={200}
                                    height={120}
                                    style={{ width: "100%", height: "auto" }}
                                />
                            </Box>
                        </Grid>
                    ))}
                </Grid>

                {/* 4 Step Cards */}
                <Grid container spacing={4} justifyContent="center">
                    {steps.map((step, i) => (
                        <Grid item xs={6} sm={3} md={3} key={i}>
                            <Card
                                sx={{
                                    bgcolor: "#28272D",
                                    color: "white",
                                    borderRadius: "28px",
                                    textAlign: "left",
                                    position: "relative",
                                    height: "125px",
                                    p: 1,
                                    maxWidth: "280px",
                                    zIndex: 1,
                                    overflow: "visible",
                                }}
                            >
                                <CardContent sx={{ p: 1, "&:last-child": { pb: 1 } }}>
                                    <Typography variant="subtitle2" sx={{ fontWeight: "bold", mb: 0.5, fontSize: "19px" }}>
                                        {step.title}
                                    </Typography>
                                    <Typography variant="caption" sx={{ opacity: 0.9, fontSize: "12px", lineHeight: 1.3 }}>
                                        {step.text}
                                    </Typography>
                                </CardContent>

                                <Box
                                    sx={{
                                        position: "absolute",
                                        zIndex: 55,
                                        ...(i === 0 && { top: "85px", right: "-15px", width: "70px" }),
                                        ...(i === 1 && { bottom: "90px", right: "20%", width: "70px" }),
                                        ...(i === 2 && { top: "70%", left: "-20px", width: "70px" }),
                                        ...(i === 3 && { bottom: "65px", left: "80%", width: "80px" }),
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
        </Box>
    );
}