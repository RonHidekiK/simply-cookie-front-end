import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <header>
      <title>Simply Cookie</title>
      <meta name="description" content="Simply Cookie Website" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com"/>
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400;500&display=swap" rel="stylesheet"/>
    </header>
    <Component {...pageProps} />
    </>
  )
}

export default MyApp
