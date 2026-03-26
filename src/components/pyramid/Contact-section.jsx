"use client";
import { Box, Typography, Container, TextField, Button, InputLabel } from "@mui/material";
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
    console.log("Form submitted:", formData);
  };

  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        bgcolor: "#2C3D29",
        color: "white",
        pt: 0,
        pb: 4,
        overflow: "hidden",
        minHeight: "100vh",
      }}
    >

      {/* ───────────── MOBILE VERSION ───────────── */}
      <Box
        sx={{
          display: { xs: "block", md: "none" },
          pt: 4,
          pb: 6,
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Overlay images */}
        <Image
          src="/pyramid/contact-image1.webp"
          alt="overlay"
          width={450}
          height={450}
          style={{
            position: "absolute",
            top: 40,
            left: -80,
            zIndex: 0,
            opacity: 1,
             display: "none",
          }}
        />
        <Image
          src="/pyramid/contact-image2.webp"
          alt="overlay"
          width={350}
          height={350}
          style={{
            position: "absolute",
            top: 890,
            left: 430,
            transform: "translateX(-50%)",
            zIndex: 0,
            opacity: 1,
             display: "none",
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
          {/* CONTACT HEADING */}
          <Typography
            variant="h2"
            sx={{
              fontWeight: 700,
              fontFamily: "lobster",
              fontSize: "1.8rem",
              textAlign: "center",
              mb: 9,
            }}
          >
            Kontakt
          </Typography>

          {/* PHONE IMAGE */}
          <Box
            sx={{
              bgcolor: "#81081A",
              borderRadius: "30px",
              width: "170px",
              height: "170px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              mb: 8,
            }}
          >
            <Image
              src="/pyramid/contact-us.webp"
              alt="Contact Phone"
              width={260}
              height={260}
              style={{ objectFit: "contain" }}
            />

            {/* Decoration */}
            <Box sx={{ position: "absolute", bottom: -85, right: -125 }}>
              <Image
                src="/pyramid/contact-mug.webp"
                alt="Decoration"
                width={180}
                height={180}
              />
            </Box>
          </Box>

          {/* FORM */}
          <Box sx={{ width: "100%", px: 3 }}>
            <form onSubmit={handleSubmit}>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 3, px: 2 }}>

                {/* First Name */}
                <Box>
                  <InputLabel sx={{ color: "white", mb: 1, fontSize: "14px", textAlign: "center", width: "100%" }}>
                    VORNAME
                  </InputLabel>
                  <TextField
                    fullWidth
                    name="firstName"
                    size="small"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        bgcolor: "#81081A",
                        borderRadius: "30px",
                        color: "white",
                        "& fieldset": { border: "none" },
                      },
                    }}
                  />
                </Box>

                {/* Last Name */}
                <Box>
                  <InputLabel sx={{ color: "white", mb: 1, fontSize: "14px", textAlign: "center", width: "100%" }}>
                    NACHNAME
                  </InputLabel>
                  <TextField
                    fullWidth
                    name="lastName"
                    size="small"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        bgcolor: "#81081A",
                        borderRadius: "30px",
                        color: "white",
                        "& fieldset": { border: "none" },
                      },
                    }}
                  />
                </Box>

                {/* Email */}
                <Box>
                  <InputLabel sx={{ color: "white", mb: 1, fontSize: "14px", textAlign: "center", width: "100%" }}>
                    E-MAIL
                  </InputLabel>
                  <TextField
                    fullWidth
                    name="email"
                    size="small"
                    value={formData.email}
                    onChange={handleInputChange}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        bgcolor: "#81081A",
                        borderRadius: "30px",
                        color: "white",
                        "& fieldset": { border: "none" },
                      },
                    }}
                  />
                </Box>

                {/* Message */}
                <Box>
                  <InputLabel sx={{ color: "white", mb: 1, fontSize: "14px", textAlign: "center", width: "100%" }}>
                    NACHRICHT
                  </InputLabel>
                  <TextField
                    fullWidth
                    multiline
                    rows={5}
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        bgcolor: "#81081A",
                        borderRadius: "20px",
                        color: "white",
                        "& fieldset": { border: "none" },
                      },
                    }}
                  />
                </Box>
              </Box>

              {/* Button */}
              <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    bgcolor: "#81081A",
                    color: "white",
                    fontWeight: "bold",
                    px: 8,
                    py: 1,
                    borderRadius: "30px",
                    textTransform: "none",
                    fontSize: "15px",
                    "&:hover": { bgcolor: "#81081A" },
                  }}
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
        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>

          {/* Contact heading with underline */}
          <Box sx={{ textAlign: "center", mb: 6 }}>
            <Typography
              variant="h2"
              sx={{
                fontWeight: "regular",
                mb: 3.3,
                fontFamily: "lobster",
                mt: 10,
                fontSize: { xs: "2.5rem", md: "2.2rem" },
              }}
            >
              Kontakt
            </Typography>
            <Box
              sx={{
                width: "100%",
                height: "6px",
                background: "linear-gradient(90deg, #666666 0%, #666666 75%, #81081a 75%, #81081a 100%)",
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
              flexDirection: "row",
              mt: 18,
              mb: 20,
            }}
          >
            {/* Left side */}
            <Box sx={{ flex: 1, position: "relative" }}>
              <Box
                sx={{
                  bgcolor: "#81081A",
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
                  src="/pyramid/contact-us.webp"
                  alt="Contact Phone"
                  width={500}
                  height={500}
                  style={{ objectFit: "contain" }}
                />
              </Box>

              <Image
                src="/pyramid/contact-image1.webp"
                alt="Decoration"
                width={150}
                height={150}
                style={{ position: "absolute", bottom: 340, right: 50, objectFit: "contain", zIndex: 2 }}
              />
              <Image
                src="/pyramid/contact-mug.webp"
                alt="Decoration"
                width={350}
                height={350}
                style={{ position: "absolute", bottom: -130, right: -50, objectFit: "contain", zIndex: 2 }}
              />
            </Box>

            {/* Right side - form */}
            <Box sx={{ flex: 1, maxWidth: "550px" }}>
              <form onSubmit={handleSubmit}>
                <Box sx={{ display: "flex", mt: -11, gap: 5, mb: 5, flexDirection: { xs: "column", sm: "row" } }}>
                  <TextField
                    fullWidth name="firstName" label="VORNAME" size="small"
                    value={formData.firstName} onChange={handleInputChange}
                    InputLabelProps={{ style: { color: "rgba(255, 255, 255, 0.56)", fontSize: "15px", padding: "0px 12px" } }}
                    sx={{ "& .MuiOutlinedInput-root": { bgcolor: "#81081A", borderRadius: "30px", color: "white", "& fieldset": { border: "none" } } }}
                  />
                  <TextField
                    fullWidth name="lastName" label="NACHNAME" size="small"
                    value={formData.lastName} onChange={handleInputChange}
                    InputLabelProps={{ style: { color: "rgba(255, 255, 255, 0.56)", fontSize: "15px", padding: "0px 12px" } }}
                    sx={{ "& .MuiOutlinedInput-root": { bgcolor: "#81081A", borderRadius: "30px", color: "white", "& fieldset": { border: "none" } } }}
                  />
                </Box>

                <TextField
                  fullWidth name="email" label="E-MAIL" size="small"
                  value={formData.email} onChange={handleInputChange}
                  InputLabelProps={{ style: { color: "rgba(255, 255, 255, 0.56)", fontSize: "15px", padding: "0px 12px" } }}
                  sx={{ mb: 5, "& .MuiOutlinedInput-root": { bgcolor: "#81081A", borderRadius: "30px", color: "white", "& fieldset": { border: "none" } } }}
                />

                <TextField
                  fullWidth multiline rows={8} name="message" label="NACHRICHT" size="small"
                  value={formData.message} onChange={handleInputChange}
                  InputLabelProps={{ style: { color: "rgba(255, 255, 255, 0.56)", fontSize: "15px", padding: "0px 12px" } }}
                  sx={{ mb: 5, "& .MuiOutlinedInput-root": { bgcolor: "#81081A", borderRadius: "20px", color: "white", "& fieldset": { border: "none" } } }}
                />

                <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                  <Button
                    type="submit" variant="contained"
                    sx={{ bgcolor: "#81081A", color: "white", fontWeight: "bold", px: 9, py: 1, borderRadius: "30px", textTransform: "none", fontSize: "15px", "&:hover": { bgcolor: "#81081A" } }}
                  >
                    SENDEN
                  </Button>
                </Box>

                <Image src="/pyramid/contact-image2.webp" alt="Decoration" width={130} height={130}
                  style={{ position: "absolute", bottom: -130, right: 530, objectFit: "contain", zIndex: 2 }} />
                <Image src="/pyramid/contact-image3.webp" alt="Decoration" width={130} height={130}
                  style={{ position: "absolute", bottom: -150, right: 200, objectFit: "contain", zIndex: 2 }} />
              </form>
            </Box>
          </Box>
        </Container>
      </Box>

    </Box>
  );
}