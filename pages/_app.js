import Script from 'next/script'

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* Replace YOUR_TRACKING_ID with your Google Analytics ID */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=YOUR_TRACKING_ID`}
      />
      <Script
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'YOUR_TRACKING_ID');
        `,
        }}
      />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
