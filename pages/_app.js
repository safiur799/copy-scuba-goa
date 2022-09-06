import "../styles/globals.css";
import AppContext from "../Context/AppContext";
import { useState } from "react";
import Head from "next/head";
import Script from "next/script";
function MyApp({ Component, pageProps }) {
  const [appContext, setAppContext] = useState({
    accessToken: "",
  });

  return (
    <>
    {/* <!-- Google tag (gtag.js) - Google Analytics --> */}

    {/* <!-- Google tag (gtag.js) - Google Analytics --> */}
<Script id="google-analytics" strategy="afterInteractive" async src="https://www.googletagmanager.com/gtag/js?id=UA-238074039-1">
</Script>
<Script id="google-analytics" strategy="afterInteractive">
 {` window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-238074039-1');`}
</Script>
{/* <!-- Google tag (gtag.js) --> */}
<Script async src="https://www.googletagmanager.com/gtag/js?id=G-CFNDPP58RX"></Script>
<Script id="google-analytics" strategy="afterInteractive">
  {`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-CFNDPP58RX');`}
</Script>
      <AppContext.Provider value={{ appContext, setAppContext }}>
        <Component {...pageProps} />
      </AppContext.Provider>
    </>
  );
}

export default MyApp;
