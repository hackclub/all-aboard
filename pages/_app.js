import * as React from 'react'
import NextApp from 'next/app'
import theme from '../lib/theme'
import { ThemeProvider } from 'theme-ui'
import '../styles/globals.css'

export default class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    )
  }
}
