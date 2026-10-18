 "use client";

import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";

const theme = createTheme({
  palette: {
    mode: "dark",
    background: { default: "#050b18", paper: "#0a1426" },
    primary: { main: "#22d3ee" },
    secondary: { main: "#a855f7" },
    text: { primary: "#f5f7ff", secondary: "#aab7ce" }
  },
  typography: {
    fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    button: { textTransform: "none", fontWeight: 700 }
  },
  shape: { borderRadius: 14 }
});

export default function ThemeRegistry({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
