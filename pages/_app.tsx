import React from "react";

import { AppProps } from "next/app";
import { UIProvider } from "@components/ui/context";
import "keen-slider/keen-slider.min.css";
import "@assets/main.css";

const Noop: React.FC = ({ children }) => <>{children}</>;

function MyApp({
  Component,
  pageProps,
}: AppProps & { Component: { Layout: React.FC } }) {
  const Layout = Component.Layout ?? Noop;
  return (
    <UIProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UIProvider>
  );
}

export default MyApp;
