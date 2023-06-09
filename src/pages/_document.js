import {Head, Html, Main, NextScript} from 'next/document';

export default function Document() {
  return (
    <Html lang="pl">
      <Head />
      <body className="has-navbar-fixed-top">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}