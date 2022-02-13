import React from 'react';
import App from 'next/app';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import { createWrapper } from 'next-redux-wrapper';
import store from '../util/Store';
import '../styles/globals.css';

class MyApp extends App {

  static async getInitialProps({Component, ctx}) {
    const appProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};

    console.log(appProps);
    //Anything returned here can be access by the client
    return {appProps: appProps};
  }

  render() {
    const { Component, appProps } = this.props;

    return (
      <Provider store={store}>
        <Component {...appProps} />
      </Provider>
    )
  }
}

const makeStore = () => store;
const wrapper = createWrapper(makeStore);

export default wrapper.withRedux(MyApp);
