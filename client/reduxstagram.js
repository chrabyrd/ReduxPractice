import React from 'react';
import { render } from 'react-dom';

import css from './styles/style.styl';

import Main from './components/Main';

document.addEventListener('DOMContentLoaded', () => {
  render(<Main />, document.querySelector('#root'));
})
