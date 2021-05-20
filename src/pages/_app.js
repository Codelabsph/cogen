import React from "react";
import "styles/_globals.scss";

import Router from "next/router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { SnackbarProvider } from "notistack";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }) {
  return (
    <SnackbarProvider maxSnack={3}>
      <Component {...pageProps} />
    </SnackbarProvider>
  );
}
export default MyApp;
