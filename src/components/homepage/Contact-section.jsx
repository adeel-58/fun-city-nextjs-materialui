"use client";
import { Box, Typography, Container, TextField, Button } from "@mui/material";
import Image from "next/image";
import { useState } from "react";

export default function Contactsection() {
  const [formData, setFormData] = useState({
    email: "",
    message: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        bgcolor: "#121214",
        color: "white",
        py: 8,
        overflow: "hidden",
        minHeight: "100vh",
        
      }}
    >
      {/* Background overlay image */}
      <Image
        src="/homepage/contact-us-overlay.webp"
        alt="overlay"
        width={650}
        height={650}
        style={{
          position: "absolute",
          bottom: -20,
          left: "26%",
          transform: "translateX(-50%)",
          opacity: 1,
          zIndex: 0,
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        {/* Contact heading with underline */}
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: "bold",
              mb: 3.3,
              fontFamily:"Poppins",
              mt:10,
              fontSize: { xs: "2.5rem", md: "37px" },
            }}
          >
            Contact
          </Typography>
          {/* Gradient underline */}
          <Box
            sx={{
              width: "100%",
              height: "6px",
              background: "linear-gradient(90deg, #666666 0%, #8E4EC4 50%, #666666 100%)",
              mx: "auto",
              borderRadius: "2px",
            }}
          />
        </Box>

        {/* Main content container */}
        <Box
          sx={{
            display: "flex",
            gap: 8,
            alignItems: "flex-start",
            flexDirection: { xs: "column", md: "row" },
            mt: 18,
            mb:20,
          }}
        >
          {/* Left side - Phone image with coins */}
          <Box sx={{ flex: 1, position: "relative" }}>
            {/* Phone container */}
            <Box
              sx={{
                bgcolor: "#8E4EC4",
                borderRadius: "30px",
                width: "320px",
                height: "320px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                mx: { xs: "auto", md: 3 },
              }}
            >
              <Image
                src="/homepage/contact-us.webp"
                alt="Contact Phone"
                width={500}
                height={500}
                style={{
                  objectFit: "contain",
                }}
              />
            </Box>

            {/* Coins decoration */}
            <Image
              src="/homepage/contact-us-coins.webp"
              alt="Coins"
              width={120}
              height={120}
              style={{
                position: "absolute",
                bottom: -110,
                right: 60,
                objectFit: "contain",
                zIndex: 2,
              }}
            />
          </Box>

          {/* Right side - Contact form */}
         
<Box sx={{ flex: 1, maxWidth: "550px" }}>
  <form onSubmit={handleSubmit}>
    {/* First Name and Last Name fields in a row */}
    <Box
      sx={{
        display: "flex",
        mt:-4,
        gap: 5,
        mb: 5,
        flexDirection: { xs: "column", sm: "row" },
      }}
    >
      <TextField
        fullWidth
        name="firstName"
        label="VORNAME"
        size="small"
        value={formData.firstName}
        onChange={handleInputChange}
        InputLabelProps={{ style: { color: "rgba(255, 255, 255, 0.56)",fontSize: "15px", padding: "0px 12px" } }}
        sx={{
          "& .MuiOutlinedInput-root": {
            bgcolor: "#690580",
            borderRadius: "30px",
        
            color: "white",
            "& fieldset": { border: "none" },
          },
        }}
      />
      <TextField
        fullWidth
        name="lastName"
        label="NACHNAME"
        size="small"
        value={formData.lastName}
        onChange={handleInputChange}
        InputLabelProps={{  style: { color: "rgba(255, 255, 255, 0.56)",fontSize: "15px", padding: "0px 12px"} }}
        sx={{
          "& .MuiOutlinedInput-root": {
            bgcolor: "#690580",
            borderRadius: "30px",
            color: "white",
            "& fieldset": { border: "none" },
          },
        }}
      />
    </Box>

    {/* Email field */}
    <TextField
      fullWidth
      name="email"
      label="E-MAIL"
      size="small"
      value={formData.email}
      onChange={handleInputChange}
      InputLabelProps={{ style: { color: "rgba(255, 255, 255, 0.56)",fontSize: "15px", padding: "0px 12px" } }}
      sx={{
        mb: 5,
        "& .MuiOutlinedInput-root": {
          bgcolor: "#690580",
          borderRadius: "30px",
          color: "white",
          "& fieldset": { border: "none" },
        },
      }}
    />

    {/* Message field */}
    <TextField
      fullWidth
      multiline
      rows={8}
      name="message"
      label="NACHRICHT"
      size="small"
       
      value={formData.message}
      onChange={handleInputChange}
      InputLabelProps={{ style: { color: "rgba(255, 255, 255, 0.56)",fontSize: "15px", padding: "0px 12px" } }}
      sx={{
        mb: 5,
        "& .MuiOutlinedInput-root": {
          bgcolor: "#690580",
          borderRadius: "20px",
          color: "white",
          "& fieldset": { border: "none" },
        },
      }}
    />

    {/* Submit button aligned right-bottom */}
    <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
      <Button
        type="submit"
        variant="contained"
        sx={{
          bgcolor: "#690580",
          color: "white",
          fontWeight: "bold",
          px: 9,
          py: 1,
          borderRadius: "30px",
          textTransform: "none",
          fontSize: "15px",
          "&:hover": {
            bgcolor: "#690580",
          },
        }}
      >
        SENDEN
      </Button>
    </Box>
  </form>
</Box>

        </Box>
      </Container>
    </Box>
  );
}