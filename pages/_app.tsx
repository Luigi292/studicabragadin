import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { NextIntlProvider } from 'next-intl'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Studio Ca' Bragadin | Avvocato Lenzi Padova | Andrea Maretto Commercialista | Alberto Cecolin</title>
        <meta name="description" content="Studio Commercialisti Ca' Bragadin a Padova. Avvocato Maximiliano Lenzi per consulenze legali, Dott. Andrea Maretto e Dott. Alberto Cecolin per servizi fiscali e societari. Contattaci in Via Belzoni 180." />
        <meta name="keywords" content="avvocato lenzi padova, andrea maretto padova, cecolin padova, commercialista padova, studio commercialisti padova, servizi legali padova" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-icon-180x180.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Crimson+Text&family=Raleway:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <link rel="icon" type="image/png" href="/images/favicon-logo.png" />
        <link rel="shortcut icon" href="/images/favicon-logo.png" type="image/png" />
      </Head>
      <NextIntlProvider messages={pageProps.messages}>
        <Component {...pageProps} />
      </NextIntlProvider>
    </>
  )
}

export default MyApp