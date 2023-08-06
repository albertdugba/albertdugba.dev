import Head from "next/head";
import type { AppProps } from "next/app";
import ProductSans from "@next/font/local";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "../../styles/globals.css";
import { Seo } from "~/components/seo";

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
      <Seo
        title='Albert Dugba - Frontend Engineer'
        description="Hi my name is Albert Dugba. I'm a frontend engineer with 3+ years of experience with a knack for building digital experiences on the web."
        linkUrl='https://albertdugba.dev'
        imageUrl='https://res.cloudinary.com/dsdifoazf/image/upload/v1691347988/image_4_1_wgoyz7.jpg'
      />
      <div className={`${myFonts.className}`}>
        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />
        </QueryClientProvider>
      </div>
    </>
  );
}
