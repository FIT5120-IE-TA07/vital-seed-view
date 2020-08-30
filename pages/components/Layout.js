import Link from "next/link";
import Header from "./Header";
import Footer from "./Footer";
import Head from "next/head";
import Navigation from "./Navigation";

const Layout = ({ children }) => (
  <>
    <Head>
      <title>Vital Seed</title>
      <Navigation />
    </Head>
    <footer>
      <Footer />
    </footer>
  </>
);

export default Layout;
