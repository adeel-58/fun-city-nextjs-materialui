"use client";
import { Box, Typography, Container, Button } from "@mui/material";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
export default function Shop3section() {
    const [isButtonVisible, setIsButtonVisible] = useState(false);
    const buttonRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsButtonVisible(true);
                }
            },
            { threshold: 0.3 }
        );

        if (buttonRef.current) {
            observer.observe(buttonRef.current);
        }

        return () => {
            if (buttonRef.current) {
                observer.unobserve(buttonRef.current);
            }
        };
    }, []);

    return (
        <Box
            component="section"
            sx={{
                position: "relative",
                bgcolor: "#121214",
                color: "white",
                py: { lg: 8, xl: 8, sm: 0 },

                overflow: "hidden",
            }}
        >
            {/* ───────────── MOBILE VERSION ───────────── */}
            <Box sx={{ display: { xs: "block", md: "none" }, pt: 8 }}>
                <Container maxWidth="sm" sx={{ position: "relative", zIndex: 1 }}>
                    <Typography
                        sx={{
                            fontSize: "30px",
                            fontWeight: "bold",
                            mb: 6,
                            textAlign: "center",
                        }}
                    >
                        Die <br />Winterpyramide
                    </Typography>
                </Container>

                {/* Outer wrapper for padding */}
                <Box sx={{ px: 6 }}>
                    {/* Image + coffee cup overlay wrapper */}
                    <Box
                        sx={{
                            position: "relative",
                            width: "100%",
                            height: 280,
                            mb: 4,
                        }}
                    >
                        {/* Image with border radius - its own overflow hidden */}
                        <Box
                            sx={{
                                position: "absolute",
                                inset: 0,
                                borderRadius: "50px",
                                overflow: "hidden",
                            }}
                        >
                            <Image
                                src="/homepage/shop3-image.webp"
                                alt="Shop 3"
                                fill
                                style={{ objectFit: "cover" }}
                            />
                        </Box>

                        {/* Coffee cup - outside overflow:hidden, renders on top of everything */}
                        <Box
                            sx={{
                                position: "absolute",
                                bottom: -70,
                                left: -80,
                                zIndex: 10,
                            }}
                        >
                            <Image
                                src="/homepage/coffee-cup.webp"
                                alt="Coffee Cup"
                                width={200}
                                height={200}
                                style={{ objectFit: "contain" }}
                            />
                        </Box>
                    </Box>
                </Box>

                <Container maxWidth="sm" sx={{ position: "relative", zIndex: 1 }}>
                    <Typography
                        sx={{
                            fontSize: "16px",
                            lineHeight: 1.6,
                            mb: 4,
                            opacity: 0.9,
                            textAlign: "center",
                            mt: 8,
                        }}
                    >
                        Unsere „Pyramide" ist der perfekte Ort für<br /> kalte Winterabende. Auf
                        festlich<br /> beleuchteten Etagen erwarten dich<br /> Glühwein, heiße
                        Schokolade, warmer<br /> Fruchtsaft und viele weitere saisonale<br />
                        Spezialitäten. Die festliche Stimmung<br /> und die Wärme der Getränke
                        machen<br /> jeden Besuch zu einem magischen<br /> Erlebnis.
                    </Typography>

                    <Box textAlign="center">
                        <Button
                            component={Link}
                            href="/pyramid"
                            variant="contained"
                            sx={{
                                bgcolor: "#5C026B",
                                color: "white",
                                fontWeight: "bold",
                                py: 2,
                                px: 6,
                                borderRadius: "40px",
                                textTransform: "none",
                            }}
                        >
                            SEE PYRAMID
                        </Button>
                    </Box>

                    {/* Divider */}

                </Container>
                <Box
                    sx={{
                        width: "200%",
                        height: "1px",
                        bgcolor: "white",
                        opacity: 0.5,
                        //mx: "auto",
                        mt: 7,
                    }}
                />
            </Box>

            {/* ───────────── DESKTOP VERSION ───────────── */}
            <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1, display: { xs: "none", md: "block" } }}>
                <Box
                    sx={{
                        display: "flex",
                        gap: 10,
                        alignItems: "center",
                        flexDirection: "row",
                    }}
                >
                    {/* Left side - Content */}
                    <Box sx={{ flex: 1, position: "relative", ml: -6 }}>
                        <Typography
                            variant="h3"
                            sx={{
                                fontWeight: "bold",
                                mt: -1,
                                mb: 5,
                                fontSize: { xs: "2rem", md: "2.5rem" },
                            }}
                        >
                            Die Winterpyramide
                        </Typography>

                        <Typography
                            variant="body1"
                            sx={{
                                fontSize: "15px",
                                lineHeight: 1.4,
                                mb: 21,
                                opacity: 0.9,
                            }}
                        >
                            Unsere „Pyramide" ist der perfekte Ort für kalte Winterabende. Auf
                            festlich beleuchteten Etagen erwarten dich Gluhwein, heiße
                            Schokolade, warmer Fruchtsaft und viele weitere saisonale
                            Spezialitaten. Die festliche Stimmung und die Warme der Getränke
                            machen jeden Besuch zu einem magischen Erlebnis.
                        </Typography>

                        <Box ref={buttonRef} textAlign="left">
                            <Button
                                component={Link}
                                href="/pyramid"
                                variant="contained"
                                sx={{
                                    position: "relative",
                                    bgcolor: "#5C026B",
                                    color: "white",
                                    fontWeight: "bold",
                                    px: 23,
                                    py: 3,
                                    borderRadius: "0 40px 40px 0",
                                    textTransform: "none",
                                    overflow: "hidden",
                                    zIndex: 1,
                                    ml: -15,
                                    transform: isButtonVisible ? "translateX(0)" : "translateX(-100%)",
                                    transition: "transform 0.6s ease-out",

                                    ml: {
                                        // normal desktop
                                        lg: -12,   // large desktop
                                        xl: -20,   // 1920px+
                                    },
                                }}
                            >
                                SEE SHOP 3
                            </Button>
                        </Box>
                    </Box>

                    {/* Right side - Machine Image */}
                    <Box
                        sx={{
                            flex: 1.5,
                            pt: 4,
                            pb: 4,
                            mr: -30,
                            position: "relative",
                        }}
                    >
                        <Image
                            src="/homepage/shop3-image.webp"
                            alt="Shop 3 Machine"
                            width={1000}
                            height={400}
                            style={{
                                objectFit: "cover",
                                borderRadius: "40px 0 0 40px",
                                width: "100%",
                                height: "430px",
                            }}
                        />

                        {/* Coffee Cup - bottom left */}
                        <Box
                            sx={{
                                position: "absolute",
                                bottom: -110,
                                left: -220,
                                p: 2,
                            }}
                        >
                            <Image
                                src="/homepage/coffee-cup.webp"
                                alt="Coffee Cup"
                                width={400}
                                height={400}
                                style={{ objectFit: "contain" }}
                            />
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}