import { CircularProgress, createTheme, ThemeProvider } from "@mui/material";
import { Analytics } from "@vercel/analytics/react";
import { Router } from "next/router";
import { useEffect, useState } from "react";
import DefaultLayout from "../components/defaultLayout.component";
import Box from "@mui/material/Box";
import "../styles/globals.css";

const Spinner = () => {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CircularProgress color="info" size={70} />
    </Box>
  );
};

const font = "'Josefin Sans', sans-serif";
const theme = createTheme({
  typography: {
    fontFamily: font,
  },
  palette: {
    primary: {
      dark: "#bfbbcb",
      main: "#e4fbfb", // color del navbar
      light: "#bfbbcb",
    },
  },
});

function MyApp({ Component, pageProps }) {
  const [showChild, setShowChild] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const start = () => setIsLoading(true);
  const complete = () => setIsLoading(false);

  useEffect(() => {
    setShowChild(true);

    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", complete);
    Router.events.on("routeChangeError", complete);

    return () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", complete);
      Router.events.off("routeChangeError", complete);
    };
  }, []);

  if (!showChild || typeof window === "undefined") return null;
  return (
    <ThemeProvider theme={theme}>
      <DefaultLayout>
        {isLoading ? <Spinner /> : <Component {...pageProps} />}
        <Analytics />
      </DefaultLayout>
    </ThemeProvider>
  );
}

export default MyApp;
