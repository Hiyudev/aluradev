import Head from 'next/head'
import Navbar from '../src/components/Navbar/Navbar'
import '../styles/globals.css'
import 'codemirror/lib/codemirror.css'
import { ThemeWrapper } from 'src/hooks/Theme'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Alura Challenge</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1" />
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Roboto&display=swap" rel="stylesheet"/>
      </Head>
      <Navbar>
        <ThemeWrapper>
          <Component {...pageProps} />
        </ThemeWrapper>
      </Navbar>
    </>
  )
}