
import { createTheme, ThemeProvider } from "@mui/material";
import DefaultLayout from "../components/defaultLayout.component";
import '../styles/globals.css';

const font = "'Josefin Sans', sans-serif";
const theme = createTheme({
  typography: {
    fontFamily: font,
  },
  palette: {
    primary: {
      dark: '#C15A26',
      main: '#C15A26',
      light: '#C15A26',
    },
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
