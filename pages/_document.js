import Document, { Head, Main, NextScript } from 'next/document'
import React from 'react'

class CustomDocument extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          <link
            href="https://fonts.googleapis.com/css?family=Josefin+Sans:400,600,700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}

export default CustomDocument
