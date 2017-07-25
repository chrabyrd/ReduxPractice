import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import css from './styles/style.styl';

import Main from './components/Main';
import SinglePhoto from './components/SinglePhoto';
import PhotoGrid from './components/PhotoGrid';

document.addEventListener('DOMContentLoaded', () => {
  const router = (
    <Router history={hashHistory}>
      <Route path="/" component={Main}>
        <IndexRoute component={PhotoGrid}></IndexRoute>
        <Route path="/view/:postId" component={SinglePhoto}></Route>
      </Route>
    </Router>
  )

  render(router, document.querySelector('#root'));
})
