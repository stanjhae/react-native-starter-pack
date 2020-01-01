import React from 'react';
import { initializeStore, RootState, Store } from '../store';

type WindowWithRematch = Window & { __REDUX_STORE__?: Store };

function getOrCreateStore(initialState?: RootState): Store {
  const windowWithRematch: WindowWithRematch = window;
  const store = windowWithRematch.__REDUX_STORE__
    ? windowWithRematch.__REDUX_STORE__
    : initializeStore(initialState);
  // Create store if unavailable on the client and set it on the window object
  if (!windowWithRematch.__REDUX_STORE__) {
    windowWithRematch.__REDUX_STORE__ = store;
  }

  return store;
}

// TODO: type fixes
export default (App: any) => {
  return class AppWithRematch extends React.Component {
    public static async getInitialProps(
      appContext: any,
    ): Promise<{ initialReduxState: RootState }> {
      // Get or Create the store with `undefined` as initialState
      // This allows you to set a custom default initialState
      const reduxStore = getOrCreateStore();

      // Provide the store to getInitialProps of pages
      appContext.ctx.reduxStore = reduxStore;

      let appProps = {};

      if (typeof App.getInitialProps === 'function') {
        appProps = await App.getInitialProps(appContext);
      }

      return {
        ...appProps,
        initialReduxState: reduxStore.getState(),
      };
    }

    private reduxStore: Store;

    constructor(props: { initialReduxState: RootState }) {
      super(props);
      this.reduxStore = getOrCreateStore(props.initialReduxState);
    }

    public render(): JSX.Element {
      return <App {...this.props} reduxStore={this.reduxStore} />;
    }
  };
};
