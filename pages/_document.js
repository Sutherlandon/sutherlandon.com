// ./pages/_document.js
import Document, { Head, Main, NextScript } from 'next/document';

export default class SiteDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <html>
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />

          <link rel="stylesheet" href="https://unpkg.com/purecss@0.6.1/build/pure-min.css" />
          <link rel="stylesheet/less" type="text/css" href="static/css/style.less" />
          <script src="//cdnjs.cloudflare.com/ajax/libs/less.js/2.7.2/less.min.js"></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
        <style jsx>{`
          :global(html) {
            background-color: #000;
            height: 100%
          }
          :global(body) {
            height: 100%
          }
          div:global(#__next) {
            height: 100%
          }
        `}</style>
      </html>
    )
  }
}
