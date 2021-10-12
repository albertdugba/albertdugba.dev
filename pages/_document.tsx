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
          <meta charSet="utf-8" />
          <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
          <meta name="robots" content="follow, index" />
          <link href="/favicon.ico" rel="shortcut icon" />
          <meta name="description" content="Hi, I'm Albert Dugba, a Frontend Engineer." />

          <meta itemProp="name" content="Albert Dugba - Software Engineer" />
          <meta itemProp="description" content="Hi, I'm Albert Dugba, a Frontend Engineer." />
          <meta itemProp="image" content="https://albertdugba.dev/albertdugba.jpg" />

          <meta property="og:url" content="https://albertdugba.dev" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Albert Dugba - Software Engineer" />
          <meta property="og:description" content="Hi, I'm Albert Dugba, a Frontend Engineer." />
          <meta property="og:image" content="https://albertdugba.dev/albertdugba.jpg" />

          <meta name="twitter:card" content="https://albertdugba.dev/albertdugba.jpg" />
          <meta name="twitter:title" content="Albert Dugba - Frontend Engineer" />
          <meta name="twitter:description" content="Hi, I'm Albert Dugba, a Frontend Engineer." />
          <meta name="twitter:site" content="@Albert_Dugba" />
          <meta name="twitter:title" content="@Albert_Dugba" />
          <meta name="author" content="Albert Dugba" />

          <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS_ID}`} />

          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];  
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.GOOGLE_ANALYTICS_ID}',{ page_path: window.location.pathname });
            `,
            }}
          />
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
