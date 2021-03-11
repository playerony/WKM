import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

type LayoutProps = {
  title?: string
  children: React.ReactNode
}

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
}

const Layout = ({ children, title }: LayoutProps): JSX.Element => (
  <div style={layoutStyle}>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>{' '}
        |{' '}
        <Link href="/about">
          <a>About</a>
        </Link>{' '}
        |{' '}
      </nav>
    </header>
    {children}
  </div>
)

export default Layout
