import React, { Component } from 'react';

import Router from 'routes/router';

import { Provider } from 'react-redux';
import { store } from 'redux/store';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}
