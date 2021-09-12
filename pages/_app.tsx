import React from "react";
import { AppProps } from "next/app";
import "@assets/main.css";
import { UIProvider } from "@components/ui/context";

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
