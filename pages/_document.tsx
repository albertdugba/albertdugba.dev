import Document, { DocumentContext, Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;
    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
        });
      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
  render() {
    return (
      <Html lang="en">
        <Head>
          {this.props.styles}

          <meta name="author" content="Albert Dugba" />
          <meta name="keywords" content="Albert Dugba, albertdugba.dev frontend engineer. JavaScript, Africa" />
          <meta property="og:url" content="https://www.albertdugba.dev/" />
          <meta property="og:locale" content="en-US" />
          <meta property="og:type" content="website" />
          <meta name="description" content="Hi, I&#x27;m Albert Dugba, Software Engineer." />
          <meta property="og:description" content="Hi, I&#x27;m Albert Dugba, Software Engineer." />

          <meta name="twitter:site" content="@Albert_Dugba" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
