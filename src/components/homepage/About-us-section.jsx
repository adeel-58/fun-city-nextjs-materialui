"use client";
import { Box, Typography, Container, Button } from "@mui/material";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function AboutUsSection() {
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
        bgcolor: "#121214", // dark background
        color: "white",
        py: 8,
        overflow: "hidden",
      }}
    >
      {/* Background overlay objects */}
      <Image
        src="/homepage/overlay-object.webp"
        alt="overlay"
        width={450}
        height={450}
        style={{
          position: "absolute",
          top: 20,
          left: -20,
          opacity: 0.9,
            zIndex: 0, 
        }}
      />
      <Image
        src="/homepage/overlay-object2.webp"
        alt="overlay"
        width={500}
        height={500}
        style={{
          position: "absolute",
          bottom: -100,
          right: 120,
          opacity: 1,
          zIndex: 0,
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        {/* Heading */}
         <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mb: 6,
          }}
        >
          <Image
            src="/homepage/about-us.webp"
            alt="About Us"
            width={200}
            height={80}
            style={{
              objectFit: "contain",
            }}
          />
        </Box>

        {/* Two text blocks side by side using Flexbox */}
        <Box
          sx={{
            display: "flex",
            gap: 15, // spacing between items
            mb: 6,
            flexDirection: { xs: "column", md: "row" }, // responsive: column on mobile, row on desktop
            alignItems: "stretch", // make both items same height
            justifyContent: "center",
            ml: "auto", // pushes to the right
    mr: "auto", // keeps centered
    width: "100%", // adjust to control how far from edges
          }}
        >
          {/* Left column */}
          <Box sx={{ flex: 1 }}>
            <Typography
              variant="body1"
              sx={{ fontSize: "16px", lineHeight: 1.4, fontWeight:"bold", width:"100%"}}
            >
              Wir betreiben drei einzigartige Spiel- und Unterhaltungsshops, die für Spaß, Spannung und unvergessliche Momente sorgen. Jeder unserer Shops bietet ein besonderes Erlebnis – und gemeinsam machen sie den Besuch bei uns zu etwas Besonderem.
            </Typography>
          </Box>

          {/* Right column */}
          <Box sx={{ flex: 1 }}>
            <Typography
              variant="body1"
              sx={{ fontSize: "16px", lineHeight: 1.4,width:"100%" }}
            >
              Unser Hauptgeschäft ist der Automatenshop: Du wirfst Münzen ein, sammelst Punkte und tauschst sie gegen tolle Preise ein. Hier beginnt der Spaß – mit jeder Runde eine neue Chance auf deine Wunschbelohnung!
            </Typography>
          </Box>
        </Box>

        {/* Central container with overlay image */}
       <Box
          sx={{
            bgcolor: "#5C026B",
            position: "relative",
            borderRadius: "45px",
            height: 350,
            width: 900,
            mx: "auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mb: 6,
          }}
        >
          <Image
            src="/homepage/team-photo.webp"
            alt="Team"
            width={850}
            height={380}
            style={{
              position: "absolute",
              bottom: -60,
              objectFit: "cover",
              borderRadius: "12px",
              
            }}
          />
          
          {/* Coins image in bottom right corner */}
          <Image
            src="/homepage/coins.webp"
            alt="Coins"
            width={330}
            height={330}
            style={{
              position: "absolute",
              bottom: -230,
              right: -170,
              objectFit: "contain",
              zIndex: 2,
            }}
          />
        </Box>

        {/* Button on left side with scroll animation */}
        <Box 
          ref={buttonRef}
          textAlign="left" 
          sx={{ mt: 13 }}
        >
          <Button
            variant="contained"
            sx={{
              position: "relative",
              bgcolor: "#5C026B",
              color: "white",
              fontWeight: "bold",
              px: 15,
              py: 3,
              borderRadius: "0 40px 40px 0", // only top-right and bottom-right corners rounded
              textTransform: "none",
              overflow: "hidden",
              zIndex: 1,
              ml: -15, // negative margin to attach to left edge of container
              transform: isButtonVisible ? "translateX(0)" : "translateX(-100%)",
              transition: "transform 0.6s ease-out",
            }}
          >
            SEE SHOP 1
          </Button>
        </Box>
      </Container>
    </Box>
  );
}