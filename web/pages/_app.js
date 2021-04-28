import '../styles/globals.css'
import Navigation from '../components/basic/Navigation'
import { ThemeProvider } from '@material-ui/styles';
import theme from '../modules/theme'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return( 
  <> 
      <ThemeProvider theme={theme}>
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com"/>
          <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap" rel="stylesheet"/>
        </Head>
        <Navigation/>
        <Component {...pageProps} />
      </ThemeProvider>
  </>
  );
  
}

export default MyApp
