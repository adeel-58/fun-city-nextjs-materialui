"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Link as MuiLink, // 👈 import MUI Link properly
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname(); // 👈 to detect active link

  const toggleDrawer = (state) => () => {
    setOpen(state);
  };

  const navLinks = [
    { label: "Shop 1", href: "/shop1" },
    { label: "Shop 2", href: "/shop2" },
    { label: "Piramide", href: "/" },
  ];

  return (
    <>
      <AppBar
        position="absolute"
        sx={{
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(8px)",
          boxShadow: "none",
        }}
      >
        <Toolbar
          sx={{
            justifyContent: "space-between",
            minHeight: { xs: "70px", md: "100px" }, // responsive height
            px: { xs: 2, md: 8 }, // horizontal padding
          }}
        >
          {/* Left - Logo */}
          <Box>
  <Link href="/" passHref>
    <Image 
      src="/logo.webp" 
      alt="Fun City Logo" 
      width={190} 
      height={65} 
      style={{ cursor: "pointer" }}
    />
  </Link>
</Box>

          {/* Center - Links (hidden on mobile) */}
<Box sx={{ display: { xs: "none", md: "flex" }, gap: 4 }}>
  {navLinks.map((link) => (
    <MuiLink
      key={link.href}
      component={Link}
      href={link.href}
      color="inherit"
      underline={pathname === link.href ? "always" : "hover"} // active vs hover
      sx={{
        px: 1.5, // padding left & right
        py: 0.5, // padding top & bottom
        fontSize: "15px", // slightly bigger font
        fontWeight:  "bold", // active bold
        fontFamily: "'Poppins', sans-serif", // custom font family

         textUnderlineOffset: "8px", // move underline further down
    textDecorationThickness: "3px",
        textTransform: "none",
        "&:hover": {
          textDecorationColor: "#8E4EC4", // custom underline color
          textUnderlineOffset: "8px", // move underline further down
    textDecorationThickness: "3px",
        },
        ...(pathname === link.href && {
      textDecorationColor: "#8E4EC4", // active underline color
    }),
        
      }}
    >
      {link.label}
    </MuiLink>
  ))}
</Box>

          {/* Right - Menu / Hamburger */}
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
          </Box>

          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Button
              variant="contained"
              sx={{
                borderRadius: "20px",
                background: "#8E4EC4",
                px: 6.6, // left & right padding
                py: 0.8, // top & bottom padding
                textTransform: "none",
                fontSize: "15px",

                fontFamily: "'Poppins', sans-serif",
              }}
            >
              Menu
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Drawer for Mobile */}
      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
          <List>
            {navLinks.map((link) => (
              <ListItem
                button
                key={link.href}
                component={Link}
                href={link.href}
                selected={pathname === link.href} // highlight active in drawer
              >
                <ListItemText primary={link.label} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}
