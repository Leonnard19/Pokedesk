import "../styles/globals.css";
import type { AppProps } from "next/app";
import { SelectedPokemonsContextProvider } from "../context/SelectedPokemonsContext";
import { TeamsContextProvider } from "../context/TeamsContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SelectedPokemonsContextProvider>
      <TeamsContextProvider>
        <Component {...pageProps} />
      </TeamsContextProvider>
    </SelectedPokemonsContextProvider>
  );
}

export default MyApp;
