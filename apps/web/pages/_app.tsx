import "raf/polyfill";

import Head from "next/head";
import React from "react";
import type { SolitoAppProps } from "solito";

import { useResources } from "shared/hooks";
import { Provider } from "shared/provider";

function App({ Component, pageProps }: SolitoAppProps) {
  const { isFontReady } = useResources();

  if (!isFontReady) {
    return null;
  }

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

export default App;
