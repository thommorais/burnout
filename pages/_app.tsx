import "../styles/globals.css"
import "@fontsource/poppins"
import "@fontsource/poppins/300.css"
import "@fontsource/poppins/100.css"

import type { AppProps } from "next/app"

import Wrapper from "_components/Wrapper"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Wrapper>
      <Component {...pageProps} />
    </Wrapper>
  )
}

export default MyApp
