"use client";
import { Box, Typography, Container, Button } from "@mui/material";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Shop2section() {
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
                backgroundImage: "url('/homepage/shop2-background.webp')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
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
                        gap: 8,
                        alignItems: "center",
                        flexDirection: { xs: "column", md: "row" },
                    }}
                >
                    {/* Left side - Machine Image */}
                    <Box sx={{ flex: 1, pt: 4, pb: 4, ml: -4 }}>
                        <Image
                            src="/homepage/machine-image.webp" // Replace with your machine image
                            alt="Game Machine"
                            width={400}
                            height={500}
                            style={{
                                objectFit: "contain",
                                borderRadius: "20px",
                                width: "100%",
                                height: "auto",
                            }}
                        />
                    </Box>

                    {/* Right side - Content */}
                    {/* Right side - Content */}
                    <Box sx={{ flex: 1, position: "relative" }}>
                        {/* Teddy bear image fixed to top-right */}
                        <Image
                            src="/homepage/teddy-bear.webp"
                            alt="Teddy Bear"
                            width={550}
                            height={550}
                            style={{
                                position: "absolute",
                                top: -200,       // adjust to move it a bit above content
                                right: -80,     // adjust to move it into the corner
                                objectFit: "contain",
                                zIndex: 0,      // behind the text
                                pointerEvents: "none", // avoid blocking button clicks
                            }}
                        />

                        {/* Heading */}
                        <Typography
                            variant="h3"
                            sx={{
                                fontWeight: "bold",
                                mt: 28,
                                mb: 3,
                                fontSize: { xs: "2rem", md: "2.5rem" },
                                position: "relative",
                                zIndex: 1, // keeps text above teddy
                            }}
                        >
                            Greif dein Glück!
                        </Typography>

                        {/* Paragraph */}
                        <Typography
                            variant="body1"
                            sx={{
                                fontSize: "16px",
                                lineHeight: 1.6,
                                mb: 4,
                                opacity: 0.9,
                                position: "relative",
                                zIndex: 1,
                            }}
                        >
                            Der zweite Automat ist der Greifautomat mit Plüschtieren. Du wirfst eine Münze ein, steuerst die Klaue und versuchst, ein Kuscheltier zu fangen. Spaß und Spannung bei jedem Versuch – und die Freude ist riesig, wenn es klappt
                        </Typography>

                        {/* Button sliding from right */}
                        <Box ref={buttonRef} textAlign="right" sx={{ position: "relative", zIndex: 1 }}>
                            <Button
                                variant="contained"
                                sx={{
                                    position: "relative",
                                    bgcolor: "white",
                                    color: "#5C026B",
                                    fontWeight: "bold",
                                    px: 37,
                                    py: 3,
                                    borderRadius: "40px 0 0 40px",
                                    textTransform: "none",
                                    overflow: "hidden",
                                    zIndex: 1,
                                    mr: -15,
                                    transform: isButtonVisible ? "translateX(0)" : "translateX(100%)",
                                    transition: "transform 0.6s ease-out",
                                         justifyContent: "flex-start",
                                          pl: 5,   // 🔹 small left padding so text hugs left corner
                                          pr: 69,  // 🔹 keep right padding big so button remains wide
                                }}
                            >
                                SEE SHOP 2
                            </Button>
                        </Box>
                    </Box>
                    {/* Button sliding from right */}


                </Box>
            </Container>
        </Box>
    );
}