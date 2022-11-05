import * as React from 'react'
import NextApp from 'next/app'
import theme from '../lib/theme'
import { ThemeProvider } from 'theme-ui'
import '../styles/globals.css'
import Script from 'next/script'

export default class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={theme}>
        <Script defer data-domain="zephyr.hackclub.com" src="https://plausible.io/js/script.js" />
        <Component {...pageProps} />
      </ThemeProvider>
    )
  }
}
