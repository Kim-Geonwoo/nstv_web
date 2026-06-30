import { ChakraProvider } from '@chakra-ui/react'
import { AppProps } from 'next/app';
import Head from 'next/head';
import "../styles/globals.css";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  )
}

export default MyApp        