"use client";
import { Box, Typography, Container, Button } from "@mui/material";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

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
            { threshold: 0.3 } // Trigger when 30% of the element is visible
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
                py: 8,
                overflow: "hidden",
            }}
        >
            <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
                {/* Main content container */}
                <Box
                    sx={{
                        display: "flex",
                        gap: 10,
                        alignItems: "center",
                        flexDirection: { xs: "column", md: "row" },
                    }}
                >
                    {/* Left side - Content */}
                    <Box sx={{ flex: 1, position: "relative", ml:-6,}}>
                        {/* Heading */}
                        <Typography
                            variant="h3"
                            sx={{
                                fontWeight: "bold",
                                mt: 10,
                                mb: 5,
                                fontSize: { xs: "2rem", md: "2.5rem" },
                            }}
                        >
                            Die Winterpyramide
                        </Typography>

                        {/* Paragraph */}
                        <Typography
                            variant="body1"
                            sx={{
                                fontSize: "15px",
                                lineHeight: 1.4,
                                mb: 10,
                                opacity: 0.9,
                            }}
                        >
                            Unsere „Pyramide“ ist der perfekte Ort für kalte Winterabende. Auf
                            festlich beleuchteten Etagen erwarten dich Gluhwein, heiße
                            Schokolade, warmer Fruchtsaft und viele weitere saisonale
                            Spezialitaten. Die festliche Stimmung und die Warme der Getränke
                            machen jeden Besuch zu einem magischen Erlebnis.
                        </Typography>

                        {/* Button sliding from left */}
                        <Box
                            ref={buttonRef}
                            textAlign="left"
                        >
                            <Button
                                variant="contained"
                                sx={{
                                    position: "relative",
                                    bgcolor: "#5C026B",
                                    color: "white",
                                    fontWeight: "bold",
                                    px: 26,
                                    py: 3,
                                    borderRadius: "0 40px 40px 0", // only top-right and bottom-right corners rounded
                                    textTransform: "none",
                                    overflow: "hidden",
                                    zIndex: 1,
                                    ml: -15, // negative margin to attach to left edge
                                    transform: isButtonVisible ? "translateX(0)" : "translateX(-100%)",
                                    transition: "transform 0.6s ease-out",
                                }}
                            >
                                SEE SHOP 3
                            </Button>
                        </Box>
                    </Box>

                    {/* Right side - Machine Image */}
                    {/* Right side - Machine Image */}
                    <Box
                        sx={{
                            flex: 1.5,
                            pt: 4,
                            pb: 4,
                            mr: -15,
                            position: "relative" // ✅ make this relative so children can be absolutely placed
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
                                p: 2, // small padding from edges
                            }}
                        >
                            <Image
                                src="/homepage/coffee-cup.webp"
                                alt="Coffee Cup"
                                width={400}   // adjust size
                                height={400}
                                style={{
                                    objectFit: "contain",
                                }}
                            />
                        </Box>
                    </Box>


                </Box>
            </Container>
        </Box>
    );
}