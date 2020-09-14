import "../styles/popup.css";
import "../styles/index.css";
import "../styles/layout.css";
// import '../styles/custom.css'
// import '../styles/normalize.css'
// import '../styles/skeleton.css'
// import '../styles/global.css'
import Layout from "./components/layout";
// import '../styles/forms.css'
// import { CounterProvider } from "./components/forms/counter";
// import store from './components/utils/store'
// import { Provider } from "react-redux";
// import dynamic from 'next/dynamic'

// const Store = dynamic(
//   () => import('./components/utils/store'),
//   { ssr: false }
// )

// const store = Store()


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
