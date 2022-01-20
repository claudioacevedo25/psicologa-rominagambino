import '../styles/globals.css';
import DefaultLayout from "../components/defaultLayout.component";

function MyApp({ Component, pageProps }) {
  return (
    <DefaultLayout>
      <Component {...pageProps} />
    </DefaultLayout>
  );
};

export default MyApp
