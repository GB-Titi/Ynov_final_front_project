import type { AppProps } from 'next/app'
import '../styles/globals.scss'
import "my-lib-ui/dist/index.css"

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
