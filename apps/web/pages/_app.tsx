import { AppProps } from "next/app";
import React from "react";

import { useResources } from "shared/hooks";

function App({ Component, pageProps }: AppProps) {
  const { isFontReady } = useResources();

  if (!isFontReady) {
    return null;
  }

  return <Component {...pageProps} />;
}

export default App;
