import React from 'react';
import App from 'next/app';
import { SessionProvider } from "next-auth/react"
import wrapper from '../util/Store/wrapper';
import '../styles/globals.css';

class MyApp extends App {

  render() {
    const { Component, pageProps: { session, ...pageProps } } = this.props;
    
    return (
      <SessionProvider session={session}>
          <Component {...pageProps} />
      </SessionProvider>
    )
  }
}

export default wrapper.withRedux(MyApp);
