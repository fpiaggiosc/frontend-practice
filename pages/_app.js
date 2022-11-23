import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { ThemeProvider } from "@mui/material/styles";
import { useTheme } from "@mui/material/styles";

import "../styles/globals.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

export const muiCache = createCache({
  key: "mui",
  prepend: true,
});

function MyApp({ Component, pageProps }) {
  const myTheme = useTheme();
  return (
    <CacheProvider value={muiCache}>
      <ThemeProvider theme={myTheme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
}

export default MyApp;
