import GlobalStyle from "../src/theme/GlobalStyle";
import Head from "next/head";
import "../src/styles/global.css";
import { Provider } from "react-redux";
import store from "../src/store/store";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;400&display=swap"
            rel="stylesheet"
          />
        </Head>
        <GlobalStyle />
        <Component {...pageProps} />
      </Provider>
    </>
  );
}
