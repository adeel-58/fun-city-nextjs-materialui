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
  ListItemButton,
  ListItemText,
  Link as MuiLink,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
//import ListItemButton from "@mui/material/ListItemButton";
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const toggleDrawer = (state) => () => {
    setOpen(state);
  };

  const navLinks = [
    { label: "Shop 1", href: "/shop1" },
    { label: "Shop 2", href: "/shop2" },
    { label: "Piramide", href: "/pyramid" },
  ];
  const menuLinks = [
    { label: "Shop 1", href: "/shop1" },
    { label: "Shop 2", href: "/shop2" },
    { label: "Piramide", href: "/pyramid" },
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
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
            minHeight: { xs: "70px", md: "100px" },
            px: { xs: 2, md: 8 },
          }}
        >
          {/* Left - Logo */}
          <Box sx={{ width: { xs: 120, sm: 150, md: 190 }, height: "auto" }}>
            <Link href="/" passHref>
              <Image
                src="/pyramid/pyramid-logo.png"
                alt="Fun City Logo"
                width={190} // you still need these values for next/image optimization
                height={65}
                style={{ width: "100%", height: "auto", cursor: "pointer" }} // 👈 responsive
              />
            </Link>
          </Box>

          {/* Center - Links */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 4 }}>
            {navLinks.map((link) => (
              <MuiLink
                key={link.href}
                component={Link}
                href={link.href}
                color="inherit"
                underline={pathname === link.href ? "always" : "hover"}
                sx={{
                  px: 1.5,
                  py: 0.5,
                  fontSize: "15px",
                  fontWeight: "bold",
                  fontFamily: "'Poppins', sans-serif",
                  textUnderlineOffset: "8px",
                  textDecorationThickness: "3px",
                  textTransform: "none",
                  "&:hover": {
                    textDecorationColor: "#E5871A",
                    textUnderlineOffset: "8px",
                    textDecorationThickness: "3px",
                  },
                  ...(pathname === link.href && {
                    textDecorationColor: "#E5871A",
                  }),
                }}
              >
                {link.label}
              </MuiLink>
            ))}
          </Box>

          {/* Right - Menu / Hamburger */}
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              onClick={toggleDrawer(true)}
              disableRipple // 👈 disables the click ripple effect
              sx={{ backgroundColor: "transparent" }} // optional: keep background transparent
            >
              <MenuIcon sx={{ fontSize: { xs: 32, md: 40 }, color: "#ffffff" }} />
            </IconButton>
          </Box>

          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Button
              variant="contained"
              onClick={toggleDrawer(true)}
              sx={{
                borderRadius: "20px",
                background: "#DF1232",
                px: 6.6,
                py: 0.8,
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
      {/* Drawer for Mobile */}
      <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
        <Box
          sx={{
            width: { xs: "75vw", sm: "60vw", md: "30vw" }, // responsive width
            height: "100vh",
            bgcolor: "#2C3D29",
            color: "white",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            pl: { xs: 4, md: 12 }, // smaller padding on mobile
            pt: { xs: 6, lg: 10, xl: 12 },
            position: "relative",
          }}
        >

          <List sx={{ textAlign: "left", width: "100%" }}>
            {menuLinks.map((link) => (
              <ListItem key={link.href} disablePadding>
                <ListItemButton
                  component={Link}
                  href={link.href}
                  onClick={toggleDrawer(false)}
                  sx={{
                    justifyContent: "flex-start",

                    fontSize: { xs: "18px", sm: "22px", md: "28px" }, // responsive font
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: 600,
                    letterSpacing: { xs: "1px", md: "2px" },
                    textTransform: "uppercase",
                    py: { xs: 0.5, md: 0 },

                    color: pathname === link.href ? "#DF1232" : "white",

                    "&:hover": {
                      color: "#DF1232",
                      background: "transparent",
                    },
                  }}
                >
                  <ListItemText
                    primary={link.label}
                    primaryTypographyProps={{
                      fontSize: "inherit",
                      fontWeight: "inherit",
                      fontFamily: "inherit",
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>

        </Box>
      </Drawer>
    </>
  );
}