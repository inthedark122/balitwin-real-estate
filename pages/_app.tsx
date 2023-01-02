import { CssBaseline } from '@mui/material';
import Head from 'next/head';
import { Inter } from '@next/font/google';
import type { AppProps } from 'next/app';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Header } from '../components/elements/Header';
import { Footer } from '../components/elements/Footer';

const inter = Inter({ subsets: ['latin'] });

const theme = createTheme({
  palette: {
    primary: {
      light: '#5adf4a',
      main: '#03ac0e',
      dark: '#007b00',
      contrastText: '#fff',
    },
    secondary: {
      light: '#5cafff',
      main: '#0380cb',
      dark: '#00549a',
      contrastText: '#fff',
    },
  },
  typography: {
    fontFamily: inter.style.fontFamily,
    button: {
      textTransform: 'none',
      fontWeight: 'bold',
    },
    h6: {
      fontWeight: 'bold',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200 + 72,
      xl: 1536,
    },
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <main>
        <Head>
          <title>Bali Twin - Real Estate</title>
          <meta name="description" content="Real Estate" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <CssBaseline />
        <Header />
        <Component {...pageProps} />
        <Footer />
      </main>
    </ThemeProvider>
  );
}
