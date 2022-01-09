import React, { useEffect } from 'react'
import Head from 'next/head'
import { AppProps } from 'next/app'
import { AnimatePresence, motion } from 'framer-motion'

import * as gtag from '../utils/gtag'
import { ScrollRestorer } from '../components/scrollRestorer'

export const CSP = `default-src 'self';
frame-src https://www.youtube.com/;
img-src 'self' https://* data:;
style-src 'self' 'unsafe-inline';
font-src 'self' https://fonts.gstatic.com;
script-src 'self' https://www.googletagmanager.com https://www.google-analytics.com;
connect-src 'self' https://www.google-analytics.com https://*.sibforms.com/;`

const variants = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
}

const App: React.FC<AppProps> = ({ Component, pageProps, router }) => {
  const url = `https://www.thecuriousdeveloper.com${router.route}`

  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
        />
        {process.env.NODE_ENV === 'production' && (
          <meta httpEquiv="Content-Security-Policy" content={CSP} />
        )}
      </Head>
      <AnimatePresence exitBeforeEnter initial={false}>
        <motion.div
          initial="initial"
          animate="enter"
          variants={variants}
          style={{ width: '100%', height: '100%' }}
          key={url}
        >
          <ScrollRestorer />
          <Component {...pageProps} canonical={url} />
        </motion.div>
      </AnimatePresence>
    </>
  )
}

export default App
