import Head from 'next/head'
import Navbar from '../src/components/Navbar/Navbar'
import '../styles/globals.css'
import 'codemirror/lib/codemirror.css'
import { ThemeWrapper } from 'src/hooks/Theme'
import BannerImage from '../public/metaimage.png'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Aluradev - Alura Challenges</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1" />
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Roboto&display=swap" rel="stylesheet"/>
        <link rel="icon" type="image/png" href="./favicon.ico" />
        <meta name="title" content="Aluradev - Alura Challenges"/>
        <meta name="description" content="Editor de códigos com snippets com opção de salvar e exportar para extensão png, svg, jpeg."/>

        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://aluradev.vercel.app/"/>
        <meta property="og:title" content="Aluradev - Alura Challenges"/>
        <meta property="og:description" content="Editor de códigos com snippets com opção de salvar e exportar para extensão png, svg, jpeg."/>
        <meta property="og:image" content={BannerImage}/>

        <meta property="twitter:card" content="summary_large_image"/>
        <meta property="twitter:url" content="https://aluradev.vercel.app/"/>
        <meta property="twitter:title" content="Aluradev - Alura Challenges"/>
        <meta property="twitter:description" content="Editor de códigos com snippets com opção de salvar e exportar para extensão png, svg, jpeg."/>
        <meta property="twitter:image" content={BannerImage}/>
      </Head>
      <Navbar>
        <ThemeWrapper>
          <Component {...pageProps} />
        </ThemeWrapper>
      </Navbar>
    </>
  )
}