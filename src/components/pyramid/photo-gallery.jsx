"use client";
import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";

export default function PhotoGallerySection() {
    return (
        <Box
            sx={{
                position: "relative",
                bgcolor: "#2C3D29",
                color: "white",
                pt: 0,
                pb: 20,
                px: { xs: 2, md: 6 },
                overflow: "hidden",
                mb:0,
            }}
        >
            {/* Center Background Overlay */}
            <Box
                sx={{
                    position: "absolute",
                    top: "90%",
                    left: "25%",
                    transform: "translate(-50%, -50%)",
                    zIndex: 1,
                    width: { xs: 400, md: 640,lg:700 },
                    height: "auto",
                    opacity: 1,
                }}
            >
                <Image
                    src="/pyramid/lightening-overlay.png"
                    alt="Center Overlay"
                    width={600}
                    height={400}
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
                            ml: 2,
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

                {/* Main Gallery Container */}
                <Box sx={{ maxWidth: "1200px", margin: "0 auto", position: "relative" }}>
                    
                    {/* Large Left Image */}
                    <Box
                        sx={{
                            position: "absolute",
                            left: 0,
                            top: 0,
                            borderRadius: "20px",
                            overflow: "hidden",
                            width: "500px",
                            height: "650px",
                            zIndex: 3,
                        }}
                    >
                        <Image
                            src="/pyramid/gallary-image1.png"
                            alt="Gallery Image 1"
                            width={400}
                            height={550}
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                            }}
                        />
                    </Box>

                    {/* Right Side Images Container */}
                    <Box
                        sx={{
                            marginLeft: "50%", // Space for left image
                            display: "flex",
                            flexDirection: "column",
                            gap: 3.5,
                        }}
                    >
                        {/* Top Right Row - 2 Images */}
                        <Box
                            sx={{
                                display: "flex",
                                gap: 5,
                                marginBottom: 2,
                               
                            }}
                        >
                            <Box
                                sx={{
                                    borderRadius: "20px",
                                    overflow: "hidden",
                                    width: "300px",
                                    height: "430px",
                                }}
                            >
                                <Image
                                    src="/pyramid/gallary-image4.png"
                                    alt="Gallery Image 2"
                                    width={250}
                                    height={200}
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "cover",
                                    }}
                                />
                            </Box>

                            <Box
                                sx={{
                                    borderRadius: "20px",
                                    overflow: "hidden",
                                    width: "300px",
                                    height: "430px",
                                }}
                            >
                                <Image
                                    src="/pyramid/gallary-image3.png"
                                    alt="Gallery Image 3"
                                    width={250}
                                    height={200}
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "cover",
                                    }}
                                />
                            </Box>
                        </Box>

                        {/* Bottom Right - 1 Large Image */}
                        <Box
                            sx={{
                                borderRadius: "20px",
                                overflow: "hidden",
                                width: "600px", // Full width of the two images above + gap
                                height: "400px",
                            }}
                        >
                            <Image
                                src="/pyramid/gallary-image2.png"
                                alt="Gallery Image 4"
                                width={502}
                                height={320}
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                }}
                            />
                        </Box>
                    </Box>

                    {/* Mobile Layout - Stack vertically on small screens */}
                    <Box
                        sx={{
                            display: { xs: "block", md: "none" },
                            "& > *": { marginBottom: 2 }
                        }}
                    >
                        <Box
                            sx={{
                                borderRadius: "20px",
                                overflow: "hidden",
                                width: "100%",
                                height: "300px",
                            }}
                        >
                            <Image
                                src="/pyramid/gallary-image1.png"
                                alt="Gallery Image 1"
                                width={400}
                                height={300}
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                }}
                            />
                        </Box>

                        <Box
                            sx={{
                                borderRadius: "20px",
                                overflow: "hidden",
                                width: "100%",
                                height: "200px",
                            }}
                        >
                            <Image
                                src="//pyramid/gallary-image4.png"
                                alt="Gallery Image 2"
                                width={400}
                                height={200}
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                }}
                            />
                        </Box>

                        <Box
                            sx={{
                                borderRadius: "20px",
                                overflow: "hidden",
                                width: "100%",
                                height: "200px",
                            }}
                        >
                            <Image
                                src="//pyramid/gallary-image3.png"
                                alt="Gallery Image 3"
                                width={400}
                                height={200}
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                }}
                            />
                        </Box>

                        <Box
                            sx={{
                                borderRadius: "20px",
                                overflow: "hidden",
                                width: "100%",
                                height: "250px",
                            }}
                        >
                            <Image
                                src="/pyramid/gallary-image12.png"
                                alt="Gallery Image 4"
                                width={400}
                                height={250}
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                }}
                            />
                        </Box>
                    </Box>

                    {/* Hide desktop layout on mobile */}
                   <Box sx={{ display: { xs: "none", md: "block" } }} />
                </Box>
            </Box>
        </Box>
    );
}