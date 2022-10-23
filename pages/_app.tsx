import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { chakraTheme } from 'utils/chakratheme'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href={
            'https://fonts.googleapis.com/css2?family=M+PLUS+1p&display=swap'
          }
          rel="stylesheet"
        ></link>
        <title>ねこにげ</title>
      </Head>
      <ChakraProvider theme={chakraTheme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  )
}

export default MyApp
