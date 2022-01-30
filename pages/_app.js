
import { createTheme, ThemeProvider } from "@mui/material";
import DefaultLayout from "../components/defaultLayout.component";
import '../styles/globals.css';

const font = "'Dongle', sans-serif";
const theme = createTheme({
  typography: {
    fontFamily: font,
  }
})

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <DefaultLayout>
        <Component {...pageProps} />
      </DefaultLayout>
    </ThemeProvider>

  );
};

export default MyApp
