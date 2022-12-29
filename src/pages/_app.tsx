import "../styles/reset.css";
import "normalize.css";
import "bootstrap/dist/css/bootstrap-grid.css";
import "../styles/globals.css";

import { Roboto_Flex } from "@next/font/google";
import type { AppProps } from "next/app";

const robotoFlex = Roboto_Flex({
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={robotoFlex.className}>
      <Component {...pageProps} />
    </div>
  );
}
