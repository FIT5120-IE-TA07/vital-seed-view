import Link from "next/link";
import Header from "./Header";
import Footer from "./Footer";
import Head from "next/head";
import Navigation from "./Navigation";

class Layout extends React.Component {
  render() {
    return (
      <div>
          <title>Vital Seed</title>
          <Navigation />

        <Footer />
      </div>
    );
  }


};

export default Layout
