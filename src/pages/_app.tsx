import "../styles/reset.css";
import "normalize.css";
import "bootstrap/dist/css/bootstrap-grid.css";
import "../components/App/App.css";
import "../components/Contact/Contact.css";
import "../components/Education/Education.css";
import "../components/Experience/Experience.css";
import "../components/Footer/Footer.css";
import "../components/Header/Header.css";
import "../components/Navigation/Navigation.css";
import "../components/Skills/Skills.css";

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
