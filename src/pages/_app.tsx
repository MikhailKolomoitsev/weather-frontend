import { store } from "@app/store";
import { CacheProvider } from "@emotion/react";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import createEmotionCache from "@app/utils/emotion-cache";
import MainLayout from "../components/layout";

const clientSideEmotionCache = createEmotionCache();

interface CustomProps extends AppProps {
  emotionCache: any;
}

export default function App({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache
}: CustomProps) {
  return (
    <Provider store={store}>
      <CacheProvider value={emotionCache}>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </CacheProvider>
    </Provider>
  );
}
