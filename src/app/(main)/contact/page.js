"use client";
import { Box, Typography, Container, TextField, Button, InputLabel } from "@mui/material";
import Image from "next/image";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        bgcolor: "#121214",
        color: "white",
        overflow: "hidden",
        minHeight: "100vh",
        pt:{xs:12,md:17},
      }}
    >

      {/* ───────────── MOBILE VERSION ───────────── */}
      <Box
        sx={{
          display: { xs: "block", md: "none" },
          pt: 8,
          pb: 12,
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Overlay images */}
        <Image
          src="/homepage/contact-us-overlay.webp"
          alt="overlay"
          width={450}
          height={450}
          style={{
            position: "absolute",
            top: 40,
            left: -80,
            zIndex: 0,
            opacity: 1,
          }}
        />
        <Image
          src="/homepage/overlay-object2.webp"
          alt="overlay"
          width={350}
          height={350}
          style={{
            position: "absolute",
            top: 790,
            left: 330,
            transform: "translateX(-50%)",
            zIndex: 0,
            opacity: 1,
          }}
        />

        <Container
          maxWidth="sm"
          sx={{
            position: "relative",
            zIndex: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {/* Heading */}
          <Typography
            variant="h2"
            sx={{
              fontWeight: "bold",
              fontFamily: "Poppins",
              fontSize: "1.8rem",
              textAlign: "center",
              mb: 9,
            }}
          >
            Contact
          </Typography>

          {/* Phone image box */}
          <Box
            sx={{
              bgcolor: "#8E4EC4",
              borderRadius: "30px",
              width: "170px",
              height: "170px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              mb: 15,
            }}
          >
            <Image
              src="/homepage/contact-us.webp"
              alt="Contact Phone"
              width={260}
              height={260}
              style={{ objectFit: "contain" }}
            />
            <Box sx={{ position: "absolute", bottom: -65, right: -75 }}>
              <Image
                src="/homepage/contact-us-coins.webp"
                alt="Coins"
                width={80}
                height={80}
              />
            </Box>
          </Box>

          {/* Form */}
          <Box sx={{ width: "100%", px: 3 }}>
            <form onSubmit={handleSubmit}>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 3, px: 2 }}>

                <Box>
                  <InputLabel sx={{ color: "white", mb: 1, fontSize: "14px", textAlign: "center", width: "100%" }}>
                    VORNAME
                  </InputLabel>
                  <TextField
                    fullWidth name="firstName" size="small"
                    value={formData.firstName} onChange={handleInputChange}
                    sx={{ "& .MuiOutlinedInput-root": { bgcolor: "#690580", borderRadius: "30px", color: "white", "& fieldset": { border: "none" } } }}
                  />
                </Box>

                <Box>
                  <InputLabel sx={{ color: "white", mb: 1, fontSize: "14px", textAlign: "center", width: "100%" }}>
                    NACHNAME
                  </InputLabel>
                  <TextField
                    fullWidth name="lastName" size="small"
                    value={formData.lastName} onChange={handleInputChange}
                    sx={{ "& .MuiOutlinedInput-root": { bgcolor: "#690580", borderRadius: "30px", color: "white", "& fieldset": { border: "none" } } }}
                  />
                </Box>

                <Box>
                  <InputLabel sx={{ color: "white", mb: 1, fontSize: "14px", textAlign: "center", width: "100%" }}>
                    E-MAIL
                  </InputLabel>
                  <TextField
                    fullWidth name="email" size="small"
                    value={formData.email} onChange={handleInputChange}
                    sx={{ "& .MuiOutlinedInput-root": { bgcolor: "#690580", borderRadius: "30px", color: "white", "& fieldset": { border: "none" } } }}
                  />
                </Box>

                <Box>
                  <InputLabel sx={{ color: "white", mb: 1, fontSize: "14px", textAlign: "center", width: "100%" }}>
                    NACHRICHT
                  </InputLabel>
                  <TextField
                    fullWidth multiline rows={5} name="message"
                    value={formData.message} onChange={handleInputChange}
                    sx={{ "& .MuiOutlinedInput-root": { bgcolor: "#690580", borderRadius: "20px", color: "white", "& fieldset": { border: "none" } } }}
                  />
                </Box>

              </Box>

              <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
                <Button
                  type="submit" variant="contained"
                  sx={{ bgcolor: "#690580", color: "white", fontWeight: "bold", px: 8, py: 1, borderRadius: "30px", textTransform: "none", fontSize: "15px", "&:hover": { bgcolor: "#690580" } }}
                >
                  SENDEN
                </Button>
              </Box>
            </form>
          </Box>
        </Container>
      </Box>

      {/* ───────────── DESKTOP VERSION ───────────── */}
      <Box sx={{ display: { xs: "none", md: "block" } }}>

        {/* Background overlay */}
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

          {/* Heading */}
          <Box sx={{ textAlign: "center", mb: 6 }}>
            <Typography
              variant="h2"
              sx={{
                fontWeight: "bold",
                mb: 3.3,
                fontFamily: "Poppins",
                mt: 10,
                fontSize: { xs: "2.5rem", md: "3rem" },
              }}
            >
              Contact
            </Typography>
            
          </Box>

          {/* Main content */}
          <Box
            sx={{
              display: "flex",
              gap: 8,
              alignItems: "flex-start",
              flexDirection: "row",
              mt: 25,
              mb: 20,
            }}
          >
            {/* Left — phone image */}
            <Box sx={{ flex: 1, position: "relative" }}>
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
                  mx: 3,
                }}
              >
                <Image
                  src="/homepage/contact-us.webp"
                  alt="Contact Phone"
                  width={500}
                  height={500}
                  style={{ objectFit: "contain" }}
                />
              </Box>
              <Image
                src="/homepage/contact-us-coins.webp"
                alt="Coins"
                width={120}
                height={120}
                style={{ position: "absolute", bottom: -110, right: 60, objectFit: "contain", zIndex: 2 }}
              />
            </Box>

            {/* Right — form */}
            <Box sx={{ flex: 1, maxWidth: "550px" }}>
              <form onSubmit={handleSubmit}>
                <Box sx={{ display: "flex", mt: -4, gap: 5, mb: 5, flexDirection: { xs: "column", sm: "row" } }}>
                  <TextField
                    fullWidth name="firstName" label="VORNAME" size="small"
                    value={formData.firstName} onChange={handleInputChange}
                    InputLabelProps={{ style: { color: "rgba(255,255,255,0.56)", fontSize: "15px", padding: "0px 12px" } }}
                    sx={{ "& .MuiOutlinedInput-root": { bgcolor: "#690580", borderRadius: "30px", color: "white", "& fieldset": { border: "none" } } }}
                  />
                  <TextField
                    fullWidth name="lastName" label="NACHNAME" size="small"
                    value={formData.lastName} onChange={handleInputChange}
                    InputLabelProps={{ style: { color: "rgba(255,255,255,0.56)", fontSize: "15px", padding: "0px 12px" } }}
                    sx={{ "& .MuiOutlinedInput-root": { bgcolor: "#690580", borderRadius: "30px", color: "white", "& fieldset": { border: "none" } } }}
                  />
                </Box>

                <TextField
                  fullWidth name="email" label="E-MAIL" size="small"
                  value={formData.email} onChange={handleInputChange}
                  InputLabelProps={{ style: { color: "rgba(255,255,255,0.56)", fontSize: "15px", padding: "0px 12px" } }}
                  sx={{ mb: 5, "& .MuiOutlinedInput-root": { bgcolor: "#690580", borderRadius: "30px", color: "white", "& fieldset": { border: "none" } } }}
                />

                <TextField
                  fullWidth multiline rows={8} name="message" label="NACHRICHT" size="small"
                  value={formData.message} onChange={handleInputChange}
                  InputLabelProps={{ style: { color: "rgba(255,255,255,0.56)", fontSize: "15px", padding: "0px 12px" } }}
                  sx={{ mb: 5, "& .MuiOutlinedInput-root": { bgcolor: "#690580", borderRadius: "20px", color: "white", "& fieldset": { border: "none" } } }}
                />

                <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                  <Button
                    type="submit" variant="contained"
                    sx={{ bgcolor: "#690580", color: "white", fontWeight: "bold", px: 9, py: 1, borderRadius: "30px", textTransform: "none", fontSize: "15px", "&:hover": { bgcolor: "#690580" } }}
                  >
                    SENDEN
                  </Button>
                </Box>
              </form>
            </Box>
          </Box>
        </Container>
      </Box>

    </Box>
  );
}