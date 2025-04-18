// pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="description" content="Kere Albert — Full-Stack Developer Portfolio" />
        <meta name="keywords" content="Kere Albert, developer, portfolio, software engineer, full-stack" />
        <meta name="author" content="Kere Albert" />
        <meta property="og:title" content="Kere Albert | Software Developer" />
        <meta property="og:description" content="Portfolio showcasing my software development projects and skills." />
        <meta property="og:image" content="/preview.jpg" />
        <meta property="og:url" content="https://giphy2.github.io/kere-albert-portfolio/" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
