import Link from "next/link";
import Header from "./Header";
import Footer from "./Footer";
import Navigation from "./Navigation";

const Layout = ({ children }) => (
  <>
    <Navigation />

    <Footer />
  </>
);

export default Layout;
