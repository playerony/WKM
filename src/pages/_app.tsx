import React from 'react'
import Head from 'next/head'
import NextApp from 'next/app'

import AppProvider from '../providers/AppProvider'

export default class App extends NextApp {
  render() {
    const { Component, pageProps, router } = this.props

    return (
      <>
        <Head>
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
          />
          <title>WKM</title>
        </Head>
        <AppProvider>
          <Component {...pageProps} key={router.route} />
        </AppProvider>
      </>
    )
  }
}
