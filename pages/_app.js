// components
import NavBar from "../components/common/NavBar";
import Footer from "../components/common/Footer";
// styles
import "../styles/index.scss";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
