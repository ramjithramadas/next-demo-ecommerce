import Document, { Html, Head, Main, NextScript } from "next/document";
import theme from "../material-ui/theme";
import {ServerStyleSheets} from "@material-ui/core/styles"

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="UTF-8" />
          <meta
            name="theme-color"
            content={theme.palette.primary.main}
          />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Ecommerce" />

          <link
            href="https://fonts.googleapis.com/css2?family=Hind:wght@300&display=swap"
            rel="stylesheet"
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
