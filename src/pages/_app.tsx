import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import { SelectedPokemonsContextProvider } from '../context/SelectedPokemonsContext';
import { TeamsContextProvider } from '../context/TeamsContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <TeamsContextProvider>
      <SelectedPokemonsContextProvider>
        <Component {...pageProps} />
      </SelectedPokemonsContextProvider>
    </TeamsContextProvider>
  );
}

export default MyApp;
