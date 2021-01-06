import React from 'react'
import Head from 'next/head'
import { AppProps } from 'next/app'

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <Head>
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
      />
    </Head>
    <Component {...pageProps} />
  </>
)

export default App
