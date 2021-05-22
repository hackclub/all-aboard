import * as React from 'react'
import NextApp from 'next/app'
import theme from '../lib/theme'
import { ThemeProvider } from 'theme-ui'
import Meta from '../components/meta'

export default class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={theme}>
        <Meta />
        <Component {...pageProps} />
      </ThemeProvider>
    )
  }
}
