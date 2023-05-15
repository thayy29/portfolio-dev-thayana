import App from "next/app"
import GlobalStyle from "../theme/GlobalStyle";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle/>
      <Component {...pageProps} />
    </>
  );
}
