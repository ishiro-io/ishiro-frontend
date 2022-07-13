import "raf/polyfill";

import Head from "next/head";
import React from "react";
import type { SolitoAppProps } from "solito";

import { Provider } from "app/provider";

function MyApp({ Component, pageProps }: SolitoAppProps) {
  return (
    <>
      <Head>
        <title>Ishiro</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Provider>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default MyApp;
