import { AppProps } from "next/app";
import "@assets/main.css";
const Noop: React.FC = ({ children }) => <>{children}</>;
import React from "react";
function MyApp({
  Component,
  pageProps,
}: AppProps & { Component: { Layout: React.FC } }) {
  const Layout = Component.Layout ?? Noop;
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
