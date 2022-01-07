import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'

import { getCssText, globalStyles } from '../stitches.config'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en" data-theme="light">
        <Head>
          {globalStyles()}
          <meta
            name="application-name"
            content="Per Jansson - Fullstack Web Developer"
          />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />
          <meta
            name="apple-mobile-web-app-title"
            content="Per Jansson - Fullstack Web Developer"
          />
          <meta
            name="description"
            content="Per Jansson - Fullstack Web Developer"
          />
          <meta name="format-detection" content="telephone=no" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta
            name="msapplication-config"
            content="/icons/browserconfig.xml"
          />
          <meta name="msapplication-TileColor" content="#2B5797" />
          <meta name="msapplication-tap-highlight" content="no" />
          <meta name="theme-color" content="#111111" />
          <style>
            {`
							html {
								min-width: 320px;
								background-color: #111111;
							}
						`}
          </style>
          <style
            id="stitches"
            dangerouslySetInnerHTML={{ __html: getCssText() }}
          />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;800&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Share+Tech+Mono&display=swap"
            rel="stylesheet"
          />
          {/* <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/icons/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/icons/apple-touch-icon.png"
          /> */}
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/icons/favicon-16x16.png"
          />
          <link rel="manifest" href="/manifest.json" />
          <link
            rel="mask-icon"
            href="/icons/safari-pinned-tab.svg"
            color="#5bbad5"
          />
          <link rel="shortcut icon" href="/icons/favicon.ico" />
          <meta name="twitter:card" content="summary" />
          <meta
            name="twitter:url"
            content="https://www.thecuriousdeveloper.com"
          />
          <meta name="twitter:title" content="Per Jansson" />
          <meta
            name="twitter:description"
            content="Per Jansson - Fullstack Web Developer"
          />
          {/* <meta
            name="twitter:image"
            content="https://www.thecuriousdeveloper.com/icons/android-chrome-192x192.png"
          /> */}
          <meta name="twitter:creator" content="@perjansson" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Per Jansson" />
          <meta
            property="og:description"
            content="Per Jansson - Fullstack Web Developer"
          />
          <meta
            property="og:site_name"
            content="Per Jansson - Fullstack Web Developer"
          />
          <meta
            property="og:url"
            content="https://www.thecuriousdeveloper.com"
          />
          {/* <meta
            property="og:image"
            content="https://www.thecuriousdeveloper.com/icons/apple-touch-icon.png"
          /> */}
          {process.env.GA_TRACKING_ID && (
            <>
              <script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GA_TRACKING_ID}`}
              />
              <script
                dangerouslySetInnerHTML={{
                  __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${process.env.GA_TRACKING_ID}', {
                      page_path: window.location.pathname,
                    });
                `,
                }}
              />
            </>
          )}
          {globalStyles()}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
