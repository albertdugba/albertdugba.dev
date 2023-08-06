import Head from "next/head";
import type { AppProps } from "next/app";
import ProductSans from "@next/font/local";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "../../styles/globals.css";

const myFonts = ProductSans({
  src: [
    {
      path: "../../public/assets/fonts/ProductSans-Regular.woff",
      weight: "400",
    },
    {
      path: "../../public/assets/fonts/ProductSans-Medium.woff",
      weight: "500",
    },
  ],
});

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();

  return (
    <>
      <Head>
        <title>Albert Dugba</title>
      </Head>
      <div className={`${myFonts.className}`}>
        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />
        </QueryClientProvider>
      </div>
    </>
  );
}
