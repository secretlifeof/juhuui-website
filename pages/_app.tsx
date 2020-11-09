import { setup } from 'juhuui'
import { createElement, forwardRef } from 'react'
import type { AppProps } from 'next/app'
import '../components/layout.css'
import theme from '../theme'

setup(createElement, { theme, defaultFun: true, forwardRef })

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
