 "use client";

import { useState } from "react";
import { AppBar, Box, Button, Drawer, IconButton, List, ListItemButton, ListItemText, Toolbar, Typography } from "@mui/material";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const links = [
  ["About", "#about"], ["Experience", "#experience"], ["Projects", "#projects"],
  ["Skills", "#skills"], ["Education", "#education"], ["Contact", "#contact"]
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <AppBar position="sticky" elevation={0} className="navbar">
        <Toolbar className="nav-toolbar">
          <a className="brand" href="#about"><span>DP</span><i />Divyanshu Parmar</a>
          <Box className="desktop-nav">
            {links.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
          </Box>
          <Box className="nav-actions">
            <Button className="gradient-button resume-top" startIcon={<DownloadRoundedIcon />} component="a" href="/" download>Get Resume</Button>
            <IconButton aria-label="LinkedIn" component="a" href="https://www.linkedin.com/in/divyanshu-parmar-944088281/" target="_blank" rel="noreferrer"><LinkedInIcon /></IconButton>
            <IconButton aria-label="GitHub" component="a" href="https://github.com/Divyanshu4321" target="_blank" rel="noreferrer"><GitHubIcon /></IconButton>
            <IconButton className="mobile-menu" onClick={() => setOpen(true)} aria-label="Open menu"><MenuRoundedIcon /></IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: 260, p: 2, bgcolor: "#081326", height: "100%" }}>
          <Typography variant="h6" sx={{ mb: 2 }}>Navigate</Typography>
          <List>{links.map(([label, href]) => <ListItemButton key={href} component="a" href={href} onClick={() => setOpen(false)}><ListItemText primary={label} /></ListItemButton>)}</List>
        </Box>
      </Drawer>
    </>
  );
}
