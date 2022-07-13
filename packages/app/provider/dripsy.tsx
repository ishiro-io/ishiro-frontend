import { DripsyProvider, makeTheme } from "dripsy";

const theme = makeTheme({
  colors: { background: "#131313", text: "#FFF" },
  text: {
    p: {
      color: "text",
      fontSize: 16
    }
  }
});

type Theme = typeof theme;

declare module "dripsy" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DripsyCustomTheme extends Theme {}
}

export function Dripsy({ children }: { children: React.ReactNode }) {
  return (
    <DripsyProvider
      theme={theme}
      // this disables SSR, since react-native-web doesn't have support for it (yet)
      // ssr
    >
      {children}
    </DripsyProvider>
  );
}
