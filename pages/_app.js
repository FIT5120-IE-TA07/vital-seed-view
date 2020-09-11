import "../styles/popup.css";
import "../styles/index.css";
import "../styles/layout.css";
// import '../styles/custom.css'
// import '../styles/normalize.css'
// import '../styles/skeleton.css'
// import '../styles/global.css'
import Layout from "./components/layout";
// import '../styles/forms.css'
import { CounterProvider } from "./components/forms/counter";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <CounterProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CounterProvider>
  );
}
