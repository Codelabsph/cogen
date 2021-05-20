import React from "react";
import "styles/_globals.scss";
import Router from "next/router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { ToastContainerComponent } from "src/components/toast";
import "react-toastify/dist/ReactToastify.css";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <ToastContainerComponent />
    </>
  );
}
export default MyApp;
