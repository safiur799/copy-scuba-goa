import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
    //UA-237439258-1
  return (
    <Html>
      <Head >
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      {/* <Script
            strategy="afterInteractive"
            src="https://www.googletagmanager.com/gtag/js?id=G-CFNDPP58RX"
          /> */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}