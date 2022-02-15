import React from 'react';
import App from 'next/app';

import { SessionProvider } from "next-auth/react"

import { Provider } from 'react-redux';
import { createWrapper } from 'next-redux-wrapper';
import store from '../util/Store';
import '../styles/globals.css';

class MyApp extends App {

  static async getInitialProps({Component, ctx}) {
    const appProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};

    console.log("inside _app.js getInitialProps", appProps);
    //Anything returned here can be access by the client
    return {appProps: appProps};
  }

  render() {
    const { Component, appProps: { session, ...appProps } } = this.props;

    return (
      <SessionProvider session={session}>
        <Provider store={store}>
          <Component {...appProps} />
        </Provider>
      </SessionProvider>
    )
  }
}

const makeStore = () => store;
const wrapper = createWrapper(makeStore);

export default wrapper.withRedux(MyApp);
