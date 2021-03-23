import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../components/Layout/Header";
import axios from "../axiosApi";

export default function MyApp({ Component, pageProps }: AppProps, { data }) {
  return (
    <Header>
      <Component {...pageProps} />
    </Header>
  );
}
