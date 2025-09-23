"use client";
import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";

export default function PhotoGallerySection() {
    return (
        <Box
            sx={{
                position: "relative",
                bgcolor: "#121214",
                color: "white",
                pt: 0,
                pb:5,
                px: { xs: 2, md: 6 },
                overflow: "hidden",
            }}
        >
            {/* Center Background Overlay */}
            <Box
                sx={{
                    position: "absolute",
                    top: "60%",
                    left: "40%",
                    transform: "translate(-50%, -50%)",
                    zIndex: 1,
                    width: { xs: 400, md: 600 },
                    height: "auto",
                    opacity: 1,
                }}
            >
                <Image
                    src="/shop1/overlay2-shop1.webp"
                    alt="Center Overlay"
                    width={600}
                    height={400}
                    style={{ width: "100%", height: "auto" }}
                />
            </Box>

            {/* Bottom Right Coin Overlay */}
            <Box
                sx={{
                    position: "absolute",
                    bottom: "25px",
                    right: "180px",
                    zIndex: 2,
                    width: { xs: 120, md: 500 },
                    height: "auto",
                }}
            >
                <Image
                    src="/shop1/big-coin.webp"
                    alt="Coin Overlay"
                    width={180}
                    height={180}
                    style={{ width: "100%", height: "auto" }}
                />
            </Box>

            {/* Content - Higher z-index */}
            <Box sx={{ position: "relative", zIndex: 10 }}>
                {/* Heading */}
                <Box mb={4}>
                    <Typography
                        variant="h4"
                        sx={{
                            fontWeight: "bold",
                            mb: 4,
                            ml:2,
                            fontSize: { xs: "1.8rem", md: "2.5rem" }
                        }}
                    >
                        Fotogalerie
                    </Typography>

                    {/* Thin Line */}
                     <Box
                    sx={{
                        width: "97.5%",
                        height: "6px",
                        background: "linear-gradient(90deg, #666666 0%, #8E4EC4 50%, #666666 100%)",
                        mx: "auto",
                        borderRadius: "2px",
                        mb: 8,
                    }}
                />
                </Box>

                {/* Container to control overall layout */}
                <Box sx={{ maxWidth: "1200px", margin: "0 auto" }}>

                    {/* First Row - 3 Images Centered */}
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            gap: 0.5,
                            mb: 4,
                            flexWrap: { xs: "wrap", md: "nowrap" },
                        }}
                    >
                        <Box
                            sx={{
                                borderRadius: "50px",
                                overflow: "hidden",

                                width: { xs: "100%", md: "420px" }, // box size
                                height: "500px", // fixed height
                                flexShrink: 0,
                            }}
                        >
                            <Image
                                src="/shop1/image5-shop1.png"
                                alt="Gallery Image 3"
                                width={350}
                                height={400}
                                style={{
                                    width: "100%",
                                    height: "100%", // let it fill the box
                                    objectFit: "cover", // fills and crops instead of shrinking
                                }}
                            />
                        </Box>


                        <Box
                            sx={{
                                borderRadius: "50px",
                                overflow: "hidden",

                                width: { xs: "100%", md: "420px" }, // box size
                                height: "500px", // fixed height
                                flexShrink: 0,
                            }}
                        >
                            <Image
                                src="/shop1/image6-shop1.webp"
                                alt="Gallery Image 3"
                                width={350}
                                height={400}
                                style={{
                                    width: "100%",
                                    height: "100%", // let it fill the box
                                    objectFit: "cover", // fills and crops instead of shrinking
                                }}
                            />
                        </Box>

                        <Box
                            sx={{
                                borderRadius: "50px",
                                overflow: "hidden",

                                width: { xs: "100%", md: "420px" }, // box size
                                height: "500px", // fixed height
                                flexShrink: 0,
                            }}
                        >
                            <Image
                                src="/shop1/image7-shop1.webp"
                                alt="Gallery Image 3"
                                width={350}
                                height={400}
                                style={{
                                    width: "100%",
                                    height: "100%", // let it fill the box
                                    objectFit: "cover", // fills and crops instead of shrinking
                                }}
                            />
                        </Box>

                    </Box>

                    {/* Second Row - 1 Image (Left Side) */}
                    <Box
                        sx={{




                            //ml: 15,


                            ml:-4.5,
                            borderRadius: "50px",
                            overflow: "hidden",

                            width: { xs: "100%", md: "420px" }, // box size
                            height: "500px", // fixed height
                            flexShrink: 0,

                        }}
                    >
                        <Image
                             src="/shop1/image8-shop1.webp"
                                alt="Gallery Image 3"
                                width={350}
                                height={400}
                                style={{
                                    width: "100%",
                                    height: "100%", // let it fill the box
                                    objectFit: "cover", // fills and crops instead of shrinking
                                }}
                        />
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}