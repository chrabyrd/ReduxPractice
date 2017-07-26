import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { Provider } from 'react-redux';

import css from './styles/style.styl';

import App from './components/App';
import SinglePhoto from './components/SinglePhoto';
import PhotoGrid from './components/PhotoGrid';

import { store, history } from './store';

document.addEventListener('DOMContentLoaded', () => {
  const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={PhotoGrid}></IndexRoute>
        <Route path="/view/:postId" component={SinglePhoto}></Route>
      </Route>
    </Router>
  </Provider>
  )

  render(router, document.querySelector('#root'));
})
